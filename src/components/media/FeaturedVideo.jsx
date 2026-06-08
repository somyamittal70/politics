import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Clock3, Eye, ArrowRight } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "National Development Vision 2026",
    description:
      "A comprehensive address highlighting development, infrastructure, innovation, and opportunities for future generations.",
    duration: "12:45",
    views: "1.2M Views",
    image:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Youth Leadership Summit Highlights",
    duration: "8:20",
    views: "856K Views",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200",
  },
  {
    id: 3,
    title: "Public Interaction Program",
    duration: "10:15",
    views: "742K Views",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
  },
  {
    id: 4,
    title: "Infrastructure Conference",
    duration: "15:30",
    views: "1M Views",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200",
  },
  {
    id: 5,
    title: "Community Development Meeting",
    duration: "9:45",
    views: "560K Views",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200",
  },
];

export default function FeaturedVideo() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section className="py-24 bg-[#F7F2E8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <span className="uppercase tracking-[0.3em] text-[#C8972B] text-sm font-semibold">
              Featured Videos
            </span>

            <h2
              className="mt-4 text-4xl md:text-5xl text-[#0D1B3E]"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              Watch The Latest Highlights
            </h2>
          </div>

          <button className="mt-6 md:mt-0 flex items-center gap-2 text-[#E8541A] hover:text-[#C8972B] transition">
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
            <div className="bg-white rounded-[36px] overflow-hidden shadow-xl">
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={activeVideo.image}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#E8541A] flex items-center justify-center hover:scale-110 transition">
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
                    className="text-3xl text-white mt-4"
                    style={{
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    {activeVideo.title}
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 leading-8">
                  {activeVideo.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Video List */}
          <div className="space-y-4">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className={`w-full text-left rounded-2xl overflow-hidden transition-all duration-300
                ${activeVideo.id === video.id ? "bg-[#0D1B3E]" : "bg-white"}`}
              >
                <div className="flex gap-4 p-4">
                  <div className="relative">
                    <img
                      src={video.image}
                      alt=""
                      className="w-28 h-24 rounded-xl object-cover"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-[#E8541A] flex items-center justify-center">
                        <Play
                          size={12}
                          fill="white"
                          className="text-white ml-[2px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4
                      className={`font-semibold line-clamp-2 ${
                        activeVideo.id === video.id
                          ? "text-white"
                          : "text-[#0D1B3E]"
                      }`}
                      style={{
                        fontFamily: "Playfair Display, serif",
                      }}
                    >
                      {video.title}
                    </h4>

                    <div
                      className={`text-xs mt-3 ${
                        activeVideo.id === video.id
                          ? "text-white/60"
                          : "text-gray-500"
                      }`}
                    >
                      {video.duration} • {video.views}
                    </div>
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
