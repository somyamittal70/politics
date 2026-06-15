import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Upload,
  Calendar,
  ArrowRight,
  ChevronDown,
  Clock,
} from "lucide-react";

const categories = [
  "All",
  "Public Meetings",
  "Organisational Activities",
  "Election Campaigns",
  "Community Service",
  "Student Programs",
  "Plantation Drives",
  "Special Events",
];

const videos = [
  {
    id: 1,
    title: "Ward Development Review – Public Meeting June 2026",
    date: "2026-06-10",
    description:
      "Citizens gathered to discuss infrastructure progress, drainage work and upcoming development projects for the ward.",
    thumbnail:
      "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    source: "play",
    playId: "dQw4w9WgXcQ",
    duration: "28:14",
    category: "Public Meetings",
    featured: true,
  },
  {
    id: 2,
    title: "Tiranga Salute Campaign – Community Rally",
    date: "2026-06-08",
    description:
      "Hundreds of residents came together to salute the national flag and celebrate the spirit of the nation ahead of Independence Day.",
    thumbnail:
      "https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg",
    source: "play",
    playId: "dQw4w9WgXcQ",
    duration: "14:32",
    category: "Election Campaigns",
    featured: true,
  },
  {
    id: 3,
    title: "Student Felicitation Ceremony 2026",
    date: "2026-06-05",
    description:
      "Meritorious students from Class 10 and 12 were honoured at a grand ceremony attended by parents, teachers and community leaders.",
    thumbnail:
      "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg",
    source: "play",
    playId: "dQw4w9WgXcQ",
    duration: "42:07",
    category: "Student Programs",
    featured: false,
  },
  {
    id: 4,
    title: "Ward-Level Plantation Drive Highlights",
    date: "2026-05-30",
    description:
      "Over 500 saplings were planted by volunteers across all booths in a single morning as part of the Green Mission initiative.",
    thumbnail:
      "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg",
    source: "uploaded",
    duration: "06:45",
    category: "Plantation Drives",
    featured: false,
  },
  {
    id: 5,
    title: "Aadhaar Assistance Camp – Recap",
    date: "2026-05-25",
    description:
      "A recap of the free Aadhaar enrolment and correction camp organised for senior citizens and first-time enrollees.",
    thumbnail:
      "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg",
    source: "uploaded",
    duration: "09:18",
    category: "Community Service",
    featured: false,
  },
  {
    id: 6,
    title: "Annual Organisational Convention 2026",
    date: "2026-05-20",
    description:
      "Key highlights from the annual convention including strategic planning sessions, guest addresses and cultural programmes.",
    thumbnail:
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    source: "play",
    playId: "dQw4w9WgXcQ",
    duration: "1:12:40",
    category: "Organisational Activities",
    featured: false,
  },
  {
    id: 7,
    title: "Free Health Camp – April 2026",
    date: "2026-04-28",
    description:
      "Doctors and specialists from the district hospital conducted free blood pressure, sugar and eye tests for over 800 residents.",
    thumbnail:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    source: "uploaded",
    duration: "11:22",
    category: "Community Service",
    featured: false,
  },
  {
    id: 8,
    title: "Republic Day Special Event 2026",
    date: "2026-01-26",
    description:
      "Celebrations, march-past, cultural performances and flag hoisting ceremony held at the constituency grounds on Republic Day.",
    thumbnail:
      "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg",
    source: "play",
    playId: "dQw4w9WgXcQ",
    duration: "38:55",
    category: "Special Events",
    featured: false,
  },
  {
    id: 9,
    title: "Youth Outreach Programme – Short Clip",
    date: "2026-04-10",
    description:
      "A short clip capturing the energy and enthusiasm of young volunteers during the youth outreach programme held last month.",
    thumbnail:
      "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg",
    source: "uploaded",
    duration: "02:30",
    category: "Student Programs",
    featured: false,
  },
];

const INITIAL_VISIBLE = 6;

const categoryColors = {
  "Public Meetings": { bg: "#EFF6FF", text: "#1D4ED8" },
  "Organisational Activities": { bg: "#F5F3FF", text: "#6D28D9" },
  "Election Campaigns": { bg: "#FFF7ED", text: "#C2410C" },
  "Community Service": { bg: "#F0FDF4", text: "#166534" },
  "Student Programs": { bg: "#FDF2F8", text: "#9D174D" },
  "Plantation Drives": { bg: "#ECFDF5", text: "#065F46" },
  "Special Events": { bg: "#FEFCE8", text: "#854D0E" },
};

