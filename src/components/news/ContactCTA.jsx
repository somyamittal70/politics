import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Users } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1A1A1A]/92" />

      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FC8814]/12 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FC8814]/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block uppercase tracking-[0.3em] text-[#FC8814] text-[0.65rem] md:text-[0.7rem] font-black px-4 py-2 bg-[#FC8814]/10 rounded-full border border-[#FC8814]/20"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            Get Involved
          </motion.span>

          <h2
            className="mt-5 md:mt-7 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#FFFFFF] leading-tight font-black"
            style={{
              fontFamily: "'Playfair Display',serif",
            }}
          >
            Your Voice Can
            <span className="block text-[#FC8814]">Shape The Future</span>
          </h2>

          <p
            className="mt-5 md:mt-8 text-[#DDDDDD] max-w-3xl mx-auto text-sm md:text-base lg:text-lg leading-7 md:leading-8"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            Whether you have a question, suggestion, community concern, or would
            like to become a volunteer, we would love to hear from you. Together
            we can build stronger communities and create meaningful change.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5 mt-10 md:mt-12"
          >
            {/* Contact Button */}
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                group
                bg-[#FC8814]
                hover:bg-[#E8741F]
                text-[#FFFFFF]
                px-6 md:px-8
                py-3 md:py-4
                rounded-lg md:rounded-xl
                flex
                items-center
                justify-center
                gap-2 md:gap-3
                transition-all
                duration-300
                font-black
                text-[0.7rem] md:text-[0.75rem]
                tracking-[0.08em]
                uppercase
                shadow-lg
                hover:shadow-xl
                hover:shadow-[#FC8814]/30
              "
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              <PhoneCall size={16} strokeWidth={2.5} />
              Contact Us
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </motion.button>

            {/* Join Button */}
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="
                group
                border-2
                border-[#FC8814]
                bg-transparent
                text-[#FFFFFF]
                hover:bg-[#FC8814]
                hover:text-[#FFFFFF]
                px-6 md:px-8
                py-3 md:py-4
                rounded-lg md:rounded-xl
                flex
                items-center
                justify-center
                gap-2 md:gap-3
                transition-all
                duration-300
                font-black
                text-[0.7rem] md:text-[0.75rem]
                tracking-[0.08em]
                uppercase
                shadow-lg
                hover:shadow-xl
                hover:shadow-[#FC8814]/30
              "
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              <Users size={16} strokeWidth={2.5} />
              Become A Volunteer
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 lg:gap-6 mt-12 md:mt-16"
          >
            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 12px 32px rgba(252, 136, 20, 0.2)",
              }}
              className="bg-[#FFFFFF]/8 backdrop-blur-xl border border-[#FC8814]/30 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#FC8814]/60 hover:bg-[#FFFFFF]/12 transition-all duration-300"
            >
              <h3
                className="text-[#FC8814] text-2xl md:text-3xl font-black"
                style={{ fontFamily: "'Playfair Display',serif" }}
              >
                10M+
              </h3>
              <p
                className="text-[#CCCCCC] mt-2 text-[0.75rem] md:text-[0.85rem] font-bold"
                style={{ fontFamily: "Raleway,sans-serif" }}
              >
                Citizens Reached
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 12px 32px rgba(252, 136, 20, 0.2)",
              }}
              className="bg-[#FFFFFF]/8 backdrop-blur-xl border border-[#FC8814]/30 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#FC8814]/60 hover:bg-[#FFFFFF]/12 transition-all duration-300"
            >
              <h3
                className="text-[#FC8814] text-2xl md:text-3xl font-black"
                style={{ fontFamily: "'Playfair Display',serif" }}
              >
                500+
              </h3>
              <p
                className="text-[#CCCCCC] mt-2 text-[0.75rem] md:text-[0.85rem] font-bold"
                style={{ fontFamily: "Raleway,sans-serif" }}
              >
                Public Meetings
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 12px 32px rgba(252, 136, 20, 0.2)",
              }}
              className="bg-[#FFFFFF]/8 backdrop-blur-xl border border-[#FC8814]/30 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#FC8814]/60 hover:bg-[#FFFFFF]/12 transition-all duration-300"
            >
              <h3
                className="text-[#FC8814] text-2xl md:text-3xl font-black"
                style={{ fontFamily: "'Playfair Display',serif" }}
              >
                150+
              </h3>
              <p
                className="text-[#CCCCCC] mt-2 text-[0.75rem] md:text-[0.85rem] font-bold"
                style={{ fontFamily: "Raleway,sans-serif" }}
              >
                Press Releases
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 12px 32px rgba(252, 136, 20, 0.2)",
              }}
              className="bg-[#FFFFFF]/8 backdrop-blur-xl border border-[#FC8814]/30 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-[#FC8814]/60 hover:bg-[#FFFFFF]/12 transition-all duration-300"
            >
              <h3
                className="text-[#FC8814] text-2xl md:text-3xl font-black"
                style={{ fontFamily: "'Playfair Display',serif" }}
              >
                50+
              </h3>
              <p
                className="text-[#CCCCCC] mt-2 text-[0.75rem] md:text-[0.85rem] font-bold"
                style={{ fontFamily: "Raleway,sans-serif" }}
              >
                Events Organized
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
