import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0D1B3E]/80" />

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/85 to-transparent" />

      {/* Decorative Circle */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#C8972B]/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#E8541A]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-[#C8972B] uppercase tracking-[0.3em] text-sm font-semibold mb-6"
            >
              Connect With Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-[#F5F5F5] text-5xl md:text-6xl xl:text-7xl leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Your Voice
              <span className="block text-[#C8972B]">Matters Most</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-[#F7F2E8]/80 text-lg leading-8 max-w-xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              We believe meaningful conversations create stronger communities.
              Reach out with your ideas, concerns, or suggestions and become a
              part of shaping a brighter future together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-5 mt-10"
            >
              <button className="group bg-[#E8541A] hover:bg-[#C8972B] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300">
                Contact Now
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="border border-[#C8972B] text-[#F5F5F5] hover:bg-[#C8972B] hover:text-black px-8 py-4 rounded-full transition-all duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="bg-[#F7F2E8]/95 backdrop-blur-md p-8 md:p-10 rounded-[30px] shadow-2xl max-w-md w-full border border-[#C8972B]/20">
              <h3
                className="text-3xl text-[#0D1B3E] mb-8"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C8972B]/10 flex items-center justify-center">
                    <Phone className="text-[#E8541A]" size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="font-semibold">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C8972B]/10 flex items-center justify-center">
                    <Mail className="text-[#E8541A]" size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <p className="font-semibold">contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C8972B]/10 flex items-center justify-center">
                    <MapPin className="text-[#E8541A]" size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Office Address</p>
                    <p className="font-semibold">New Delhi, India</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-10 bg-[#0D1B3E] hover:bg-[#E8541A] text-white py-4 rounded-full transition-all duration-300 font-semibold">
                Schedule Meeting
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
