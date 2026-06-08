import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[0.3em] text-[#C8972B] text-sm font-semibold">
            Upcoming Events
          </span>

          <h2
            className="mt-4 text-4xl md:text-5xl text-[#0D1B3E]"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Meet Us In Person
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
            Join upcoming public meetings, conferences,
            leadership summits, and community engagement
            programs across the country.
          </p>
        </motion.div>

        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[36px] bg-[#0D1B3E] mb-14"
        >

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop')",
            }}
          />

          <div className="relative grid lg:grid-cols-2 gap-10 p-10 md:p-16">

            <div>
              <span className="inline-flex bg-[#E8541A] text-white px-5 py-2 rounded-full text-sm">
                Featured Event
              </span>

              <h3
                className="mt-6 text-4xl text-white leading-tight"
                style={{
                  fontFamily: "Playfair Display, serif",
                }}
              >
                National Vision
                Conference 2026
              </h3>

              <p className="mt-6 text-white/80 leading-8">
                Bringing together policymakers,
                community leaders, entrepreneurs,
                and young innovators to discuss
                sustainable growth, development,
                and future opportunities.
              </p>

              <button className="mt-8 bg-[#C8972B] hover:bg-[#E8541A] text-white px-8 py-4 rounded-full flex items-center gap-3 transition">
                Register Now
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 w-full max-w-sm">

                <div className="text-center border-b border-white/10 pb-6">
                  <h4 className="text-[#C8972B] text-6xl font-bold">
                    18
                  </h4>

                  <p className="text-white tracking-[0.3em] uppercase">
                    July
                  </p>
                </div>

                <div className="space-y-5 mt-6">

                  <div className="flex items-center gap-3 text-white">
                    <CalendarDays size={18} />
                    Saturday, July 18, 2026
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <Clock3 size={18} />
                    09:00 AM
                  </div>

                  <div className="flex items-center gap-3 text-white">
                    <MapPin size={18} />
                    New Delhi Convention Centre
                  </div>

                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

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
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group bg-[#F7F2E8] rounded-[32px] p-8 hover:shadow-2xl transition-all duration-500"
            >

              {/* Date */}
              <div className="flex items-center gap-5">

                <div className="w-20 h-20 rounded-2xl bg-[#E8541A] text-white flex flex-col items-center justify-center">

                  <span className="text-3xl font-bold">
                    {event.day}
                  </span>

                  <span className="text-xs tracking-wider">
                    {event.month}
                  </span>
                </div>

                <div>
                  <span className="text-[#C8972B] uppercase tracking-wider text-sm">
                    Upcoming Event
                  </span>

                  <h3
                    className="mt-2 text-xl text-[#0D1B3E]"
                    style={{
                      fontFamily:
                        "Playfair Display, serif",
                    }}
                  >
                    {event.title}
                  </h3>
                </div>

              </div>

              <p className="mt-6 text-gray-600 leading-7">
                {event.description}
              </p>

              <div className="space-y-3 mt-6">

                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin
                    size={16}
                    className="text-[#E8541A]"
                  />
                  {event.location}
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Clock3
                    size={16}
                    className="text-[#E8541A]"
                  />
                  {event.time}
                </div>

              </div>

              <button className="group mt-8 flex items-center gap-2 text-[#E8541A] hover:text-[#C8972B] transition">

                Learn More

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-[#0D1B3E] hover:bg-[#E8541A] text-white px-10 py-4 rounded-full transition-all duration-300">
            View All Events
          </button>
        </motion.div>

      </div>
    </section>
  );
}