import { motion } from "framer-motion";
import {
  Download,
  Mail,
  ArrowRight,
  Camera,
  Video,
  Newspaper,
} from "lucide-react";

export default function MediaCTA() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#1a1a1a]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#fc8814]/10 rounded-full blur-[80px] lg:blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#E8541A]/10 rounded-full blur-[80px] lg:blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            bg-white/[0.04]
            backdrop-blur-xl
            border border-white/10
            rounded-[24px]
            sm:rounded-[32px]
            lg:rounded-[40px]
            p-6
            sm:p-8
            md:p-10
            lg:p-16
          "
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div>
              <span className="uppercase tracking-[0.25em] text-[#fc8814] text-xs sm:text-sm font-semibold">
                Media Resources
              </span>

              <h2
                className="
                  mt-4
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                  text-white
                  leading-tight
                "
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Need Official
                <span className="block text-[#fc8814]">Media Assets?</span>
              </h2>

              <p className="mt-5 sm:mt-6 text-white/70 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 max-w-xl">
                Access official press releases, high-resolution photographs,
                video footage, media kits and communication resources for
                journalists, broadcasters and media organizations.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10">
                <button
                  className="
                    w-full sm:w-auto
                    bg-[#fc8814]
                    hover:bg-[#E8541A]
                    text-white
                    px-6 lg:px-8
                    py-3.5 lg:py-4
                    rounded-md
                    flex items-center justify-center
                    gap-3
                    transition-all duration-300
                  "
                >
                  <Download size={18} />
                  Download Media Kit
                </button>

                <button
                  className="
                    w-full sm:w-auto
                    border border-[#fc8814]
                    hover:bg-[#fc8814]
                    text-white
                    px-6 lg:px-8
                    py-3.5 lg:py-4
                    rounded-md
                    flex items-center justify-center
                    gap-3
                    transition-all duration-300
                  "
                >
                  <Mail size={18} />
                  Contact Media Team
                </button>
              </div>
            </div>

            {/* Right Side Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-5">
              {[
                {
                  icon: Camera,
                  value: "500+",
                  label: "Official Photos",
                  color: "#fc8814",
                },
                {
                  icon: Video,
                  value: "150+",
                  label: "Video Assets",
                  color: "#E8541A",
                },
                {
                  icon: Newspaper,
                  value: "50+",
                  label: "Press Releases",
                  color: "#fc8814",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-white/5
                    rounded-2xl
                    sm:rounded-3xl
                    p-5 sm:p-6
                    border border-white/10
                    hover:border-[#fc8814]/40
                    transition-all duration-300
                  "
                >
                  <item.icon size={26} style={{ color: item.color }} />

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-4">
                    {item.value}
                  </h3>

                  <p className="text-white/60 mt-2 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Strip */}
          <div
            className="
              mt-10
              sm:mt-12
              pt-6
              sm:pt-8
              border-t border-white/10
              flex flex-col
              md:flex-row
              items-center
              justify-between
              gap-5
            "
          >
            <p className="text-white/60 text-sm sm:text-base text-center md:text-left max-w-3xl">
              Media inquiries and interview requests are handled by our official
              communications team.
            </p>

            <button
              className="
                flex items-center
                gap-2
                text-[#fc8814]
                hover:text-[#E8541A]
                transition
                font-medium
                whitespace-nowrap
              "
            >
              View Media Guidelines
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
