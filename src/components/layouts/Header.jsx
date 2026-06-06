import { useState, useEffect } from "react";

const navLinks = ["Home", "About", "Press", "Events", "My Journey", "Gallery", "Contact Us"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("EN");
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
            ? "bg-[#0D1B3E]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.35)]"
            : "bg-[#0D1B3E]"
          }`}
      >
        {/* Tricolor top bar */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#E8541A] via-[#C9A84C] to-[#138808]" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-[60px] sm:h-[68px]">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 no-underline">
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#E8541A] rounded-full flex items-center justify-center text-base sm:text-xl shadow-[0_0_0_3px_rgba(232,84,26,0.25)] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105 flex-shrink-0">
              🪷
            </div>
            <div className="flex flex-col">
              <span
                className="text-[1rem] sm:text-[1.25rem] font-black tracking-widest text-[#FDFAF5] leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                AMIT SHAH
              </span>
              <span
                className="text-[0.52rem] sm:text-[0.58rem] font-bold tracking-[0.18em] uppercase text-[#E2C06A] mt-[3px] hidden sm:block"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Home Minister of India
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setActiveLink(link)}
                className={`relative font-semibold text-[0.72rem] xl:text-[0.78rem] tracking-[0.08em] xl:tracking-[0.1em] uppercase px-2.5 xl:px-3 py-2 rounded-sm transition-colors duration-200 no-underline group
                  ${activeLink === link
                    ? "text-[#F4712E]"
                    : "text-[#FDFAF5]/80 hover:text-[#E2C06A]"
                  }`}
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                {link}
                <span
                  className={`absolute bottom-[2px] left-1/2 -translate-x-1/2 h-[2px] rounded-sm transition-all duration-300
                    ${activeLink === link
                      ? "w-[calc(100%-1.25rem)] bg-[#F4712E]"
                      : "w-0 bg-[#E2C06A] group-hover:w-[calc(100%-1.25rem)]"
                    }`}
                />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language toggle — hidden on very small screens */}
            <button
              onClick={() => setLang(lang === "EN" ? "हिं" : "EN")}
              className="hidden xs:flex text-[0.68rem] sm:text-[0.72rem] font-bold tracking-[0.15em] text-[#E2C06A] bg-[#C9A84C]/10 border border-[#C9A84C]/30 px-2.5 sm:px-3 py-[4px] sm:py-[5px] rounded-sm cursor-pointer transition-all duration-200 hover:bg-[#C9A84C]/20 hover:border-[#C9A84C] hover:text-[#C9A84C] items-center"
            >
              {lang} ▾
            </button>

            {/* Language toggle — visible only on very small screens (xs breakpoint) */}
            <button
              onClick={() => setLang(lang === "EN" ? "हिं" : "EN")}
              className="xs:hidden text-[0.68rem] font-bold text-[#E2C06A] bg-[#C9A84C]/10 border border-[#C9A84C]/30 px-2 py-[3px] rounded-sm cursor-pointer transition-all duration-200 hover:bg-[#C9A84C]/20"
            >
              {lang}
            </button>

            {/* Search button */}
            <button
              aria-label="Search"
              className="w-8 h-8 sm:w-9 sm:h-9 border border-[#FDFAF5]/20 rounded-full flex items-center justify-center text-[#FDFAF5] bg-transparent cursor-pointer transition-all duration-200 hover:bg-[#E8541A]/15 hover:border-[#E8541A] hover:text-[#F4712E]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            {/* Hamburger — shown below lg */}
            <button
              className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer flex-shrink-0"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-[22px] sm:w-[26px] h-[2px] bg-[#FDFAF5] rounded-sm transition-all duration-300 origin-center
                  ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block w-[22px] sm:w-[26px] h-[2px] bg-[#FDFAF5] rounded-sm transition-all duration-300
                  ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block w-[22px] sm:w-[26px] h-[2px] bg-[#FDFAF5] rounded-sm transition-all duration-300 origin-center
                  ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden flex flex-col bg-[#162547] border-t border-[#C9A84C]/20 px-5 sm:px-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 overflow-hidden
            ${menuOpen ? "max-h-[520px] opacity-100 py-3" : "max-h-0 opacity-0 py-0 pointer-events-none"}`}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
              onClick={() => { setMenuOpen(false); setActiveLink(link); }}
              className={`flex items-center gap-3 text-[0.82rem] sm:text-[0.88rem] font-semibold tracking-[0.08em] uppercase py-3.5 border-b border-white/[0.06] no-underline transition-colors duration-200 last:border-b-0 group
                ${activeLink === link ? "text-[#F4712E]" : "text-[#FDFAF5]/80 hover:text-[#E2C06A]"}`}
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              <span
                className={`w-[6px] h-[6px] rounded-full bg-[#E8541A] flex-shrink-0 transition-opacity duration-200
                  ${activeLink === link ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              />
              {link}
              {activeLink === link && (
                <span className="ml-auto text-[#F4712E] text-xs">●</span>
              )}
            </a>
          ))}

          {/* Mobile lang toggle inside menu */}
          <div className="flex items-center justify-between py-4 mt-1">
            <span
              className="text-[0.7rem] tracking-[0.15em] uppercase text-[#FDFAF5]/40"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Language
            </span>
            <button
              onClick={() => setLang(lang === "EN" ? "हिं" : "EN")}
              className="text-[0.72rem] font-bold tracking-[0.15em] text-[#E2C06A] bg-[#C9A84C]/10 border border-[#C9A84C]/30 px-3 py-[5px] rounded-sm cursor-pointer transition-all duration-200 hover:bg-[#C9A84C]/20 hover:border-[#C9A84C]"
            >
              {lang === "EN" ? "Switch to हिंदी" : "Switch to EN"}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to push page content below fixed header */}
      <div className="h-[60px] sm:h-[68px]" />

      {/* Overlay to close menu on outside tap */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}