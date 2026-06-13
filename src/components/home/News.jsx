import { Calendar, ArrowRight } from "lucide-react";

const updates = [
  {
    category: "Announcement",
    date: "10 June 2026",
    title: "New Community Development Initiative Launched",
    description:
      "A new initiative has been launched to strengthen local infrastructure and improve public services.",
  },
  {
    category: "Upcoming Event",
    date: "15 June 2026",
    title: "Youth Leadership Summit",
    description:
      "Join us for an inspiring event focused on empowering young leaders and encouraging civic participation.",
  },
  {
    category: "Greetings",
    date: "12 June 2026",
    title: "Warm Wishes on Environment Day",
    description:
      "Extending heartfelt greetings and encouraging everyone to contribute towards a cleaner and greener future.",
  },
  {
    category: "Public Notice",
    date: "18 June 2026",
    title: "Community Awareness Drive",
    description:
      "Residents are invited to participate in the upcoming awareness campaign and public interaction session.",
  },
];

const categoryColors = {
  Announcement: "bg-[#E8541A]/10 text-[#E8541A]",
  "Upcoming Event": "bg-blue-100 text-blue-700",
  Greetings: "bg-green-100 text-green-700",
  "Public Notice": "bg-red-100 text-red-700",
};

export default function News() {
  return (
    <section className="bg-[#F8F9FC] py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex px-5 py-2 rounded-full border border-[#E8541A]/30 bg-[#E8541A]/10 text-[#E8541A] text-sm uppercase tracking-[0.2em]">
            Updates
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-[#080F22]">
            Latest News & Announcements
          </h2>

          <div className="w-24 h-1 bg-[#E8541A] mx-auto mt-5 rounded-full" />

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-base md:text-lg">
            Stay informed with the latest announcements, upcoming events,
            greetings and important public notices.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {updates.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-3xl
                p-6
                border
                border-gray-100
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              {/* Category */}
              <span
                className={`
                  inline-flex
                  px-4
                  py-2
                  rounded-full
                  text-xs
                  font-semibold
                  ${categoryColors[item.category]}
                `}
              >
                {item.category}
              </span>

              {/* Date */}
              <div className="flex items-center gap-2 mt-5 text-gray-500 text-sm">
                <Calendar size={16} />
                <span>{item.date}</span>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-bold text-[#080F22] leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>

              {/* CTA */}
              <button
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-[#E8541A]
                  font-semibold
                  group-hover:gap-3
                  transition-all
                "
              >
                Read More
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            className="
              bg-[#080F22]
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              hover:bg-[#E8541A]
              transition-all
              duration-300
            "
          >
            View All Updates
          </button>
        </div>
      </div>
    </section>
  );
}
