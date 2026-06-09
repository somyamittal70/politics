import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Eye, Clock3, ArrowRight } from "lucide-react";

const videos = [
  {
    id: 1,
    category: "Speech",
    title: "National Development Vision 2026",
    duration: "12:45",
    views: "1.2M Views",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600",
    description:
      "A comprehensive address highlighting infrastructure development, youth empowerment, and future national priorities.",
  },
  {
    id: 2,
    category: "Conference",
    title: "Youth Leadership Summit",
    duration: "08:20",
    views: "856K Views",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",
  },
  {
    id: 3,
    category: "Community",
    title: "Public Outreach Program",
    duration: "10:15",
    views: "742K Views",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600",
  },
  {
    id: 4,
    category: "Development",
    title: "Infrastructure Briefing",
    duration: "15:30",
    views: "1M Views",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1600",
  },
  {
    id: 5,
    category: "Interview",
    title: "Exclusive Media Interaction",
    duration: "09:50",
    views: "620K Views",
    image:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1600",
  },
];

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <span className="uppercase tracking-[0.3em] text-[#FC8814] text-sm font-semibold">
              Video Gallery
            </span>

            <h2
              className="mt-4 text-4xl md:text-5xl text-[#333333]"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              Watch Key Highlights
            </h2>
          </div>

          <button className="mt-6 md:mt-0 flex items-center gap-2 text-[#FC8814] hover:text-[#FC8814] transition">
            View All Videos
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Video */}
          <motion.div
            key={activeVideo.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#F7F2E8] rounded-[32px] overflow-hidden shadow-xl">
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={activeVideo.image}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play Button */}
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#FC8814] flex items-center justify-center hover:scale-110 transition">
                    <Play size={28} fill="white" className="text-white ml-1" />
                  </div>
                </button>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex gap-5 text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock3 size={16} />
                      {activeVideo.duration}
                    </div>

                    <div className="flex items-center gap-2">
                      <Eye size={16} />
                      {activeVideo.views}
                    </div>
                  </div>

                  <h3
                    className="mt-4 text-3xl text-white"
                    style={{
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    {activeVideo.title}
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <span className="inline-flex px-4 py-2 rounded-full bg-[#FC8814] text-white text-sm">
                  {activeVideo.category}
                </span>

                <p className="mt-5 text-gray-600 leading-8">
                  {activeVideo.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Side Video List */}
          <div className="space-y-4">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className={`w-full text-left rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeVideo.id === video.id ? "bg-[#1a1a1a]/60" : "bg-[#F7F2E8]"
                }`}
              >
                <div className="flex gap-4 p-4">
                  <div className="relative">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-28 h-24 rounded-xl object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-[#FC8814] flex items-center justify-center">
                        <Play
                          size={12}
                          fill="white"
                          className="text-white ml-[2px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <span
                      className={`text-xs uppercase tracking-wider ${
                        activeVideo.id === video.id
                          ? "text-[#FC8814]"
                          : "text-[#FC8814]"
                      }`}
                    >
                      {video.category}
                    </span>

                    <h4
                      className={`mt-2 font-semibold line-clamp-2 ${
                        activeVideo.id === video.id
                          ? "text-white"
                          : "text-[#333333]"
                      }`}
                      style={{
                        fontFamily: "Playfair Display, serif",
                      }}
                    >
                      {video.title}
                    </h4>

                    <p
                      className={`text-xs mt-3 ${
                        activeVideo.id === video.id
                          ? "text-white/60"
                          : "text-gray-500"
                      }`}
                    >
                      {video.duration} • {video.views}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
