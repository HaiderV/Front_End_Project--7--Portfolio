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

      <div className="px-3 sm:px-4">
        <div
          className="
w-full

max-w-[325px]
sm:max-w-[420px]
md:max-w-[700px]
lg:max-w-[850px]

mx-auto
mt-16 md:mt-32
mb-10 md:mb-20

px-5 sm:px-8 md:px-10
py-6 md:py-8

bg-white
border-2 border-black
rounded-2xl

shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
"
        >
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
              className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000]
    w-[90%] max-w-md 
    flex items-start gap-3 
    px-4 py-3 
    rounded-2xl border-2 border-black 
    shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
    ${status === "success" ? "bg-white" : "bg-black text-white"}`}
            >
              {/* Icon */}
              <div
                className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border-2 text-xs
      ${status === "success" ? "border-black" : "border-white"}`}
              >
                {status === "success" ? "✓" : "!"}
              </div>

              {/* Message */}
              <p className="font-black uppercase tracking-wide text-xs sm:text-sm break-words">
                {status === "success"
                  ? "Message Received. Connection Established."
                  : "System Error. Please Try Again."}
              </p>

              {/* Close Button */}
              <button
                onClick={() => setStatus(null)}
                className="ml-auto opacity-40 hover:opacity-100 transition-opacity text-sm flex-shrink-0"
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
