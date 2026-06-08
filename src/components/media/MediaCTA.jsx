import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";

export default function MediaCTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      contact: "media@example.com",
      description: "For all media inquiries and requests",
    },
    {
      icon: Phone,
      title: "Phone",
      contact: "+91 (XXX) XXX-XXXX",
      description: "Direct line for urgent media issues",
    },
    {
      icon: MessageSquare,
      title: "Message",
      contact: "Send Message",
      description: "Quick inquiry through our contact form",
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, #0D1B3E 0%, #1a2d4d 50%, #0D1B3E 100%)`,
        }}
      />

      {/* Decorative Shapes */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20"
        style={{ backgroundColor: "#C8972B" }}
        variants={floatVariants}
        animate="animate"
      />

      <motion.div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-15"
        style={{ backgroundColor: "#E8541A" }}
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      {/* Accent Line */}
      <motion.div
        className="absolute top-24 left-0 h-1"
        style={{ width: "30%", backgroundColor: "#C8972B" }}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Content */}
        <div className="max-w-3xl mb-16">
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-light mb-6 leading-tight"
            style={{ color: "white", fontFamily: "Playfair Display, serif" }}
            variants={itemVariants}
          >
            Get In Touch With Our{" "}
            <span style={{ color: "#C8972B" }}>Media Team</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 leading-8"
            variants={itemVariants}
          >
            Have questions about our press materials, need exclusive interviews,
            or want to request media coverage? Our media team is here to assist
            you with all your inquiries.
          </motion.p>
        </div>

        {/* Contact Methods */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={itemVariants}
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                className="p-8 rounded-[24px] backdrop-blur-sm border border-white/10 hover:border-white/30 transition duration-500 group cursor-pointer"
                style={{ backgroundColor: "rgba(199, 151, 43, 0.05)" }}
                whileHover={{ y: -10 }}
              >
                <div className="mb-4">
                  <Icon size={32} style={{ color: "#C8972B" }} />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {method.title}
                </h3>

                <p className="text-gray-300 mb-4">{method.description}</p>

                <p
                  className="font-semibold text-lg group-hover:text-[#C8972B] transition"
                  style={{ color: "#C8972B" }}
                >
                  {method.contact}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 mb-16"
          variants={itemVariants}
        >
          {/* Left - Info */}
          <div>
            <h3
              className="text-3xl font-light mb-6"
              style={{ color: "white", fontFamily: "Playfair Display, serif" }}
            >
              Send Us Your Inquiry
            </h3>

            <p className="text-gray-300 leading-8 mb-6">
              Complete the form on the right and our media team will get back to
              you within 24 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: "#C8972B" }}
                />
                <div>
                  <p className="font-semibold text-white">Fast Response</p>
                  <p className="text-gray-400 text-sm">Reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: "#C8972B" }}
                />
                <div>
                  <p className="font-semibold text-white">Dedicated Team</p>
                  <p className="text-gray-400 text-sm">
                    Professional media specialists
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: "#C8972B" }}
                />
                <div>
                  <p className="font-semibold text-white">Exclusive Access</p>
                  <p className="text-gray-400 text-sm">
                    Priority media requests
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className="p-8 rounded-[24px]"
            style={{ backgroundColor: "rgba(199, 151, 43, 0.1)" }}
          >
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C8972B] transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C8972B] transition"
                  placeholder="Organization name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C8972B] transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Inquiry Type
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C8972B] transition">
                  <option value="" className="bg-gray-900">
                    Select type
                  </option>
                  <option value="media-kit" className="bg-gray-900">
                    Media Kit Request
                  </option>
                  <option value="interview" className="bg-gray-900">
                    Interview Request
                  </option>
                  <option value="coverage" className="bg-gray-900">
                    Coverage Request
                  </option>
                  <option value="other" className="bg-gray-900">
                    Other Inquiry
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C8972B] transition resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  backgroundColor: "#C8972B",
                  color: "white",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "translateY(0)")
                }
              >
                Send Inquiry
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div className="text-center py-12" variants={itemVariants}>
          <p className="text-gray-300 mb-6">
            For real-time updates, follow our official channels
          </p>

          <div className="flex justify-center gap-6">
            {["Twitter", "Facebook", "Instagram", "LinkedIn"].map((social) => (
              <motion.button
                key={social}
                className="px-6 py-3 rounded-full border-2 border-white/30 text-white font-semibold hover:border-white transition duration-300"
                whileHover={{ scale: 1.05, borderColor: "#C8972B" }}
              >
                {social}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Accent */}
      <motion.div
        className="absolute bottom-0 right-0 h-1"
        style={{ width: "40%", backgroundColor: "#E8541A" }}
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        viewport={{ once: true }}
      />
    </section>
  );
}
