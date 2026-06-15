import React, { useState } from "react";
import {
  FiPlay,
  FiImage,
  FiFileText,
  FiCalendar,
  FiX,
  FiPlus,
  FiSearch,
} from "react-icons/fi";
import { motion } from "framer-motion";

const MediaCentre = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [mediaItems, setMediaItems] = useState([
    {
      id: 1,
      title: "Press Conference - Budget Session",
      category: "videos",
      date: "2024-06-10",
      thumbnail: "https://via.placeholder.com/400x225?text=Video+1",
      type: "video",
    },
    {
      id: 2,
      title: "Campaign Update - Monthly Review",
      category: "announcements",
      date: "2024-06-08",
      content: "Latest campaign updates and achievements",
      type: "announcement",
    },
    {
      id: 3,
      title: "Event Poster - Community Meeting",
      category: "posters",
      date: "2024-06-07",
      thumbnail: "https://via.placeholder.com/400x600?text=Poster+1",
      type: "poster",
    },
    {
      id: 4,
      title: "Press Note - Policy Announcement",
      category: "press-notes",
      date: "2024-06-05",
      content: "Important policy announcement and details",
      type: "press-note",
    },
    {
      id: 5,
      title: "Event Highlights - Public Rally",
      category: "events",
      date: "2024-06-03",
      thumbnail: "https://via.placeholder.com/400x225?text=Event+1",
      type: "event",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    category: "videos",
    file: null,
    content: "",
  });

  const categories = [
    { id: "all", label: "All", icon: FiFileText },
    { id: "videos", label: "Videos", icon: FiPlay },
    { id: "announcements", label: "Announcements", icon: FiFileText },
    { id: "posters", label: "Posters", icon: FiImage },
    { id: "press-notes", label: "Press Notes", icon: FiFileText },
    { id: "events", label: "Events", icon: FiCalendar },
  ];

  const filteredItems = mediaItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddMedia = (e) => {
    e.preventDefault();
    if (formData.title.trim()) {
      const newItem = {
        id: mediaItems.length + 1,
        title: formData.title,
        category: formData.category,
        date: new Date().toISOString().split("T")[0],
        content: formData.content,
        thumbnail:
          formData.file ||
          `https://via.placeholder.com/400x225?text=${formData.title}`,
        type: formData.category,
      };
      setMediaItems([newItem, ...mediaItems]);
      setFormData({ title: "", category: "videos", file: null, content: "" });
      setShowAdminModal(false);
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="w-full min-h-[500px] flex items-center justify-center relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#E8541A" }}
        />

        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ backgroundColor: "#080F22" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center space-y-6"
          >
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-8 sm:w-10 h-1"
                style={{ backgroundColor: "#E8541A" }}
              />
              <span
                className="text-xs sm:text-sm font-semibold tracking-widest uppercase"
                style={{ color: "#E8541A" }}
              >
                Your Media Hub
              </span>
              <div
                className="w-8 sm:w-10 h-1"
                style={{ backgroundColor: "#E8541A" }}
              />
            </div>

            <h1
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
              style={{
                color: "#080F22",
                fontFamily: "Playfair Display, serif",
              }}
            >
              Media Centre
            </h1>

            <p
              className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed"
              style={{ color: "#4A5568", fontFamily: "Raleway, sans-serif" }}
            >
              Videos, announcements, campaign updates, press coverage, event
              highlights and important public information at one place.
            </p>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ backgroundColor: "#E8541A" }}
        />
      </section>

      {/* Admin & Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
          {/* Search Bar */}
          <div className="w-full sm:flex-1 relative">
            <input
              type="text"
              placeholder="Search media..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-10 rounded-[4px] border-2 transition-all focus:outline-none"
              style={{
                borderColor: searchQuery ? "#E8541A" : "#E5E7EB",
                color: "#080F22",
              }}
            />
            <FiSearch
              className="absolute left-3 top-3.5 text-gray-400"
              size={20}
            />
          </div>

          {/* Admin Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAdminModal(true)}
            className="w-full sm:w-auto flex items-center gap-2 px-6 py-3 rounded-[4px] font-semibold text-white transition-all hover:shadow-lg"
            style={{ backgroundColor: "#E8541A" }}
          >
            <FiPlus size={20} />
            Add Media
          </motion.button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-[4px] font-medium transition-all duration-300"
                style={{
                  backgroundColor:
                    activeCategory === category.id ? "#E8541A" : "#F3F4F6",
                  color: activeCategory === category.id ? "white" : "#080F22",
                  fontFamily: "Raleway, sans-serif",
                }}
              >
                <IconComponent size={18} />
                <span className="text-sm sm:text-base">{category.label}</span>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Media Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredItems.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group rounded-[4px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                style={{ borderTop: `4px solid #E8541A` }}
              >
                {/* Thumbnail/Image Section */}
                {(item.type === "video" ||
                  item.type === "poster" ||
                  item.type === "event") && (
                  <div className="relative overflow-hidden bg-gray-200 h-48 sm:h-56">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 flex items-center justify-center">
                      {item.type === "video" && (
                        <div
                          className="bg-white rounded-full p-3"
                          style={{ backgroundColor: "#E8541A" }}
                        >
                          <FiPlay size={24} className="text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="p-4 sm:p-6 bg-white">
                  {/* Date */}
                  <p
                    className="text-xs sm:text-sm mb-2 font-medium"
                    style={{ color: "#E8541A" }}
                  >
                    {new Date(item.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>

                  {/* Title */}
                  <h3
                    className="text-base sm:text-lg font-bold mb-3 line-clamp-2"
                    style={{
                      color: "#080F22",
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description/Content */}
                  {item.content && (
                    <p
                      className="text-sm sm:text-base mb-4 line-clamp-2"
                      style={{ color: "#6B7280" }}
                    >
                      {item.content}
                    </p>
                  )}

                  {/* Category Badge */}
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                    <span
                      className="text-xs sm:text-sm px-3 py-1 rounded-[4px] font-medium text-white"
                      style={{ backgroundColor: "#E8541A" }}
                    >
                      {categories.find((c) => c.id === item.category)?.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg" style={{ color: "#6B7280" }}>
              No media found. Try adjusting your filters.
            </p>
          </div>
        )}
      </section>

      {/* Admin Modal */}
      {showAdminModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowAdminModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-[4px] shadow-2xl w-full max-w-md"
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between p-6 border-b"
              style={{ borderColor: "#E5E7EB" }}
            >
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{
                  color: "#080F22",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Add Media
              </h2>
              <button
                onClick={() => setShowAdminModal(false)}
                className="p-1 hover:bg-gray-100 rounded-[4px] transition-colors"
              >
                <FiX size={24} style={{ color: "#080F22" }} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleAddMedia} className="p-6 space-y-4">
              {/* Title Input */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#080F22" }}
                >
                  Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-[4px] border-2 focus:outline-none transition-all"
                  style={{ borderColor: "#E5E7EB", color: "#080F22" }}
                />
              </div>

              {/* Category Select */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#080F22" }}
                >
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-[4px] border-2 focus:outline-none transition-all"
                  style={{ borderColor: "#E5E7EB", color: "#080F22" }}
                >
                  <option value="videos">Video</option>
                  <option value="announcements">Announcement</option>
                  <option value="posters">Poster</option>
                  <option value="press-notes">Press Note</option>
                  <option value="events">Event</option>
                </select>
              </div>

              {/* Content/Description */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#080F22" }}
                >
                  Description
                </label>
                <textarea
                  placeholder="Enter description (optional)"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  rows="3"
                  className="w-full px-3 py-2 rounded-[4px] border-2 focus:outline-none transition-all resize-none"
                  style={{ borderColor: "#E5E7EB", color: "#080F22" }}
                />
              </div>

              {/* File Input */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#080F22" }}
                >
                  Upload File/Image
                </label>
                <input
                  type="file"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      file: e.target.files[0]?.name || "",
                    })
                  }
                  className="w-full px-3 py-2 rounded-[4px] border-2 focus:outline-none text-sm"
                  style={{ borderColor: "#E5E7EB", color: "#080F22" }}
                  accept="image/*,video/*,.pdf"
                />
                <p className="text-xs mt-1" style={{ color: "#6B7280" }}>
                  Supported: Images, Videos, PDF (Max 50MB)
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-6">
                <button
                  type="button"
                  onClick={() => setShowAdminModal(false)}
                  className="flex-1 px-4 py-2 rounded-[4px] font-semibold border-2 transition-all"
                  style={{ borderColor: "#080F22", color: "#080F22" }}
                >
                  Cancel
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 px-4 py-2 rounded-[4px] font-semibold text-white transition-all"
                  style={{ backgroundColor: "#E8541A" }}
                >
                  Add Media
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MediaCentre;
