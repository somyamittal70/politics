import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    number: 50,
    suffix: "+",
    label: "Activities Conducted",
  },
  {
    number: 500,
    suffix: "+",
    label: "Students Honoured",
  },
  {
    number: 10000,
    suffix: "+",
    label: "Citizens Reached",
  },
  {
    number: 5000,
    suffix: "+",
    label: "Campaign Participants",
  },
  {
    number: 100,
    suffix: "+",
    label: "Community Initiatives",
  },
  {
    number: 15,
    suffix: "+",
    label: "Years of Public Engagement",
  },
];

function Counter({ end, suffix = "", startAnimation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let current = 0;
    const increment = Math.ceil(end / 60);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end, startAnimation]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#080F22] py-20 lg:py-28"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#E8541A]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#E8541A]/10 blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex px-5 py-2 rounded-full border border-[#E8541A]/30 bg-[#E8541A]/10 text-[#E8541A] text-sm uppercase tracking-[0.2em]">
            Impact
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Impact in Numbers
          </h2>

          <div className="w-24 h-1 bg-[#E8541A] mx-auto mt-5 rounded-full" />

          <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-base md:text-lg">
            Measuring progress through participation, outreach and community
            engagement.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                group
                rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-md
                p-6
                text-center
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#E8541A]/50
              "
            >
              {/* Number */}
              <div className="text-[#E8541A] font-black text-4xl md:text-5xl lg:text-4xl leading-none">
                <Counter
                  end={item.number}
                  suffix={item.suffix}
                  startAnimation={inView}
                />
              </div>

              {/* Label */}
              <p className="mt-4 text-white text-sm md:text-base font-medium leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
