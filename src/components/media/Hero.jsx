import { motion } from "framer-motion";
import { Play, Camera, Video, Newspaper, ArrowRight } from "lucide-react";

export default function Hero() {
  const stats = [
    {
      number: "500+",
      label: "Press Photos",
      icon: Camera,
    },
    {
      number: "150+",
      label: "Videos",
      icon: Video,
    },
    {
      number: "50+",
      label: "Press Releases",
      icon: Newspaper,
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen bg-[#0D1B3E]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B3E] via-[#10275A] to-[#0D1B3E]" />

      {/* Decorative Blur */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#C8972B]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E8541A]/10 blur-[120px] rounded-full" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <span className="w-3 h-3 rounded-full bg-[#C8972B]" />

              <span className="uppercase tracking-[0.3em] text-[#C8972B] text-sm font-semibold">
                Media Center
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl text-white leading-tight"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              Stories That
              <span className="block text-[#C8972B]">Shape The Nation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-lg text-white/70 leading-8 max-w-xl"
            >
              Explore official speeches, press conferences, interviews, campaign
              highlights, photographs, videos, and media releases from across
              India.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <button className="bg-[#C8972B] hover:bg-[#E8541A] text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300">
                Browse Media
                <ArrowRight size={18} />
              </button>

              <button className="border border-[#C8972B] text-white hover:bg-[#C8972B] px-8 py-4 rounded-full transition-all duration-300">
                Press Releases
              </button>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-14">
              {stats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.4 + index * 0.1,
                    }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5"
                  >
                    <Icon size={24} className="text-[#C8972B]" />

                    <h3 className="text-2xl font-bold text-white mt-3">
                      {item.number}
                    </h3>

                    <p className="text-white/60 text-sm mt-1">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1800&auto=format&fit=crop"
                alt="Media Center"
                className="w-full h-[600px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E]/90 via-transparent to-transparent" />

              {/* Featured Video Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <div className="flex items-center gap-4">
                    <button className="w-14 h-14 rounded-full bg-[#E8541A] flex items-center justify-center hover:scale-110 transition">
                      <Play
                        size={20}
                        fill="white"
                        className="text-white ml-1"
                      />
                    </button>

                    <div>
                      <p className="text-[#C8972B] text-sm uppercase tracking-wider">
                        Featured Video
                      </p>

                      <h4 className="text-white text-lg font-semibold mt-1">
                        National Development Vision 2026
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="hidden lg:block absolute -left-10 top-20 bg-white rounded-3xl p-6 shadow-xl"
            >
              <p className="text-[#E8541A] text-4xl font-bold">1M+</p>

              <p className="text-gray-600 mt-1">Monthly Views</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
