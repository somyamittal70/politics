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
    <section className="relative py-24 overflow-hidden bg-[#0D1B3E]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8972B]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8541A]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="uppercase tracking-[0.3em] text-[#C8972B] text-sm font-semibold">
                Media Resources
              </span>

              <h2
                className="mt-5 text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Need Official
                <span className="block text-[#C8972B]">Media Assets?</span>
              </h2>

              <p className="mt-6 text-white/70 text-lg leading-8 max-w-xl">
                Access official press releases, high-resolution photographs,
                video footage, media kits, and communication resources for
                journalists, broadcasters, and media organizations.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">
                <button className="bg-[#C8972B] hover:bg-[#E8541A] text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300">
                  <Download size={18} />
                  Download Media Kit
                </button>

                <button className="border border-[#C8972B] hover:bg-[#C8972B] text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300">
                  <Mail size={18} />
                  Contact Media Team
                </button>
              </div>
            </div>

            {/* Right Side Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                <Camera className="text-[#C8972B]" size={28} />

                <h3 className="text-3xl font-bold text-white mt-4">500+</h3>

                <p className="text-white/60 mt-2">Official Photos</p>
              </div>

              <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                <Video className="text-[#E8541A]" size={28} />

                <h3 className="text-3xl font-bold text-white mt-4">150+</h3>

                <p className="text-white/60 mt-2">Video Assets</p>
              </div>

              <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                <Newspaper className="text-[#C8972B]" size={28} />

                <h3 className="text-3xl font-bold text-white mt-4">50+</h3>

                <p className="text-white/60 mt-2">Press Releases</p>
              </div>
            </div>
          </div>

          {/* Bottom Strip */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-center md:text-left">
              Media inquiries and interview requests are handled by our official
              communications team.
            </p>

            <button className="text-[#C8972B] flex items-center gap-2 hover:text-[#E8541A] transition">
              View Media Guidelines
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
