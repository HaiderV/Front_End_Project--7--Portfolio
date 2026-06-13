import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Send, Sparkles, CornerDownLeft } from 'lucide-react';
import Bot from "../assets/bot.png";

const Chat = ({ onClose }) => {
    const [messages, setMessages] = useState(() => {
        const saved = sessionStorage.getItem('chat_messages');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Failed to parse saved chat messages:", e);
            }
        }
        return [
            {
                id: 'welcome-message',
                text: "Hello! I'm LVB, Haider's AI assistant. I can tell you about his projects, skills, certifications, and career goals. How can I help?",
                isBot: true,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            },
        ];
    });
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const suggestions = [
        "Tell me about Haider",
        "What projects have you built?",
        "What are your technical skills?",
        "What are your career goals?",
    ];

    // Auto scroll to bottom updates
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // Save messages to sessionStorage on update
    useEffect(() => {
        sessionStorage.setItem('chat_messages', JSON.stringify(messages));
    }, [messages]);

    const handleSend = async (textToSend) => {
        if (!textToSend.trim()) return;

        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        // Add user message
        const userMessage = {
            id: `user-${Date.now()}-${Math.random()}`,
            text: textToSend,
            isBot: false,
            time: currentTime,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        try {
            const response = await fetch("http://localhost:5000/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: textToSend,
                }),
            });
            const data = await response.json();
            setIsTyping(false);
            const botResponse = {
                id: `bot-${Date.now()}-${Math.random()}`,
                text: data.reply,
                isBot: true,
                time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
            };
            setMessages((prev) => [...prev, botResponse]);

        } catch (error) {
            console.log(error);
            setIsTyping(false);
        }
    };

    const hasUserSentMessage = messages.some(msg => !msg.isBot);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend(inputValue);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, height: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1, height: 'auto' }}
            exit={{ opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-[380px] h-[650px] max-h-[85vh] sm:max-h-[650px] mobile-fullscreen:w-screen flex flex-col bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/60 rounded-2xl shadow-blue-glow overflow-hidden select-none z-50 md:mr-2"
            style={{
                maxWidth: 'calc(100vw - 2rem)',
            }}
        >
            {/* HEADER SECTION */}
            <div className="p-4 bg-gradient-to-r from-black via-neutral-950 to-neutral-900 border-b border-neutral-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-amber-500 p-[1px] flex items-center justify-center shadow-red-glow">
                            <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center overflow-hidden">
                                <img
                                    src={Bot}
                                    alt="Mascot Avatar"
                                    className="w-8 h-8 object-contain"
                                />
                            </div>
                        </div>
                        {/* Glowing online node indicator */}
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-neutral-950 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm text-neutral-100 tracking-wide flex items-center gap-1">
                            LVB AI Assistant <Sparkles className="w-3 h-3 text-amber-400" />
                        </h3>
                        <p className="text-xs text-neutral-400 font-medium">Online</p>
                    </div>
                </div>

                {/* Window Controllers */}
                <div className="flex items-center gap-1">
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900 transition-colors"
                    >
                        <Minus className="w-4 h-4" />
                    </button>
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-red-500 hover:bg-red-950/30 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* MESSAGES VIEW BOX */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-radial-glow">
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className={`flex flex-col ${msg.isBot ? 'items-start' : 'items-end'}`}
                    >
                        <div
                            className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed tracking-wide shadow-sm ${msg.isBot
                                ? 'bg-gradient-to-br from-neutral-900 to-neutral-950 text-neutral-200 border border-neutral-800/80 rounded-tl-none'
                                : 'bg-gradient-to-br from-red-600 via-red-700 to-crimson text-white rounded-tr-none shadow-red-glow/20 border border-red-500/30'
                                }`}
                        >
                            <p className="whitespace-pre-wrap">{msg.text}</p>
                        </div>
                        <span className="text-[10px] text-neutral-500 mt-1 px-1 font-mono">{msg.time}</span>
                    </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-start"
                    >
                        <div className="bg-neutral-900/60 border border-neutral-800/80 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-delay:-0.15s]" />
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" />
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* QUICK SUGGESTION CHIPS */}
            {!hasUserSentMessage && (
                <div className="px-4 py-2 flex flex-wrap gap-1.5 bg-neutral-950/40 border-t border-neutral-900/50">
                    {suggestions.map((chip, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.03, borderColor: 'rgba(234, 179, 8, 0.4)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleSend(chip)}
                            className="text-[11px] bg-neutral-900/90 text-neutral-300 border border-neutral-800 px-2.5 py-1 rounded-lg transition-colors hover:text-amber-400 hover:bg-neutral-900"
                        >
                            {chip}
                        </motion.button>
                    ))}
                </div>
            )}

            {/* INPUT ACTION BOX */}
            <div className="p-4 bg-neutral-950 border-t border-neutral-900 flex items-end gap-2">
                <div className="relative flex-1 bg-neutral-900/90 rounded-xl border border-neutral-800 focus-within:border-red-600/60 transition-colors">
                    <textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask me anything..."
                        rows={1}
                        className="w-full bg-transparent text-sm text-neutral-200 placeholder-neutral-500 pl-3 pr-8 py-3 resize-none focus:outline-none scrollbar-none max-h-24 font-normal"
                        style={{ height: '42px' }}
                    />
                    <div className="absolute right-2.5 bottom-3 pointer-events-none hidden sm:block">
                        <CornerDownLeft className="w-3 h-3 text-neutral-600" />
                    </div>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSend(inputValue)}
                    disabled={!inputValue.trim()}
                    className={`h-[42px] w-[42px] rounded-xl flex items-center justify-center transition-all ${inputValue.trim()
                        ? 'bg-gradient-to-r from-red-600 to-amber-500 text-black shadow-red-glow'
                        : 'bg-neutral-900 text-neutral-600 cursor-not-allowed border border-neutral-800/60'
                        }`}
                >
                    <Send className="w-4 h-4" />
                </motion.button>
            </div>
        </motion.div>
    );
};

export default Chat;
