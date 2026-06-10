import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center py-24 lg:py-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1A1A1A]/92" />

      {/* Decorative Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/85 to-transparent" /> */}

      {/* Decorative Circle */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#FC8814]/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#FC8814]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
      inline-block
      text-[#FC8814]
      uppercase
      tracking-[0.25em]
      text-xs
      sm:text-sm
      font-semibold
      mb-5
    "
            >
              Connect With Us
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
      text-white
      font-serif
      leading-[1.05]
      text-4xl
      sm:text-5xl
      md:text-6xl
      xl:text-7xl
    "
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              Your Voice
              <span className="block text-[#FC8814]">Matters Most</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="
      mt-6
      text-[#E8E7E6]
      text-base
      sm:text-lg
      leading-7
      sm:leading-8
      max-w-xl
    "
            >
              We believe meaningful conversations create stronger communities.
              Reach out with your ideas, concerns, or suggestions and become a
              part of shaping a brighter future together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="
      flex
      flex-col
      sm:flex-row
      gap-4
      mt-8
    "
            >
              <button
                className="
        group
        bg-[#FC8814]
        text-white
        px-6
        py-4
        font-semibold
        flex
        items-center
        justify-center
        gap-3
        hover:scale-[1.02]
        transition-all
      "
              >
                Contact Now
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                className="
        border
        border-[#FC8814]
        text-white
        px-6
        py-4
        hover:bg-[#FC8814]
        transition-all
      "
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="
    order-2
    flex
    justify-center
    lg:justify-end
  "
          >
            <div
              className="
      w-full
      max-w-md
      bg-white
      p-6
      sm:p-8
      md:p-10
      rounded-3xl
      border
      border-[#E8E7E6]
      shadow-2xl
    "
            >
              <h3
                className="
        text-2xl
        sm:text-3xl
        text-gray-800
        mb-8
      "
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Get In Touch
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    value: "+91 9768047680",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    value: "ssinghdham@gmail.com",
                  },
                  {
                    icon: MapPin,
                    title: "Office Address",
                    value: "New Delhi, India",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className="
                w-12
                h-12
                rounded-full
                bg-[#FC8814]/10
                flex
                items-center
                justify-center
                flex-shrink-0
              "
                      >
                        <Icon className="text-[#FC8814]" size={20} />
                      </div>

                      <div>
                        <p className="text-sm text-gray-500">{item.title}</p>

                        <p className="font-semibold text-gray-800 break-all">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                className="
        w-full
        mt-8
        bg-[#FC8814]
        hover:bg-[#e77910]
        text-white
        py-4
        font-semibold
        transition-all
      "
              >
                Schedule Meeting
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
