import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock3, ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    day: "22",
    month: "JUN",
    title: "National Youth Leadership Summit",
    location: "New Delhi, India",
    time: "10:00 AM",
    description:
      "A gathering of young leaders, innovators, and community representatives to discuss the future of youth empowerment and development.",
  },
  {
    id: 2,
    day: "28",
    month: "JUN",
    title: "Public Outreach & Community Meeting",
    location: "Ahmedabad, Gujarat",
    time: "04:00 PM",
    description:
      "Open interaction with citizens focusing on public welfare initiatives and community-driven solutions.",
  },
  {
    id: 3,
    day: "05",
    month: "JUL",
    title: "Infrastructure Development Conference",
    location: "Mumbai, Maharashtra",
    time: "11:30 AM",
    description:
      "Discussion on transportation, smart cities, sustainability, and economic growth projects.",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <span
            className="uppercase tracking-[0.3em] text-[#FC8814] text-[0.65rem] md:text-[0.7rem] font-black"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            Upcoming Events
          </span>

          <h2
            className="mt-3 md:mt-4 text-3xl md:text-4xl lg:text-5xl text-[#333333] leading-tight"
            style={{ fontFamily: "'Playfair Display',serif" }}
          >
            Meet Us In{" "}
            <em className="text-[#FC8814] not-italic italic">Person</em>
          </h2>

          <p
            className="mt-4 md:mt-6 text-[#666666] max-w-2xl mx-auto leading-7 md:leading-8 text-sm md:text-base"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            Join upcoming public meetings, conferences, leadership summits, and
            community engagement programs across the country.
          </p>
        </motion.div>

        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-[#333333] mb-12 md:mb-16 shadow-xl hover:shadow-2xl transition-all duration-500"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop')",
            }}
          />

          <div className="relative grid lg:grid-cols-2 gap-8 md:gap-12 p-6 md:p-10 lg:p-14">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-flex bg-[#FC8814] text-[#FFFFFF] px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-black text-[0.65rem] md:text-[0.7rem] tracking-[0.08em] uppercase shadow-lg"
                style={{ fontFamily: "Raleway,sans-serif" }}
              >
                Featured Event
              </motion.span>

              <h3
                className="mt-4 md:mt-6 text-2xl md:text-3xl lg:text-4xl text-[#FFFFFF] leading-tight font-black"
                style={{
                  fontFamily: "'Playfair Display',serif",
                }}
              >
                National Vision Conference 2026
              </h3>

              <p
                className="mt-4 md:mt-6 text-[#FFFFFF]/80 leading-7 md:leading-8 text-sm md:text-base"
                style={{ fontFamily: "Raleway,sans-serif" }}
              >
                Bringing together policymakers, community leaders,
                entrepreneurs, and young innovators to discuss sustainable
                growth, development, and future opportunities.
              </p>

              <motion.button
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 md:mt-8 bg-[#FC8814] hover:bg-[#E8741F] text-[#FFFFFF] px-6 md:px-8 py-3 md:py-4 rounded-lg font-black text-[0.7rem] md:text-[0.75rem] tracking-[0.08em] uppercase flex items-center gap-2 md:gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ fontFamily: "Raleway,sans-serif" }}
              >
                Register Now
                <ArrowRight size={16} strokeWidth={2.5} />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="bg-[#FFFFFF]/10 backdrop-blur-xl border border-[#FFFFFF]/20 rounded-2xl md:rounded-3xl p-6 md:p-8 w-full max-w-sm hover:border-[#FC8814]/40 transition-colors duration-300">
                <div className="text-center border-b border-[#FFFFFF]/10 pb-5 md:pb-6">
                  <h4
                    className="text-[#FC8814] text-5xl md:text-6xl font-black leading-none"
                    style={{ fontFamily: "'Playfair Display',serif" }}
                  >
                    18
                  </h4>

                  <p
                    className="text-[#FFFFFF] tracking-[0.3em] uppercase text-[0.7rem] md:text-[0.75rem] font-black mt-2"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    July
                  </p>
                </div>

                <div className="space-y-4 md:space-y-5 mt-5 md:mt-6">
                  <div
                    className="flex items-center gap-3 text-[#FFFFFF] text-sm md:text-base"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    <CalendarDays size={18} strokeWidth={1.5} />
                    Saturday, July 18, 2026
                  </div>

                  <div
                    className="flex items-center gap-3 text-[#FFFFFF] text-sm md:text-base"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    <Clock3 size={18} strokeWidth={1.5} />
                    09:00 AM
                  </div>

                  <div
                    className="flex items-center gap-3 text-[#FFFFFF] text-sm md:text-base"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    <MapPin size={18} strokeWidth={1.5} />
                    New Delhi Convention Centre
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="group bg-[#FFFFFF] border border-[#E8E7E6] rounded-2xl md:rounded-3xl p-6 md:p-7 hover:shadow-xl transition-all duration-500 hover:border-[#FC8814]/40"
            >
              {/* Date + Title */}
              <div className="flex items-start gap-4 md:gap-5">
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  className="w-16 md:w-20 h-16 md:h-20 rounded-lg md:rounded-xl bg-[#FC8814] text-[#FFFFFF] flex flex-col items-center justify-center flex-shrink-0 shadow-lg"
                >
                  <span
                    className="text-2xl md:text-3xl font-black leading-none"
                    style={{ fontFamily: "'Playfair Display',serif" }}
                  >
                    {event.day}
                  </span>

                  <span
                    className="text-[0.55rem] md:text-[0.65rem] tracking-wider font-black mt-1"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    {event.month}
                  </span>
                </motion.div>

                <div className="flex-1">
                  <span
                    className="text-[#FC8814] uppercase tracking-wider text-[0.6rem] md:text-[0.65rem] font-black"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    Upcoming Event
                  </span>

                  <h3
                    className="mt-1 md:mt-2 text-base md:text-lg text-[#333333] font-black leading-snug"
                    style={{
                      fontFamily: "'Playfair Display',serif",
                    }}
                  >
                    {event.title}
                  </h3>
                </div>
              </div>

              <p
                className="mt-4 md:mt-5 text-[#666666] leading-6 md:leading-7 text-[0.85rem] md:text-sm"
                style={{ fontFamily: "Raleway,sans-serif" }}
              >
                {event.description}
              </p>

              <div className="space-y-2 md:space-y-3 mt-5 md:mt-6">
                <div
                  className="flex items-center gap-3 text-[#666666] text-[0.8rem] md:text-sm"
                  style={{ fontFamily: "Raleway,sans-serif" }}
                >
                  <MapPin
                    size={16}
                    className="text-[#FC8814] flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <span>{event.location}</span>
                </div>

                <div
                  className="flex items-center gap-3 text-[#666666] text-[0.8rem] md:text-sm"
                  style={{ fontFamily: "Raleway,sans-serif" }}
                >
                  <Clock3
                    size={16}
                    className="text-[#FC8814] flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <span>{event.time}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ x: 4 }}
                className="group mt-5 md:mt-6 flex items-center gap-2 text-[#FC8814] hover:text-[#333333] font-black text-[0.7rem] md:text-[0.75rem] tracking-[0.08em] uppercase transition-colors duration-200"
                style={{ fontFamily: "Raleway,sans-serif" }}
              >
                Learn More
                <ArrowRight
                  size={14}
                  strokeWidth={2.5}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#333333] hover:bg-[#FC8814] text-[#FFFFFF] px-8 md:px-10 py-3 md:py-4 rounded-lg font-black text-[0.7rem] md:text-[0.75rem] tracking-[0.1em] uppercase transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            View All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
