import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// Create a free account at emailjs.com, then add these to a .env file:
// VITE_EMAILJS_SERVICE_ID=your_service_id
// VITE_EMAILJS_TEMPLATE_ID=your_template_id
// VITE_EMAILJS_PUBLIC_KEY=your_public_key
//
// Your EmailJS template should use these variables:
// {{from_name}}, {{from_email}}, {{message}}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="w-64 p-4 text-center rounded-xl" style={{ backgroundColor: "var(--card)" }}>
        <p className="text-2xl mb-2">✓</p>
        <p className="text-sm font-medium" style={{ color: "var(--green)" }}>
          Message sent!
        </p>
        <p className="text-xs mt-1" style={{ color: "var(--text-sub)" }}>
          I'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass = "w-full text-xs px-3 py-2 rounded-lg outline-none transition-colors";
  const inputStyle = {
    backgroundColor: "var(--input)",
    color: "var(--text)",
    border: "1px solid var(--divider)",
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-64 space-y-2">
      <input
        type="text"
        name="from_name"
        placeholder="Your name"
        required
        className={inputClass}
        style={inputStyle}
      />
      <input
        type="email"
        name="from_email"
        placeholder="Your email"
        required
        className={inputClass}
        style={inputStyle}
      />
      <textarea
        name="message"
        placeholder="Your message..."
        required
        rows={3}
        className={`${inputClass} resize-none`}
        style={inputStyle}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full text-xs font-medium py-2 rounded-lg text-white transition-colors disabled:opacity-50"
        style={{ backgroundColor: "var(--green)" }}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-[10px] text-center" style={{ color: "#f87171" }}>
          Something went wrong. Email me directly at jumaisaq@gmail.com
        </p>
      )}
    </form>
  );
}
