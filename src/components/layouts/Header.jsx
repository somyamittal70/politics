import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Activities", path: "/activities" },
  { name: "Campaigns", path: "/campaigns" },
  { name: "Media Center", path: "/media" },
  { name: "Resources", path: "/resources" },
  { name: "News & Updates", path: "/news" },
  { name: "Contact", path: "/contact" },
  { name: "Connect", path: "/connect" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0D1B3E]/95 backdrop-blur-md" : "bg-[#0D1B3E]"
        }`}
      >
        <div className="h-[3px] bg-gradient-to-r from-[#E8541A] via-[#C9A84C] to-[#138808]" />

        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between h-[70px]">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 no-underline">
            <div className="w-10 h-10 bg-[#E8541A] rounded-full flex items-center justify-center">
              🪷
            </div>

            <div>
              <h2 className="text-white font-bold">AMIT SHAH</h2>
              <p className="text-[#E2C06A] text-xs">Home Minister of India</p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
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
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 ${
                        isActive ? "w-[80%] bg-[#F4712E]" : "w-0 bg-[#E2C06A]"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            ☰
          </button>
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
        )}
      </header>

      <div className="h-[70px]" />
    </>
  );
}
