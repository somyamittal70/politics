import { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
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
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
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
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
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
    label: "Twitter / X",
    handle: "@AmitShah",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    color: "#E1306C",
  },
  {
    label: "YouTube",
    handle: "Amit Shah",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="#0D1B3E"
        />
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
    "w-full bg-white border text-gray/450 placeholder-black/25 px-3 sm:px-4 py-3 text-[0.85rem] sm:text-[0.88rem] outline-none transition-all duration-200 rounded-[2px]";
  const inputStyle = (field) =>
    `${inputBase} ${focused === field ? "border-[#E8541A] shadow-[0_0_0_3px_rgba(232,84,26,0.12)]" : "border-[#FDFAF5]/10 hover:border-[#FDFAF5]/25"}`;

  return (
    <>
      <section
        id="contact-us"
        className="relative bg-white overflow-hidden py-20 md:py-28"
      >
        {/* Grid texture bg */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#FDFAF5 1px, transparent 1px), linear-gradient(90deg, #FDFAF5 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute top-0 left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
            style={{
              background: "radial-gradient(circle, #E8541A, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-[5%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
            style={{
              background: "radial-gradient(circle, #C9A84C, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          {/* ── SECTION HEADER ── */}
          <div className="mb-12 md:mb-16">
            <div
              className="flex items-center gap-3 mb-3"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              <span className="w-7 h-[2px] bg-[#E8541A] rounded" />
              <span className="text-[0.65rem] font-black tracking-[0.3em] uppercase text-[#E8541A]">
                Get In Touch
              </span>
              <span className="w-7 h-[2px] bg-[#138808] rounded" />
            </div>
            <h2 className="text-[1.9rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.5rem] font-black text-[#E8541A] leading-[1.1]">
              Connect With{" "}
              <em className="text-[#E8541A] not-italic italic">Us</em>
            </h2>
            <p
              className="text-[1rem] md:text-[1.1rem] text-gray/500 mt-3 max-w-lg leading-relaxed"
              style={{ fontStyle: "italic" }}
            >
              Your voice matters. Reach out for queries, suggestions, or to be a
              part of the movement.
            </p>
          </div>

          {/* ── MAIN GRID ── */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.5fr] gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
            {/* ── LEFT: Info + Social ── */}
            <div className="flex flex-col gap-8">
              {/* Contact info cards */}
              <div className="flex flex-col gap-4">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-[#FDFAF5]/[0.07]
  bg-[#FDFAF5] rounded-[2px] hover:border-[#E8541A]/40
  transition-all duration-250 cursor-default"
                  >
                    {/* Icon box */}
                    <div
                      className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
  bg-[#E8541A]/10 text-[#E8541A] border border-[#E8541A]/20
  group-hover:bg-[#E8541A] group-hover:text-[#FDFAF5]
  transition-all duration-250 rounded-[2px]"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[0.6rem] font-black tracking-[0.22em] uppercase text-[#C9A84C] mb-[3px]">
                        {item.label}
                      </p>
                      <p className="text-[0.92rem] font-semibold text-black leading-snug">
                        {item.value}
                      </p>
                      <p className="text-[0.75rem] text-black/50 mt-[2px]">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="h-[1px] flex-1 bg-[#FDFAF5]/[0.07]" />
                <span className="text-[0.6rem] font-black tracking-[0.22em] uppercase text-black">
                  Follow
                </span>
                <div className="h-[1px] flex-1 bg-[#FDFAF5]" />
              </div>

              {/* Social links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 sm:gap-3 p-3
  border border-[#FDFAF5]/[0.07]
  bg-[#FDFAF5] rounded-[2px]
  no-underline hover:border-[#E8541A]/40
  transition-all duration-250"
                  >
                    <span
                      className="w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 transition-transform duration-250 group-hover:scale-110"
                      style={{ background: `${s.color}22`, color: s.color }}
                    >
                      {s.icon}
                    </span>
                    <div>
                      <p className="text-[0.58rem] font-black tracking-[0.18em] uppercase text-black/70 leading-none">
                        {s.label}
                      </p>
                      <p className="text-[0.78rem] font-semibold text-black/45 mt-[3px]">
                        {s.handle}
                      </p>
                    </div>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="ml-auto text-[#FDFAF5]/20 group-hover:text-[#E8541A] transition-colors duration-200"
                    >
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Contact Form ── */}
            <div className="relative">
              {/* Gold corner top-right */}
              <div className="hidden md:block absolute -top-3 -right-3 w-14 h-14 border-t-[2px] border-r-[2px] border-[#C9A84C]/40 z-10 pointer-events-none" />
              {/* Saffron corner bottom-left */}
              <div className="hidden md:block absolute -bottom-3 -left-3 w-14 h-14 border-b-[2px] border-l-[2px] border-[#E8541A]/40 z-10 pointer-events-none" />

              <div className="bg-[#FDFAF5] border border-[#FDFAF5]/[0.08] p-5 sm:p-6 md:p-9 rounded-[2px] backdrop-blur-sm">
                <h3 className="text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] font-black text-[#E8541A] mb-1">
                  Send a Message
                </h3>
                <p
                  className="text-[0.82rem] text-gray/500 mb-7"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Fill the form below and our team will get back to you shortly.
                </p>

                {/* Success state */}
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#138808]/20 border border-[#138808]/40 flex items-center justify-center">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#138808"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-[1.1rem] font-bold text-black text-center">
                      Message Sent!
                    </p>
                    <p className="text-[0.8rem] text-[#FDFAF5]/40 text-center max-w-xs">
                      Thank you for reaching out. We will respond within 2
                      working days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-[6px]">
                        <label className="text-[0.62rem] font-black tracking-[0.2em] uppercase text-black/70">
                          Full Name <span className="text-[#E8541A]">*</span>
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
                      <div className="flex flex-col gap-[6px]">
                        <label className="text-[0.62rem] font-black tracking-[0.2em] uppercase text-black/70">
                          Email <span className="text-[#E8541A]">*</span>
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
                          style={{ fontFamily: "Raleway, sans-serif" }}
                          required
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-[6px]">
                      <label className="text-[0.62rem] font-black tracking-[0.2em] uppercase text-black/70">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="What is this regarding?"
                        value={form.subject}
                        onChange={handleChange}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused("")}
                        className={inputStyle("subject")}
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-[6px]">
                      <label className="text-[0.62rem] font-black tracking-[0.2em] uppercase text-black/70">
                        Message <span className="text-[#E8541A]">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={window.innerWidth < 640 ? 4 : 5}
                        placeholder="Write your message here..."
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused("")}
                        className={`${inputStyle("message")} resize-none min-h-[120px] sm:min-h-[150px]`}
                        required
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="mt-2 w-full inline-flex items-center justify-center gap-2 sm:gap-3
bg-[#E8541A] hover:bg-[#F4712E] text-[#FDFAF5]
text-[0.72rem] sm:text-[0.8rem]
font-black tracking-[0.12em] sm:tracking-[0.18em]
uppercase px-5 sm:px-8 py-3 sm:py-4"
                      style={{
                        clipPath:
                          "polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))",
                      }}
                    >
                      Send Message
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tricolor bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, #E8541A 0%, #FDFAF5 50%, #138808 100%)",
          }}
        />
      </section>
    </>
  );
}
