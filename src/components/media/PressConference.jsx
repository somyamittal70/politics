import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";

export default function PressConference() {
  const [selectedConference, setSelectedConference] = useState(null);

  const conferences = [
    {
      id: 1,
      title: "National Development Strategy Briefing",
      date: "June 20, 2026",
      time: "10:00 AM - 12:30 PM",
      location: "New Delhi Convention Center",
      attendees: 500,
      description:
        "Comprehensive briefing on the national development strategy for 2026-2027, covering infrastructure, education, healthcare, and citizen welfare programs.",
      speakers: ["Chief Administrator", "Ministry Director", "Project Lead"],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      highlights: [
        "Live Q&A Session",
        "Document Distribution",
        "Networking Opportunity",
        "Media Interview Slots",
      ],
    },
    {
      id: 2,
      title: "Healthcare Initiative Launch Press Meet",
      date: "June 18, 2026",
      time: "2:00 PM - 3:30 PM",
      location: "Ministry of Health Complex",
      attendees: 300,
      description:
        "Press conference announcing the expansion of healthcare initiatives to rural areas, mobile clinics, and digital health services.",
      speakers: ["Health Minister", "Healthcare Coordinator"],
      image:
        "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?q=80&w=1200&auto=format&fit=crop",
      highlights: [
        "Live Coverage",
        "Medical Expert Panel",
        "Site Visit Options",
        "Press Kit Included",
      ],
    },
    {
      id: 3,
      title: "Education Reform Program Announcement",
      date: "June 15, 2026",
      time: "11:00 AM - 1:00 PM",
      location: "Education Ministry Auditorium",
      attendees: 400,
      description:
        "Launch of comprehensive education reform program focusing on STEM curriculum, teacher training, and digital learning platforms.",
      speakers: ["Education Secretary", "Curriculum Expert", "Technology Lead"],
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
      highlights: [
        "Interactive Demo",
        "Student Testimonials",
        "School Partnership Showcase",
        "Media Briefing Pack",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24" style={{ backgroundColor: "#F5F5F5" }}>
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
            Press Events
          </span>
          <h2
            className="text-5xl font-light mt-4"
            style={{ color: "#0D1B3E", fontFamily: "Playfair Display, serif" }}
          >
            Press Conferences
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Scheduled press conferences and media events featuring live updates,
            speaker sessions, and exclusive access to latest announcements.
          </p>
        </motion.div>

        {/* Conferences Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {conferences.map((conference, index) => (
            <motion.div
              key={conference.id}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedConference(conference)}
              className="group cursor-pointer"
            >
              <div
                className="rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 h-full flex flex-col"
                style={{ backgroundColor: "white" }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={conference.image}
                    alt={conference.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500" />

                  {/* Status Badge */}
                  <div
                    className="absolute top-4 right-4 px-4 py-2 rounded-full text-white text-sm font-semibold"
                    style={{ backgroundColor: "#C8972B" }}
                  >
                    Upcoming
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    className="text-xl font-semibold mb-4 line-clamp-2"
                    style={{
                      color: "#0D1B3E",
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    {conference.title}
                  </h3>

                  {/* Details */}
                  <div className="space-y-3 mb-6 flex-grow">
                    {/* Date */}
                    <div className="flex items-start gap-3">
                      <Calendar
                        size={18}
                        style={{ color: "#C8972B", flexShrink: 0 }}
                      />
                      <div>
                        <p className="text-sm text-gray-600">
                          {conference.date}
                        </p>
                        <p className="text-sm font-semibold text-gray-800">
                          {conference.time}
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={18}
                        style={{ color: "#C8972B", flexShrink: 0 }}
                      />
                      <p className="text-sm text-gray-700">
                        {conference.location}
                      </p>
                    </div>

                    {/* Attendees */}
                    <div className="flex items-center gap-3">
                      <Users size={18} style={{ color: "#C8972B" }} />
                      <p className="text-sm text-gray-700">
                        {conference.attendees} Expected Attendees
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className="w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                    style={{
                      backgroundColor: "#C8972B",
                      color: "white",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "translateY(-2px)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "translateY(0)")
                    }
                  >
                    View Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedConference && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedConference(null)}
        >
          <motion.div
            className="bg-white rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedConference.image}
                alt={selectedConference.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedConference(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10">
              <span
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: "#C8972B" }}
              >
                Press Conference
              </span>

              <h2
                className="text-4xl font-light mt-3 mb-6"
                style={{
                  color: "#0D1B3E",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                {selectedConference.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-8 mb-8">
                {selectedConference.description}
              </p>

              {/* Key Details */}
              <div
                className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b"
                style={{ borderColor: "#E8541A" }}
              >
                <div>
                  <p className="text-sm text-gray-600 mb-2">Date & Time</p>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} style={{ color: "#C8972B" }} />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {selectedConference.date}
                      </p>
                      <p className="text-sm text-gray-600">
                        {selectedConference.time}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Location</p>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} style={{ color: "#C8972B" }} />
                    <p className="font-semibold text-gray-800">
                      {selectedConference.location}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Expected Attendees
                  </p>
                  <div className="flex items-center gap-2">
                    <Users size={18} style={{ color: "#C8972B" }} />
                    <p className="font-semibold text-gray-800">
                      {selectedConference.attendees}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Status</p>
                  <span
                    className="inline-block px-4 py-1 rounded-full text-white font-semibold text-sm"
                    style={{ backgroundColor: "#C8972B" }}
                  >
                    Upcoming
                  </span>
                </div>
              </div>

              {/* Speakers */}
              <div className="mb-8">
                <h4
                  className="text-lg font-semibold mb-4"
                  style={{ color: "#0D1B3E" }}
                >
                  Featured Speakers
                </h4>
                <ul className="space-y-2">
                  {selectedConference.speakers.map((speaker, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#C8972B" }}
                      />
                      <span className="text-gray-700">{speaker}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h4
                  className="text-lg font-semibold mb-4"
                  style={{ color: "#0D1B3E" }}
                >
                  Conference Highlights
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedConference.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg"
                      style={{ backgroundColor: "#F7F2E8" }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#E8541A" }}
                      />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  className="flex-1 py-3 rounded-lg font-semibold transition-all duration-300"
                  style={{
                    backgroundColor: "#C8972B",
                    color: "white",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "translateY(-2px)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.transform = "translateY(0)")
                  }
                >
                  Register Now
                </button>

                <button
                  className="flex-1 py-3 rounded-lg font-semibold border-2 transition-all duration-300"
                  style={{
                    borderColor: "#E8541A",
                    color: "#E8541A",
                    backgroundColor: "white",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#FFF5F0")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "white")
                  }
                >
                  Add to Calendar
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
