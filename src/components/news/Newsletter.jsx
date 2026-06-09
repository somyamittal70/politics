import { motion } from "framer-motion";
import { Mail, Bell, ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#FFFFFF]">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FC8814]/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FC8814]/6 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#F9F9F9] to-[#FFFFFF] border border-[#E8E7E6] rounded-2xl md:rounded-3xl lg:rounded-[40px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-10 lg:p-14 md:p-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 md:gap-3 bg-[#FC8814]/10 border border-[#FC8814]/20 px-4 md:px-5 py-2 md:py-2.5 rounded-full"
              >
                <Bell size={18} className="text-[#FC8814]" strokeWidth={2} />

                <span
                  className="text-[#FC8814] text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.08em] font-black"
                  style={{ fontFamily: "Raleway,sans-serif" }}
                >
                  Stay Updated
                </span>
              </motion.div>

              <h2
                className="mt-6 md:mt-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#333333] leading-tight font-black"
                style={{
                  fontFamily: "'Playfair Display',serif",
                }}
              >
                Never Miss An
                <span className="block text-[#FC8814]">Important Update</span>
              </h2>

              <p
                className="mt-4 md:mt-6 text-[#666666] leading-7 md:leading-8 max-w-lg text-sm md:text-base"
                style={{ fontFamily: "Raleway,sans-serif" }}
              >
                Subscribe to receive the latest news, official announcements,
                event updates, press releases, and community initiatives
                directly in your inbox.
              </p>

              {/* Form */}
              <motion.div className="mt-8 md:mt-10">
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <motion.div
                    className="relative flex-1"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <Mail
                      size={20}
                      className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-[#FC8814]"
                      strokeWidth={1.5}
                    />

                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="
                        w-full
                        h-14 md:h-16
                        rounded-lg md:rounded-xl
                        bg-[#F9F9F9]
                        border border-[#E8E7E6]
                        text-[#333333]
                        placeholder:text-[#BBBBBB]
                        pl-12 md:pl-14
                        pr-4 md:pr-5
                        outline-none
                        focus:border-[#FC8814]
                        focus:shadow-[0_0_0_3px_rgba(252,136,20,0.1)]
                        transition-all
                        duration-300
                        text-sm md:text-base
                      "
                      style={{ fontFamily: "Raleway,sans-serif" }}
                    />
                  </motion.div>

                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      h-14 md:h-16
                      px-6 md:px-8
                      rounded-lg md:rounded-xl
                      bg-[#FC8814]
                      hover:bg-[#E8741F]
                      text-[#FFFFFF]
                      font-black
                      text-[0.7rem] md:text-[0.75rem]
                      tracking-[0.08em]
                      uppercase
                      flex
                      items-center
                      justify-center
                      gap-2 md:gap-3
                      transition-all
                      duration-300
                      shadow-lg
                      hover:shadow-xl
                      hover:shadow-[#FC8814]/25
                    "
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    Subscribe
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </motion.button>
                </div>

                <p
                  className="mt-3 md:mt-4 text-[#999999] text-[0.7rem] md:text-[0.75rem] uppercase tracking-wide"
                  style={{ fontFamily: "Raleway,sans-serif" }}
                >
                  No spam. Unsubscribe anytime.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side Stats */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 md:p-10 lg:p-14 md:p-16 bg-gradient-to-br from-[#FFFFFF] to-[#F9F9F9] border-l border-[#E8E7E6]"
            >
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <motion.div
                  whileHover={{
                    y: -6,
                    boxShadow: "0 12px 24px rgba(252, 136, 20, 0.1)",
                  }}
                  className="bg-[#FFFFFF] border border-[#E8E7E6] rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#FC8814]/40 transition-all duration-300"
                >
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-black text-[#FC8814]"
                    style={{ fontFamily: "'Playfair Display',serif" }}
                  >
                    25K+
                  </h3>

                  <p
                    className="mt-2 md:mt-3 text-[#666666] text-[0.75rem] md:text-[0.85rem] leading-snug"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    Newsletter Subscribers
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -6,
                    boxShadow: "0 12px 24px rgba(252, 136, 20, 0.1)",
                  }}
                  className="bg-[#FFFFFF] border border-[#E8E7E6] rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#FC8814]/40 transition-all duration-300"
                >
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-black text-[#FC8814]"
                    style={{ fontFamily: "'Playfair Display',serif" }}
                  >
                    150+
                  </h3>

                  <p
                    className="mt-2 md:mt-3 text-[#666666] text-[0.75rem] md:text-[0.85rem] leading-snug"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    Official Updates
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -6,
                    boxShadow: "0 12px 24px rgba(252, 136, 20, 0.1)",
                  }}
                  className="bg-[#FFFFFF] border border-[#E8E7E6] rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#FC8814]/40 transition-all duration-300"
                >
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-black text-[#FC8814]"
                    style={{ fontFamily: "'Playfair Display',serif" }}
                  >
                    50+
                  </h3>

                  <p
                    className="mt-2 md:mt-3 text-[#666666] text-[0.75rem] md:text-[0.85rem] leading-snug"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    Public Events
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -6,
                    boxShadow: "0 12px 24px rgba(252, 136, 20, 0.1)",
                  }}
                  className="bg-[#FFFFFF] border border-[#E8E7E6] rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#FC8814]/40 transition-all duration-300"
                >
                  <h3
                    className="text-2xl md:text-3xl lg:text-4xl font-black text-[#FC8814]"
                    style={{ fontFamily: "'Playfair Display',serif" }}
                  >
                    24/7
                  </h3>

                  <p
                    className="mt-2 md:mt-3 text-[#666666] text-[0.75rem] md:text-[0.85rem] leading-snug"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    News Coverage
                  </p>
                </motion.div>
              </div>

              {/* Decorative Quote */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 md:mt-10 border-l-4 border-[#FC8814] pl-4 md:pl-5"
              >
                <p
                  className="text-[#333333] italic text-base md:text-lg leading-7"
                  style={{
                    fontFamily: "'Playfair Display',serif",
                  }}
                >
                  "Strong communication builds stronger communities and a
                  brighter future."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
