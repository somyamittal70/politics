const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Contact Us", href: "/contact" },
];

const quickLinks = [
  { label: "Campaigns", href: "/campaigns" },
  { label: "Media Center", href: "/achievements" },
  { label: "Resources", href: "/resources" },
  { label: "News & Updates", href: "/news" },
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
    hoverColor: "hover:bg-[#E1306C] hover:border-[#E1306C]",
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
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.121 1.532 5.856L.054 23.447a.75.75 0 0 0 .922.922l5.666-1.465A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.695 9.695 0 0 1-4.964-1.366l-.355-.212-3.698.956.98-3.607-.232-.371A9.696 9.696 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
      </svg>
    ),
    hoverColor: "hover:bg-[#25D366] hover:border-[#25D366]",
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
    <footer className="relative bg-[#0D1B3E] overflow-hidden">
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
                  AMIT SHAH
                </p>
                <p
                  className="text-[0.58rem] font-bold tracking-[0.18em] uppercase text-[#C9A84C] mt-[3px]"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  Home Minister of India
                </p>
              </div>
            </div>

            {/* Short bio */}
            <p
              className="text-[0.88rem] text-[#FDFAF5]/45 leading-[1.8] mb-6 max-w-xs"
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

          {/* ── COL 2: Navigation ── */}
          <div>
            <h4
              className="text-[0.65rem] font-black tracking-[0.28em] uppercase text-[#E8541A] mb-5 flex items-center gap-2"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              <span className="w-5 h-[2px] bg-[#E8541A] rounded" />
              Navigation
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 no-underline
                      text-[0.83rem] font-semibold text-[#FDFAF5]/50
                      hover:text-[#C9A84C] transition-colors duration-200"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    <span className="w-0 h-[1px] bg-[#E8541A] rounded transition-all duration-250 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 3: Quick Links ── */}
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
                      text-[0.83rem] font-semibold text-[#FDFAF5]/50
                      hover:text-[#C9A84C] transition-colors duration-200"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    <span className="w-0 h-[1px] bg-[#E8541A] rounded transition-all duration-250 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 4: Newsletter ── */}
          <div>
            <h4
              className="text-[0.65rem] font-black tracking-[0.28em] uppercase text-[#E8541A] mb-5 flex items-center gap-2"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              <span className="w-5 h-[2px] bg-[#E8541A] rounded" />
              Stay Updated
            </h4>
            <p
              className="text-[0.83rem] text-[#FDFAF5]/40 leading-[1.7] mb-4"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Subscribe to receive the latest news, speeches, and updates
              directly in your inbox.
            </p>

            {/* Email subscribe */}
            <div className="flex flex-col gap-[10px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#080F22]/60 border border-[#FDFAF5]/10
                  text-[#FDFAF5] placeholder-[#FDFAF5]/20
                  px-4 py-[10px] text-[0.82rem] outline-none rounded-[2px]
                  focus:border-[#E8541A] focus:shadow-[0_0_0_3px_rgba(232,84,26,0.1)]
                  transition-all duration-200"
                style={{ fontFamily: "Raleway, sans-serif" }}
              />
              <button
                className="w-full flex items-center justify-center gap-2
                  bg-[#E8541A] hover:bg-[#F4712E] text-[#FDFAF5]
                  text-[0.75rem] font-black tracking-[0.18em] uppercase
                  py-[11px] transition-all duration-250 hover:-translate-y-[1px]
                  hover:shadow-[0_6px_20px_rgba(232,84,26,0.3)]"
                style={{
                  fontFamily: "Raleway, sans-serif",
                  clipPath:
                    "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
                }}
              >
                Subscribe
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Tricolor flag strip */}
            <div className="flex mt-6 rounded-[2px] overflow-hidden h-[5px]">
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-[#FFFF]" />
              <div className="flex-1 bg-[#138808]" />
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="my-10 h-[1px] bg-[#FDFAF5]/[0.07]" />

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[0.72rem] text-[#FDFAF5]/30 text-center sm:text-left"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            © {year} Amit Shah. All rights reserved. &nbsp;|&nbsp; Official
            Website
          </p>

          <div className="flex items-center gap-5">
            {["Privacy Policy", "Disclaimer", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[0.7rem] font-semibold text-[#FDFAF5]/25
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
