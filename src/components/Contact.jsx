import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact_style.css";
import Heading from "./Heading";
import { useScrollReveal } from "./useScrollReveal";

function Contact() {
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(
        "service_kmjjhjd",
        "template_gkqjmc4",
        e.target,
        "5i6hT-LOz6zRImSww",
      )
      .then(() => {
        setStatus("success");
        setTimeout(() => {
          setStatus(null);
        }, 5000);
        e.target.reset();
      })
      .catch((err) => {
        setStatus("error");
        setTimeout(() => {
          setStatus(null);
        }, 5000);
      });
  };
  useScrollReveal();
  return (
    <div id="contact">
      <Heading heading="Contact Me" backText="Get in Touch" />

      <div className="overflow-hidden">
        <div className="max-w-2xl mx-auto mt-20 md:mt-32 my-10 md:my-20 px-4 sm:px-6 md:px-12 py-6 md:py-12 bg-white border-2 border-black rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          {/* Header Area */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-black"></div>
              <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              <div className="w-3 h-3 rounded-full bg-gray-100"></div>
            </div>
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-black/30 italic truncate max-w-[120px] sm:max-w-none">
              Haider S Vadgamwala
            </span>
          </div>

          <form onSubmit={sendEmail} className="flex flex-col gap-8">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b-2 border-gray-200 focus:border-black outline-none py-2 transition-colors placeholder-transparent"
                />
                <label className="absolute left-0 -top-3.5 text-gray-400 text-xs font-black uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-xs reveal">
                  Name
                </label>
              </div>

              <div className="relative group">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder=" "
                  className="peer w-full bg-transparent border-b-2 border-gray-200 focus:border-black outline-none py-2 transition-colors placeholder-transparent"
                />
                <label className="absolute left-0 -top-3.5 text-gray-400 text-xs font-black uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-xs reveal">
                  Email
                </label>
              </div>
            </div>

            {/* Row 2: Subject */}
            <div className="relative group">
              <input
                name="subject"
                type="text"
                required
                placeholder=" "
                className="peer w-full bg-transparent border-b-2 border-gray-200 focus:border-black outline-none py-2 transition-colors placeholder-transparent"
              />
              <label className="absolute left-0 -top-3.5 text-gray-400 text-xs font-black uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-xs reveal">
                Subject
              </label>
            </div>

            {/* Row 3: Message */}
            <div className="relative group">
              <textarea
                name="message"
                required
                placeholder=" "
                rows="4"
                className="peer w-full bg-transparent border-b-2 border-gray-200 focus:border-black outline-none py-2 transition-colors placeholder-transparent resize-none"
              />
              <label className="absolute left-0 -top-3.5 text-gray-400 text-xs font-black uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-xs reveal">
                Message
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-end mt-4">
              <button className="group relative px-8 py-4 bg-black text-white font-black uppercase tracking-[0.2em] rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl">
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </form>

          {status && status !== "sending" && (
            <div
  className={`fixed bottom-10 left-0 right-0 mx-auto w-fit z-50 flex items-center gap-4 px-6 py-4 rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-bounce-in 
  ${status === "success" ? "bg-white" : "bg-black text-white"}`}
>
              {/* Icon */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${status === "success" ? "border-black" : "border-white"}`}
              >
                {status === "success" ? "✓" : "!"}
              </div>

              {/* Message */}
              <p className="font-black uppercase tracking-widest text-xs">
                {status === "success"
                  ? "Message Received. Connection Established."
                  : "System Error. Please Try Again."}
              </p>

              {/* Close Button */}
              <button
                onClick={() => setStatus(null)}
                className="ml-4 opacity-30 hover:opacity-100 transition-opacity"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
