import { motion } from "framer-motion";
import { ArrowRight, Newspaper} from "lucide-react";

export default function News() {
  return (
    <>
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=2000&q=80')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0D1B3E]/80" />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#C8972B]/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#E8541A]/10 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full mb-8"
            >
              <Newspaper size={18} className="text-[#C8972B]" />
              <span className="text-[#F5F5F5] text-sm tracking-[0.2em] uppercase">
                Latest News & Updates
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#F5F5F5] text-5xl md:text-6xl lg:text-7xl leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Stay Updated With
              <span className="block text-[#C8972B]">
                Latest Announcements
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-[#F5F5F5]/80 text-lg md:text-xl leading-8 max-w-3xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Explore the latest speeches, press releases, campaign
              announcements, public initiatives, and important updates.
              Stay connected with every milestone and development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-5 mt-10"
            >
              <button className="bg-[#E8541A] hover:bg-[#C8972B] text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300">
                Explore Updates
                <ArrowRight size={18} />
              </button>

              <button className="border border-[#C8972B] text-white hover:bg-[#C8972B] hover:text-black px-8 py-4 rounded-full transition-all duration-300">
                View Media Center
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <h3 className="text-3xl font-bold text-[#C8972B]">150+</h3>
                <p className="text-[#F5F5F5]/80 mt-2">
                  Press Releases
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <h3 className="text-3xl font-bold text-[#C8972B]">50+</h3>
                <p className="text-[#F5F5F5]/80 mt-2">
                  Public Events
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <h3 className="text-3xl font-bold text-[#C8972B]">24/7</h3>
                <p className="text-[#F5F5F5]/80 mt-2">
                  News Coverage
                </p>
              </div>
            </motion.div>
          </div>
        </div>

       
      </section>
    </>
  );
}