const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Address", href: "/address" },
  { label: "Media", href: "/media" },
];

const activitiesLinks = [
  { label: "Plantation", href: "/plantation" },
  { label: "Student", href: "/student" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Events", href: "/events" },
];

const socialLinks = [
  {
    label: "Instagram",
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
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    hoverColor: "hover:bg-[#E1306C] hover:border-[#ee2a7b]",
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    hoverColor: "hover:bg-[#1877F2] hover:border-[#1877F2]",
  },

  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    hoverColor: "hover:bg-[#000000] hover:border-[#555]",
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8z" />
        <path d="M10 15.5v-7l6 3.5-6 3.5z" fill="white" />
      </svg>
    ),
    hoverColor: "hover:bg-[#FF0000] hover:border-[#FF0000]",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080F22] overflow-hidden">
      {/* Top tricolor accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, #E8541A 0%, #FDFAF5 50%, #138808 100%)",
        }}
      />

      {/* Subtle dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #FDFAF5 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow blob */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-[0.06] rounded-full"
        style={{
          background: "radial-gradient(circle, #E8541A, transparent 70%)",
        }}
      />

      {/* ── MAIN FOOTER CONTENT ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-12 lg:gap-10">
          {/* ── COL 1: Brand ── */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-[#E8541A] rounded-full flex items-center justify-center text-2xl shadow-[0_0_0_3px_rgba(232,84,26,0.2)]">
                🪷
              </div>
              <div>
                <p
                  className="text-[1.3rem] font-black tracking-widest text-[#FDFAF5] leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Sandeep Singh Dham
                </p>
                
              </div>
            </div>

            {/* Short bio */}
            <p
              className="text-[0.88rem] text-[#FDFAF5]/85 leading-[1.8] mb-6 max-w-xs"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
              }}
            >
              Dedicated to the service of the nation, working tirelessly for the
              progress, security, and unity of Bharat.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-[10px] flex-wrap">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-9 h-9 flex items-center justify-center
                    border border-[#FDFAF5]/15 text-[#FDFAF5]/60
                    ${s.hoverColor} hover:text-[#FDFAF5]
                    transition-all duration-250 hover:scale-110 hover:-translate-y-[2px]
                    rounded-[2px]`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── COL 2: Quick Links ── */}
          <div>
            <h4
              className="text-[0.65rem] font-black tracking-[0.28em] uppercase text-[#E8541A] mb-5 flex items-center gap-2"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              <span className="w-5 h-[2px] bg-[#E8541A] rounded" />
              Quick Links
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 no-underline
                      text-[0.83rem] font-semibold text-[#FDFAF5]/85
                      hover:text-[#E8541A] transition-colors duration-200"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    <span className="w-0 h-[1px] bg-[#E8541A] rounded transition-all duration-250 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 3:Activities  ── */}
          <div>
            <h4
              className="text-[0.65rem] font-black tracking-[0.28em] uppercase text-[#E8541A] mb-5 flex items-center gap-2"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              <span className="w-5 h-[2px] bg-[#E8541A] rounded" />
              Activities
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {activitiesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 no-underline
                      text-[0.83rem] font-semibold text-[#FDFAF5]/85
                      hover:text-[#E8541A] transition-colors duration-200"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    <span className="w-0 h-[1px] bg-[#E8541A] rounded transition-all duration-250 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 4: Contact ── */}
          <div>
            <h4
              className="text-[0.65rem] font-black tracking-[0.28em] uppercase text-[#E8541A] mb-5 flex items-center gap-2"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              <span className="w-5 h-[2px] bg-[#E8541A] rounded" />
              Contact
            </h4>
            <h3
              className="group flex items-center gap-2 no-underline
                      text-[0.83rem] font-semibold text-[#FDFAF5]/85
                      hover:text-[#E8541A] transition-colors duration-200"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              +91 9768047680
            </h3>
            <h3
              className="group flex items-center gap-2 no-underline
                      text-[0.83rem] font-semibold text-[#FDFAF5]/85
                      hover:text-[#E8541A] transition-colors duration-200"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
             ssinghdham@gmail.com
            </h3>

            {/* Tricolor flag strip */}
            <div className="flex mt-6 rounded-[2px] overflow-hidden h-[5px]">
              <div className="flex-1 bg-[#E8541A]" />
              <div className="flex-1 bg-[#FFFF]" />
              <div className="flex-1 bg-[#138808]" />
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="my-10 h-[1px] bg-[#FDFAF5]/[0.09]" />

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[0.72rem] text-[#FDFAF5]/85 text-center sm:text-left"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            © {year} Sandeep Singh Dham. All rights reserved. &nbsp;|&nbsp;
            Official Website
          </p>
          <p className="text-[0.72rem] text-[#FDFAF5]/85 text-center sm:text-left">
            Developed by Debox Technology
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Disclaimer"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[0.7rem] font-semibold text-[#FDFAF5]/85
                  hover:text-[#C9A84C] no-underline transition-colors duration-200"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
