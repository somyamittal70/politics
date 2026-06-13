import React, { useState } from "react";
import {
  MessageCircle,
  Mail,
  Globe,
  Send,
} from "lucide-react";

// Inline brand SVG icons (lucide-react doesn't include brand logos)
const FacebookIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.79c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.78 8.44-4.94 8.44-9.94Z" />
  </svg>
);

const InstagramIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.91l-5.41-7.07L4.5 22H1.24l8.03-9.18L1.5 2h6.91l4.9 6.46Zm-2.43 18h1.84L8.27 4H6.32Z" />
  </svg>
);

const YoutubeIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M23.5 6.2s-.23-1.64-.94-2.36c-.9-.95-1.91-.95-2.37-1.01C16.91 2.5 12 2.5 12 2.5h-.01s-4.9 0-8.18.33c-.46.06-1.47.06-2.37 1.01C.73 4.56.5 6.2.5 6.2S.25 8.13.25 10.07v1.86c0 1.94.25 3.87.25 3.87s.23 1.64.94 2.36c.9.95 2.08.92 2.6 1.02 1.89.18 8 .24 8 .24s4.91-.01 8.19-.34c.46-.06 1.47-.06 2.37-1.01.71-.72.94-2.36.94-2.36s.25-1.93.25-3.87v-1.86c0-1.94-.25-3.87-.25-3.87ZM9.75 14.85V8.99l6.13 2.93z" />
  </svg>
);



const ACCENT = "#E8541A";

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "8px",
  border: "1px solid #dddddd",
  fontSize: "14.5px",
  fontFamily: "inherit",
  color: "#1a1a1a",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s ease",
};

const labelStyle = {
  display: "block",
  fontSize: "13.5px",
  fontWeight: 600,
  color: "#333333",
  marginBottom: "6px",
};

function Field({ label, ...props }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label style={labelStyle}>{label}</label>
      <input
        {...props}
        style={inputStyle}
        onFocus={(e) => (e.target.style.borderColor = ACCENT)}
        onBlur={(e) => (e.target.style.borderColor = "#dddddd")}
      />
    </div>
  );
}

// Quick connect options — update links/numbers as needed
const quickConnect = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919768047680", // TODO: replace with actual number
  },
  {
    icon: Mail,
    label: "Email",
    href: "ssinghdham@gmail.com", // TODO: replace with actual email
  },
];

// Social media handles — update links as needed
const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/yourpage" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/yourhandle" },
  { icon: XIcon, label: "X (Twitter)", href: "https://x.com/yourhandle" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com/yourchannel" },
];

function ConnectButton({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 18px",
        borderRadius: "10px",
        border: `1.5px solid ${ACCENT}`,
        color: "#1a1a1a",
        textDecoration: "none",
        fontSize: "14.5px",
        fontWeight: 600,
        transition: "background 0.2s ease, color 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = ACCENT;
        e.currentTarget.style.color = "#ffffff";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = "#1a1a1a";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <Icon size={20} strokeWidth={2} />
      {label}
    </a>
  );
}

export default function Connect() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: hook this up to your form-handling backend / email service
    console.log("Form submitted:", form);
  };

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "60px 24px",
        overflow: "hidden",
        fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Section Heading */}
      <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: ACCENT,
            marginBottom: "8px",
          }}
        >
          Contact & Connect
        </p>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "14px",
          }}
        >
          Connect, Collaborate & Contribute
        </h2>
        <p style={{ fontSize: "16px", color: "#666666", lineHeight: 1.7 }}>
          For public outreach, community initiatives, organizational
          activities, events, and citizen engagement.
        </p>
      </div>

      {/* Main Content: Photo + Message | Form */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto 56px",
          display: "flex",
          flexWrap: "wrap",
          gap: "48px",
          alignItems: "flex-start",
        }}
      >
        {/* Left Side */}
        <div style={{ flex: "1 1 320px", maxWidth: "420px" }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              borderRadius: "16px",
              background: "#f7f7f7",
              border: `2px solid ${ACCENT}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#999999",
              fontSize: "14px",
              marginBottom: "24px",
              overflow: "hidden",
            }}
          >
            {/*
              Replace this placeholder block with:
              <img
                src="YOUR_PHOTO_IMAGE"
                alt="Your Name"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            */}
            Your Photo
          </div>

          <p
            style={{
              fontSize: "15.5px",
              color: "#555555",
              lineHeight: 1.8,
              fontStyle: "italic",
              borderLeft: `3px solid ${ACCENT}`,
              paddingLeft: "16px",
            }}
          >
            "Public life is built on communication, participation and
            collective effort. I welcome constructive suggestions, community
            initiatives and opportunities to serve society."
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div
          style={{
            flex: "1 1 380px",
            background: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
            padding: "32px",
            boxSizing: "border-box",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Field
              label="Full Name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Field
              label="Mobile Number"
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              value={form.mobile}
              onChange={handleChange}
              required
            />
            <Field
              label="Email (Optional)"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
            <Field
              label="Subject"
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />

            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                onFocus={(e) => (e.target.style.borderColor = ACCENT)}
                onBlur={(e) => (e.target.style.borderColor = "#dddddd")}
              />
            </div>

            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: ACCENT,
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(232, 84, 26, 0.3)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(232, 84, 26, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(232, 84, 26, 0.3)";
              }}
            >
              <Send size={18} strokeWidth={2} />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Quick Connect */}
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#1a1a1a",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          Quick Connect
        </h3>

        {/* WhatsApp / Email */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          {quickConnect.map((item, idx) => (
            <ConnectButton key={idx} {...item} />
          ))}
        </div>

        {/* Social Media */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "16px",
            color: "#1a1a1a",
            fontSize: "15px",
            fontWeight: 700,
          }}
        >
          <Globe size={20} color={ACCENT} strokeWidth={2} />
          Social Media
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
          }}
        >
          {socialLinks.map((item, idx) => (
            <ConnectButton key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}