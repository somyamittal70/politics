import { ArrowRight } from "lucide-react";

const campaigns = [
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000",
    title: "Education for Every Child",
    description:
      "Supporting quality education and learning opportunities for underprivileged students.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1000",
    title: "Clean Community Initiative",
    description:
      "Promoting cleanliness, environmental awareness and sustainable practices.",
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000",
    title: "Youth Leadership Program",
    description:
      "Encouraging young citizens to participate in leadership and community development.",
  },
];

export default function Campaigns() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex px-5 py-2 rounded-full border border-[#E8541A]/30 bg-[#E8541A]/10 text-[#E8541A] text-sm uppercase tracking-[0.2em]">
            Get Involved
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-[#080F22]">
            Be a Part of the Change
          </h2>

          <div className="w-24 h-1 bg-[#E8541A] mx-auto mt-5 rounded-full" />

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-base md:text-lg">
            Join our ongoing initiatives and contribute towards building a
            stronger, more inclusive and empowered community.
          </p>
        </div>

        {/* Campaign Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-[28px]
                overflow-hidden
                shadow-lg
                border border-gray-100
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="
                    w-full
                    h-64
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#080F22]">
                  {campaign.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {campaign.description}
                </p>

                {/* CTA */}
                <button
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    bg-[#E8541A]
                    text-white
                    px-6
                    py-3
                    rounded-full
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-[#080F22]
                  "
                >
                  Join Campaign
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