function formatDate(str) {
  return new Date(str).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function VideoCard({ item, index, onPlay }) {
  const color = categoryColors[item.category] || { bg: "#F3F4F6", text: "#374151" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={() => onPlay(item)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-[200px] bg-gray-100">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-[#FC8814] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play size={20} fill="white" className="text-white ml-1" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 text-white text-[11px] px-2 py-0.5 rounded-md">
          <Clock size={10} />
          {item.duration}
        </div>

        {/* Source Badge */}
        <div className="absolute top-3 left-3">
          {item.source === "play" ? (
            <div className="flex items-center gap-1.5 bg-red-600 text-white text-[10px] font-semibold px-2 py-1 rounded-full">
              <play size={11} />
              play
            </div>
          ) : (
            <div className="flex items-center gap-1.5 bg-gray-800 text-white text-[10px] font-semibold px-2 py-1 rounded-full">
              <Upload size={11} />
              Uploaded
            </div>
          )}
        </div>

        {item.featured && (
          <div className="absolute top-3 right-3 bg-[#FC8814] text-white text-[10px] font-semibold px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
            style={{ background: color.bg, color: color.text }}
          >
            {item.category}
          </span>
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Calendar size={11} />
            {formatDate(item.date)}
          </div>
        </div>

        <h3 className="text-[14px] font-semibold text-gray-900 leading-snug mb-2 line-clamp-2">
          {item.title}
        </h3>

        <p className="text-gray-500 text-[12px] leading-relaxed line-clamp-2 mb-4">
          {item.description}
        </p>

        <div className="flex items-center gap-2 text-[#FC8814] text-[12px] font-semibold group/btn">
          <Play size={12} fill="#FC8814" />
          <span className="group-hover/btn:underline">Watch Video</span>
        </div>
      </div>
    </motion.div>
  );
}

function VideoModal({ video, onClose }) {
  if (!video) return null;

  const isplay = video.source === "play";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#1a1a1a] rounded-2xl overflow-hidden w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video bg-black">
          {isplay ? (
            <iframe
              src={`https://www.play.com/embed/${video.playId}?autoplay=1`}
              title={video.title}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-white/50 gap-3">
              <Play size={48} className="text-white/30" />
              <p className="text-sm">Video player — connect your video source here</p>
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className="text-white font-semibold text-base leading-snug mb-1">
                {video.title}
              </h4>
              <p className="text-white/50 text-sm">{formatDate(video.date)}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/40 hover:text-white transition-colors text-sm border border-white/20 px-3 py-1.5 rounded-lg flex-shrink-0"
            >
              Close
            </button>
          </div>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">{video.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function VideosSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visible, setVisible] = useState(INITIAL_VISIBLE);
  const [playingVideo, setPlayingVideo] = useState(null);

  const filtered =
    activeFilter === "All"
      ? videos
      : videos.filter((v) => v.category === activeFilter);

  const featuredFirst = [...filtered].sort((a, b) => b.featured - a.featured);
  const shown = featuredFirst.slice(0, visible);
  const hasMore = visible < featuredFirst.length;

  return (
    <>
      <section className="bg-[#1a1a1a] py-16 lg:py-24 relative overflow-hidden">
        {/* Subtle bg glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FC8814]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FC8814]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-[#FC8814]" />
                <span className="uppercase tracking-[0.2em] text-[#FC8814] text-xs font-semibold">
                  Watch & Explore
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Videos &{" "}
                <span className="text-[#FC8814]">Highlights</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-white/50 text-sm sm:text-base mt-3 max-w-xl"
              >
                Public meetings, community initiatives, campaigns, event
                highlights and organisational activities — all in one place.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-5 py-3"
            >
              <Play size={14} className="text-[#FC8814]" fill="#FC8814" />
              <span className="text-white font-semibold text-sm">
                {videos.length} Videos
              </span>
            </motion.div>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setVisible(INITIAL_VISIBLE);
                }}
                className={`text-xs px-4 py-2 rounded-full border font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-[#FC8814] text-white border-[#FC8814]"
                    : "bg-white/5 text-white/60 border-white/10 hover:border-[#FC8814] hover:text-[#FC8814]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Videos Grid */}
          {shown.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shown.map((item, index) => (
                <VideoCard
                  key={item.id}
                  item={item}
                  index={index}
                  onPlay={setPlayingVideo}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-white/30 text-sm">
              No videos in this category yet.
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <button
                onClick={() => setVisible((v) => v + 3)}
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FC8814] text-white px-8 py-4 rounded-full transition-all duration-300 group"
              >
                <span className="text-sm font-medium">Load More Videos</span>
                <ChevronDown
                  size={16}
                  className="text-[#FC8814] group-hover:translate-y-0.5 transition-transform duration-200"
                />
              </button>
            </motion.div>
          )}

          {!hasMore && shown.length > INITIAL_VISIBLE && (
            <p className="text-center text-white/30 text-xs mt-10">
              All {featuredFirst.length} videos loaded
            </p>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {playingVideo && (
        <VideoModal video={playingVideo} onClose={() => setPlayingVideo(null)} />
      )}
    </>
  );
}