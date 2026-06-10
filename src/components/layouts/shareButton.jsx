import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  const phoneNumber = "+919768047680";

  const message =
    "Hi, I am interested in interior design services. Please share details about consultation, pricing, and project timelines.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 1,
        type: "spring",
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 md:bottom-5 md:right-5 lg:bottom-8 lg:right-8 z-[999] group"
    >
      {/* Ripple */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

      {/* Button */}
      <div
        className="
          relative
          flex
          items-center
          justify-center
          w-14 h-14
          md:w-16 md:h-16
          lg:w-[70px] lg:h-[70px]
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_15px_40px_rgba(37,211,102,0.45)]
        "
      >
        <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
      </div>

      {/* Tooltip */}
      <div
        className="
          hidden md:block
          absolute
          right-20
          top-1/2
          -translate-y-1/2
          whitespace-nowrap
          bg-[#0D1B3E]
          text-white
          text-sm
          px-4
          py-2
          rounded-xl
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-300
          pointer-events-none
          shadow-xl
        "
      >
        Chat With Us
      </div>
    </motion.a>
  );
}
