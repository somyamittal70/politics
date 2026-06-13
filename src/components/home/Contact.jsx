import { useState } from "react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Office Address",
    value: "11, Akbar Road, New Delhi - 110011",
    sub: "Ministry of Home Affairs, North Block",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+91-11-2309 2011",
    sub: "Mon – Fri, 10:00 AM – 5:00 PM",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "contact@amitshah.in",
    sub: "We respond within 2 working days",
  },
];

const socialLinks = [
  {
    label: "Twitter",
    handle: "@AmitShah",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "#1DA1F2",
  },
  {
    label: "Facebook",
    handle: "AmitShahOfficial",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    color: "#1877F2",
  },
  {
    label: "Instagram",
    handle: "@amitshahofficial",
    href: "#",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <circle cx="17.5" cy="6.5" r="1.5" />
      </svg>
    ),
    color: "#E1306C",
  },
  {
    label: "YouTube",
    handle: "Amit Shah",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0D1B3E" />
      </svg>
    ),
    color: "#FF0000",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const inputBase =
    "w-full bg-white border text-slate-700 placeholder-slate-400 px-4 py-3 text-sm outline-none transition-all duration-300 rounded-lg font-light";
  const inputStyle = (field) =>
    `${inputBase} ${
      focused === field
        ? "border-[#E8541A] shadow-lg ring-2 ring-[#E8541A]/20"
        : "border-slate-200 hover:border-slate-300"
    }`;

  return (
    <section
      id="contact-us"
      className="relative bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden py-20 md:py-28 lg:py-32"
    >
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient orbs */}
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: "#E8541A" }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: "#C9A84C" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── SECTION HEADER ── */}
        <motion.div
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-1 rounded-full" style={{ backgroundColor: "#E8541A" }} />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              Get In Touch
            </span>
            <div className="w-8 h-1 rounded-full" style={{ backgroundColor: "#138808" }} />
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Connect With Us
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Your voice matters. Share your thoughts, ask questions, or join the movement for national progress.
          </p>
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* ── LEFT: Contact Info + Social ── */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            {/* Contact Info Cards */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  className="group p-6 bg-white border border-slate-200 rounded-2xl hover:border-[#E8541A]/30 hover:shadow-xl transition-all duration-300 cursor-default"
                  whileHover={{ y: -5 }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-4 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "#E8541A",
                      color: "white",
                    }}
                  >
                    {item.icon}
                  </div>
                  <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 mb-2">
                    {item.value}
                  </p>
                  <p className="text-xs text-slate-600">{item.sub}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4">
                Follow Us
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center gap-2 p-4 bg-white border border-slate-200 rounded-xl hover:border-[#E8541A]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${social.color}15`, 
                        color: social.color 
                      }}
                    >
                      {social.icon}
                    </div>
                    <p className="text-xs font-bold text-slate-900 text-center">
                      {social.label}
                    </p>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Map Container */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-64 md:h-80"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6754217236005!2d77.18878!3d28.6138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce276c71a3ffd%3A0xd5b7f0c7b74c1a8e!2s11%20Akbar%20Road%2C%20New%20Delhi%2C%20Delhi%20110011!5e0!3m2!1sen!2sin!4v1686123456789"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </motion.div>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-xl">
              <h3
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send a Message
              </h3>
              <p className="text-slate-600 mb-8 text-sm md:text-base">
                Share your inquiry or feedback. Our team will respond promptly.
              </p>

              {/* Success State */}
              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-16 gap-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#138808", color: "white" }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-900 mb-2">
                      Thank You!
                    </p>
                    <p className="text-slate-600 text-sm">
                      Your message has been received. We'll get back to you within
                      2 working days.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-slate-700 mb-2">
                        Full Name <span style={{ color: "#E8541A" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused("")}
                        className={inputStyle("name")}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-slate-700 mb-2">
                        Email <span style={{ color: "#E8541A" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused("")}
                        className={inputStyle("email")}
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-slate-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Topic of inquiry"
                      value={form.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused("")}
                      className={inputStyle("subject")}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-slate-700 mb-2">
                      Message <span style={{ color: "#E8541A" }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Your message..."
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused("")}
                      className={`${inputStyle("message")} resize-none`}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-bold text-white text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-lg active:scale-95"
                    style={{ backgroundColor: "#E8541A" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </motion.button>

                  <p className="text-xs text-slate-500 text-center">
                    We respect your privacy. Your information is secure.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Accent Bar */}
        <div className="mt-20 h-1 rounded-full bg-gradient-to-r from-[#E8541A] via-[#C9A84C] to-[#138808]" />
      </div>
    </section>
  );
}