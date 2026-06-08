import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Users } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0D1B3E]/90" />

      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E8541A]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8972B]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-[0.3em] text-[#C8972B] text-sm font-semibold">
            Get Involved
          </span>

          <h2
            className="mt-6 text-4xl md:text-6xl text-white leading-tight"
            style={{
              fontFamily: "Playfair Display, serif",
            }}
          >
            Your Voice Can
            <span className="block text-[#C8972B]">Shape The Future</span>
          </h2>

          <p className="mt-8 text-white/70 max-w-3xl mx-auto text-lg leading-8">
            Whether you have a question, suggestion, community concern, or would
            like to become a volunteer, we would love to hear from you. Together
            we can build stronger communities and create meaningful change.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">
            {/* Contact Button */}
            <button
              className="
                group
                bg-[#E8541A]
                hover:bg-[#C8972B]
                text-white
                px-8
                py-4
                rounded-full
                flex
                items-center
                justify-center
                gap-3
                transition-all
                duration-300
              "
            >
              <PhoneCall size={18} />
              Contact Us
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            {/* Join Button */}
            <button
              className="
                group
                border
                border-[#C8972B]
                text-white
                hover:bg-[#C8972B]
                hover:text-[#0D1B3E]
                px-8
                py-4
                rounded-full
                flex
                items-center
                justify-center
                gap-3
                transition-all
                duration-300
              "
            >
              <Users size={18} />
              Become A Volunteer
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Small Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-[#C8972B] text-3xl font-bold">10M+</h3>
              <p className="text-white/70 mt-2">Citizens Reached</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-[#C8972B] text-3xl font-bold">500+</h3>
              <p className="text-white/70 mt-2">Public Meetings</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-[#C8972B] text-3xl font-bold">150+</h3>
              <p className="text-white/70 mt-2">Press Releases</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-[#C8972B] text-3xl font-bold">50+</h3>
              <p className="text-white/70 mt-2">Events Organized</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
