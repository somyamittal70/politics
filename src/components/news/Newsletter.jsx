import { motion } from "framer-motion";
import { Mail, Bell, ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0D1B3E]">

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E8541A]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8972B]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">

            {/* Left Side */}
            <div className="p-10 md:p-16">

              <div className="inline-flex items-center gap-3 bg-[#E8541A]/20 border border-[#E8541A]/20 px-5 py-2 rounded-full">

                <Bell
                  size={18}
                  className="text-[#E8541A]"
                />

                <span className="text-[#F5F5F5] text-sm uppercase tracking-wider">
                  Stay Updated
                </span>
              </div>

              <h2
                className="mt-8 text-4xl md:text-5xl text-white leading-tight"
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Never Miss An
                <span className="block text-[#C8972B]">
                  Important Update
                </span>
              </h2>

              <p className="mt-6 text-white/70 leading-8 max-w-lg">
                Subscribe to receive the latest news,
                official announcements, event updates,
                press releases, and community initiatives
                directly in your inbox.
              </p>

              {/* Form */}
              <div className="mt-10">

                <div className="flex flex-col sm:flex-row gap-4">

                  <div className="relative flex-1">

                    <Mail
                      size={20}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C8972B]"
                    />

                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="
                        w-full
                        h-16
                        rounded-full
                        bg-white/10
                        border
                        border-white/10
                        text-white
                        placeholder:text-white/50
                        pl-14
                        pr-4
                        outline-none
                        focus:border-[#C8972B]
                      "
                    />
                  </div>

                  <button
                    className="
                      h-16
                      px-8
                      rounded-full
                      bg-[#E8541A]
                      hover:bg-[#C8972B]
                      text-white
                      font-medium
                      flex
                      items-center
                      justify-center
                      gap-3
                      transition-all
                    "
                  >
                    Subscribe
                    <ArrowRight size={18} />
                  </button>

                </div>

                <p className="mt-4 text-white/50 text-sm">
                  No spam. Unsubscribe anytime.
                </p>

              </div>
            </div>

            {/* Right Side Stats */}
            <div className="relative p-10 md:p-16 bg-white/[0.03]">

              <div className="grid grid-cols-2 gap-6">

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 rounded-[24px] p-6"
                >
                  <h3 className="text-4xl font-bold text-[#C8972B]">
                    25K+
                  </h3>

                  <p className="mt-3 text-white/70">
                    Newsletter Subscribers
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 rounded-[24px] p-6"
                >
                  <h3 className="text-4xl font-bold text-[#C8972B]">
                    150+
                  </h3>

                  <p className="mt-3 text-white/70">
                    Official Updates
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 rounded-[24px] p-6"
                >
                  <h3 className="text-4xl font-bold text-[#C8972B]">
                    50+
                  </h3>

                  <p className="mt-3 text-white/70">
                    Public Events
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 rounded-[24px] p-6"
                >
                  <h3 className="text-4xl font-bold text-[#C8972B]">
                    24/7
                  </h3>

                  <p className="mt-3 text-white/70">
                    News Coverage
                  </p>
                </motion.div>

              </div>

              {/* Decorative Quote */}
              <div className="mt-10 border-l-4 border-[#E8541A] pl-5">
                <p
                  className="text-white/80 italic text-lg"
                  style={{
                    fontFamily:
                      "Playfair Display, serif",
                  }}
                >
                  "Strong communication builds
                  stronger communities and a
                  brighter future."
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}