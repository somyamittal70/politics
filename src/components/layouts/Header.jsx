
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
  { name: "Resources", path: "/resources" },
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
          scrolled ? "bg-[#0D1B3E]/95 backdrop-blur-md" : "bg-[#0D1B3E]"
        }`}
      >
        {/* Top Strip */}
        <div className="h-[3px] bg-gradient-to-r from-[#E8541A] via-[#C9A84C] to-[#138808]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-3 no-underline shrink-0"
            >
              <div className="w-10 h-10 bg-[#E8541A] rounded-full flex items-center justify-center text-lg">
                🪷
              </div>

            <div>
              <h2 className="text-white font-bold">AMIT SHAH</h2>
              <p className="text-[#E2C06A] text-xs">Home Minister of India</p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm uppercase tracking-wider transition-all duration-300 no-underline ${
                    isActive
                      ? "text-[#F4712E]"
                      : "text-white hover:text-[#E2C06A]"
                  }`
                }
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

          <button
            onClick={() => setShowModal(true)}
            className="
    hidden lg:flex
    items-center
    gap-2
    bg-[#E8541A]
    hover:bg-[#C8972B]
    text-white
    px-6
    py-3
    rounded-full
    font-medium
    transition-all
    duration-300
    hover:scale-105
    shadow-lg
  "
          >
            Connect With Us
          </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                xl:hidden
                text-white
                p-2
                rounded-lg
                hover:bg-white/10
                transition
              "
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        
        <div
          className={`xl:hidden absolute top-full left-0 w-full bg-[#162547] transition-all duration-300 ${
            menuOpen
              ? "max-h-screen overflow-y-auto opacity-100"
              : "max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <div className="px-6 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-4 border-b border-white/10 text-base no-underline transition ${
                    isActive
                      ? "text-[#F4712E]"
                      : "text-white hover:text-[#E2C06A]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button
              onClick={() => {
                setShowModal(true);
                setMenuOpen(false);
              }}
              className="
                mt-6
                w-full
                bg-[#E8541A]
                hover:bg-[#C8972B]
                text-white
                py-3
                rounded-xl
                font-semibold
                transition-all
              "
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
      <div className="h-[70px]" />
    </>
  );
}
