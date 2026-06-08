import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Clock, Eye } from "lucide-react";

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    "all",
    "Speeches",
    "Interviews",
    "Conferences",
    "Announcements",
    "Events",
  ];

  const videos = [
    {
      id: 1,
      title: "Address on Education Reform",
      category: "Speeches",
      thumbnail:
        "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=600&auto=format&fit=crop",
      duration: "32:45",
      views: "2.3M",
      date: "June 2026",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Media Interview Q&A Session",
      category: "Interviews",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f70259b51?q=80&w=600&auto=format&fit=crop",
      duration: "28:15",
      views: "1.8M",
      date: "June 2026",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "National Conference 2026",
      category: "Conferences",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
      duration: "45:20",
      views: "3.1M",
      date: "June 2026",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "Infrastructure Development Plans",
      category: "Announcements",
      thumbnail:
        "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?q=80&w=600&auto=format&fit=crop",
      duration: "22:10",
      views: "1.5M",
      date: "May 2026",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 5,
      title: "Youth Empowerment Program Launch",
      category: "Events",
      thumbnail:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop",
      duration: "38:55",
      views: "2.7M",
      date: "May 2026",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 6,
      title: "Press Conference Highlights",
      category: "Speeches",
      thumbnail:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop",
      duration: "25:30",
      views: "1.9M",
      date: "May 2026",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 7,
      title: "Healthcare Initiative Discussion",
      category: "Interviews",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
      duration: "35:40",
      views: "1.6M",
      date: "April 2026",
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      id: 8,
      title: "Community Engagement Session",
      category: "Events",
      thumbnail:
        "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?q=80&w=600&auto=format&fit=crop",
      duration: "40:25",
      views: "2.2M",
      date: "April 2026",
      youtubeId: "dQw4w9WgXcQ",
    },
  ];

  const filteredVideos =
    activeFilter === "all"
      ? videos
      : videos.filter((video) => video.category === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ color: "#C8972B" }}
          >
            Video Playlist
          </span>
          <h2
            className="text-5xl font-light mt-4"
            style={{ color: "#0D1B3E", fontFamily: "Playfair Display, serif" }}
          >
            Video Content Library
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "text-white shadow-lg scale-105"
                  : "text-gray-700 border-2 hover:border-opacity-100"
              }`}
              style={{
                backgroundColor:
                  activeFilter === category ? "#C8972B" : "transparent",
                borderColor: activeFilter === category ? "#C8972B" : "#D4A574",
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredVideos.map((video, index) => (
              <motion.button
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedVideo(video)}
                className="group text-left w-full focus:outline-none"
              >
                <div className="relative overflow-hidden rounded-[20px] h-56 mb-4">
                  {/* Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />

                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#C8972B" }}
                    >
                      <Play
                        size={28}
                        color="white"
                        fill="white"
                        className="ml-1"
                      />
                    </div>
                  </motion.div>

                  {/* Duration Badge */}
                  <div
                    className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-white text-xs font-semibold"
                    style={{ backgroundColor: "#E8541A" }}
                  >
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <h4
                  className="font-semibold text-sm mb-3 line-clamp-2 group-hover:text-[#C8972B] transition"
                  style={{ color: "#0D1B3E" }}
                >
                  {video.title}
                </h4>

                {/* Meta Stats */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span
                    className="font-semibold uppercase tracking-wider"
                    style={{ color: "#E8541A" }}
                  >
                    {video.category}
                  </span>
                  <span>{video.date}</span>
                </div>

                {/* Views & Duration */}
                <div className="flex gap-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Eye size={14} />
                    {video.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {video.duration}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition z-10 text-2xl"
              >
                ✕
              </button>

              {/* Video Player */}
              <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
                <div className="absolute inset-0">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Video Details Below Player */}
              <motion.div
                className="mt-6 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <span
                  className="text-sm font-semibold uppercase tracking-widest"
                  style={{ color: "#C8972B" }}
                >
                  {selectedVideo.category}
                </span>
                <h3
                  className="text-3xl font-light mt-3 mb-3"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {selectedVideo.title}
                </h3>
                <div className="flex gap-6 text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <Eye size={16} />
                    {selectedVideo.views} views
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {selectedVideo.duration}
                  </div>
                  <span>{selectedVideo.date}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
