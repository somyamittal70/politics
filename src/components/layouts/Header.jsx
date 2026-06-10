import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import ConsultationModal from "./ConsultationModal";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Activities", path: "/activities" },
  { name: "Campaigns", path: "/campaigns" },
  { name: "Media Center", path: "/media" },
  { name: "Publications", path: "/publications" },
  { name: "News & Updates", path: "/news" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FFFFFF]/95 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
            : "bg-[#FFFFFF]"
        }`}
      >
        {/* Top Strip - Premium Accent */}
        <div className="h-[2px] bg-[#FC8814]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px] md:h-[70px]">
            {/* Logo Section */}
            <NavLink
              to="/"
              className="flex items-center gap-3 no-underline shrink-0 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-[#FC8814] rounded-full flex items-center justify-center text-xl shadow-md hover:shadow-lg transition-shadow">
                🪷
              </div>

              <div>
                <h2
                  className="text-[#333333] font-black text-base md:text-lg leading-tight"
                   style={{ fontFamily: "Playfair Display,sans-serif" }}
                >
                  AMIT SHAH
                </h2>
                <p
                  className="text-[#FC8814] text-[0.65rem] md:text-[0.7rem] font-bold tracking-wider uppercase"
                  style={{ fontFamily: "Raleway,sans-serif" }}
                >
                  Home Minister
                </p>
              </div>
            </NavLink>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-[0.60rem] md:text-[0.7rem] uppercase font-bold tracking-[0.08em] transition-all duration-300 no-underline ${
                      isActive
                        ? "text-[#FC8814]"
                        : "text-[#666666] hover:text-[#333333]"
                    }`
                  }
                  style={{ fontFamily: "Playfair Display,sans-serif" }}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#FC8814] transition-all duration-300 ${
                          isActive ? "w-[70%]" : "w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <button
              onClick={() => setShowModal(true)}
              className="
                hidden lg:flex
                items-center
                gap-2
                bg-[#FC8814]
                hover:bg-[#E8741F]
                text-[#FFFFFF]
                px-2 md:px-2
                py-3 md:py-3.5
                rounded-sm
                font-black
                text-[0.60rem]
                tracking-[0.1em]
                uppercase
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-[#FC8814]/25
                active:scale-95
              "
               style={{ fontFamily: "Playfair Display,sans-serif" }}
            >
              Connect With Us
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                lg:hidden
                text-[#333333]
                p-2 md:p-2.5
                rounded-lg
                hover:bg-[#F5F5F5]
                transition-all
                duration-200
                active:scale-95
              "
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={28} strokeWidth={2.5} />
              ) : (
                <Menu size={28} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-[#FFFFFF] border-t border-[#E8E7E6] transition-all duration-300 overflow-hidden ${
            menuOpen
              ? "max-h-screen opacity-100 shadow-lg"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 sm:px-6 py-5 max-w-[1440px] mx-auto">
            <nav className="flex flex-col">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `py-3 md:py-4 text-[0.85rem] md:text-base font-bold uppercase tracking-[0.08em] no-underline transition-colors duration-200 ${
                      idx !== navLinks.length - 1
                        ? "border-b border-[#E8E7E6]"
                        : ""
                    } ${
                      isActive
                        ? "text-[#FC8814]"
                        : "text-[#666666] hover:text-[#333333]"
                    }`
                  }
                  style={{ fontFamily: "Raleway,sans-serif" }}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile CTA Button */}
            <button
              onClick={() => {
                setShowModal(true);
                setMenuOpen(false);
              }}
              className="
                w-full
                mt-6
                bg-[#FC8814]
                hover:bg-[#E8741F]
                text-[#FFFFFF]
                py-3 md:py-4
                rounded-sm
                font-black
                text-[0.75rem]
                md:text-[0.8rem]
                tracking-[0.1em]
                uppercase
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-[#FC8814]/25
                active:scale-95
              "
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              Connect With Us
            </button>
          </div>
        </div>
      </header>

      <ConsultationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
      <div className="h-[45px]" />
    </>
  );
}
