import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Share2, Calendar, User } from 'lucide-react';

export default function Interviews() {
  const [selectedInterview, setSelectedInterview] = useState(null);

  const interviews = [
    {
      id: 1,
      title: 'Vision for Development 2026',
      interviewer: 'Media Director',
      interviewee: 'Chief Administrator',
      duration: '28:15',
      date: 'June 2026',
      thumbnail: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      description:
        'An in-depth interview discussing the comprehensive development strategy, key initiatives, and long-term vision for the nation. Topics include infrastructure, education, healthcare, and citizen welfare programs.',
      keyTopics: [
        'Development Strategy',
        'Infrastructure Plans',
        'Education Reform',
        'Healthcare Initiatives',
        'Youth Empowerment',
      ],
      views: '2.1M',
    },
    {
      id: 2,
      title: 'Education Reform & Digital Learning',
      interviewer: 'Tech Correspondent',
      interviewee: 'Education Secretary',
      duration: '22:40',
      date: 'June 2026',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f70259b51?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      description:
        'Exclusive interview about the ongoing education reform program, digital learning platforms, STEM curriculum, and teacher training initiatives implemented across 500 schools.',
      keyTopics: [
        'STEM Curriculum',
        'Digital Platforms',
        'Teacher Training',
        'School Infrastructure',
        'Student Outcomes',
      ],
      views: '1.8M',
    },
    {
      id: 3,
      title: 'Healthcare Access in Rural Areas',
      interviewer: 'Health Correspondent',
      interviewee: 'Health Minister',
      duration: '25:30',
      date: 'May 2026',
      thumbnail: 'https://images.unsplash.com/photo-1579154204601-01d82b3f2ed1?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      description:
        'Discussion on healthcare expansion programs, mobile clinics, rural health initiatives, and digital health services reaching underserved communities across the nation.',
      keyTopics: [
        'Mobile Clinics',
        'Rural Health',
        'Digital Services',
        'Preventive Care',
        'Healthcare Access',
      ],
      views: '1.5M',
    },
    {
      id: 4,
      title: 'Community Engagement & Development',
      interviewer: 'Social Affairs Editor',
      interviewee: 'Community Lead',
      duration: '32:15',
      date: 'May 2026',
      thumbnail: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      description:
        'Deep dive into community engagement programs, grassroots initiatives, and citizen participation in development projects. Discussion on building stronger communities through dialogue.',
      keyTopics: [
        'Community Programs',
        'Grassroots Work',
        'Citizen Engagement',
        'Local Development',
        'Social Impact',
      ],
      views: '1.6M',
    },
    {
      id: 5,
      title: 'Infrastructure & Smart Cities',
      interviewer: 'Infrastructure Correspondent',
      interviewee: 'Development Director',
      duration: '30:45',
      date: 'April 2026',
      thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      description:
        'Comprehensive interview on infrastructure development projects, smart city initiatives, sustainable development, and technological integration in public services.',
      keyTopics: [
        'Infrastructure Projects',
        'Smart City Solutions',
        'Sustainability',
        'Technology Integration',
        'Urban Development',
      ],
      views: '1.9M',
    },
    {
      id: 6,
      title: 'Youth Programs & Empowerment',
      interviewer: 'Youth Correspondent',
      interviewee: 'Youth Program Director',
      duration: '27:50',
      date: 'April 2026',
      thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
      youtubeId: 'dQw4w9WgXcQ',
      description:
        'Interview on youth empowerment initiatives, skill development programs, career opportunities, and entrepreneurship support for young citizens.',
      keyTopics: [
        'Skill Development',
        'Entrepreneurship',
        'Career Support',
        'Youth Training',
        'Employment',
      ],
      views: '1.7M',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

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
            style={{ color: '#C8972B' }}
          >
            Media Interviews
          </span>
          <h2
            className="text-5xl font-light mt-4"
            style={{ color: '#0D1B3E', fontFamily: 'Playfair Display, serif' }}
          >
            Featured Interviews
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            In-depth interviews with key leaders and officials discussing vision, strategy, and initiatives.
          </p>
        </motion.div>

        {/* Interviews Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interviews.map((interview, index) => (
            <motion.button
              key={interview.id}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedInterview(interview)}
              className="group text-left focus:outline-none"
            >
              <div 
                className="rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 h-full flex flex-col"
                style={{ backgroundColor: '#F7F2E8' }}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={interview.thumbnail}
                    alt={interview.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500" />

                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#C8972B' }}
                    >
                      <Play size={28} color="white" fill="white" className="ml-1" />
                    </div>
                  </motion.div>

                  {/* Duration Badge */}
                  <div
                    className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-white text-xs font-semibold"
                    style={{ backgroundColor: '#E8541A' }}
                  >
                    {interview.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    className="text-xl font-semibold mb-3 line-clamp-2"
                    style={{ color: '#0D1B3E', fontFamily: 'Playfair Display, serif' }}
                  >
                    {interview.title}
                  </h3>

                  {/* Interview Details */}
                  <div className="space-y-2 mb-4 flex-grow">
                    <div className="flex items-center gap-2">
                      <User size={14} style={{ color: '#C8972B' }} />
                      <span className="text-sm text-gray-700">
                        <span className="font-semibold">Interviewer:</span> {interview.interviewer}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={14} style={{ color: '#C8972B' }} />
                      <span className="text-sm text-gray-700">
                        <span className="font-semibold">Guest:</span> {interview.interviewee}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} style={{ color: '#C8972B' }} />
                      <span className="text-sm text-gray-600">{interview.date}</span>
                    </div>
                  </div>

                  {/* Key Topics */}
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wider text-gray-600 font-semibold mb-2">
                      Topics Covered
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {interview.keyTopics.slice(0, 3).map((topic, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: '#F5F5F5',
                            color: '#C8972B',
                            fontWeight: 500,
                          }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <p className="text-xs text-gray-600 mb-4">
                    <span style={{ color: '#E8541A', fontWeight: 'bold' }}>
                      {interview.views}
                    </span>{' '}
                    views
                  </p>

                  {/* CTA Button */}
                  <button
                    className="w-full py-2 rounded-lg font-semibold transition-all duration-300 text-white"
                    style={{ backgroundColor: '#C8972B' }}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    Watch Interview
                  </button>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Interview Detail Modal */}
      <AnimatePresence>
        {selectedInterview && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedInterview(null)}
          >
            <motion.div
              className="w-full max-w-5xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedInterview(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-10"
              >
                <span className="text-3xl">✕</span>
              </button>

              {/* Video Player */}
              <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedInterview.youtubeId}?autoplay=1`}
                    title={selectedInterview.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Interview Details */}
              <div className="bg-white rounded-lg p-8">
                <h2
                  className="text-4xl font-light mb-4"
                  style={{ color: '#0D1B3E', fontFamily: 'Playfair Display, serif' }}
                >
                  {selectedInterview.title}
                </h2>

                <p className="text-gray-600 leading-8 mb-6">
                  {selectedInterview.description}
                </p>

                {/* Interview Info */}
                <div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b"
                  style={{ borderColor: '#E8541A' }}
                >
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Duration</p>
                    <p className="text-gray-800 mt-1">{selectedInterview.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Interviewer</p>
                    <p className="text-gray-800 mt-1">{selectedInterview.interviewer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Guest</p>
                    <p className="text-gray-800 mt-1">{selectedInterview.interviewee}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Views</p>
                    <p className="text-gray-800 mt-1">{selectedInterview.views}</p>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-4" style={{ color: '#0D1B3E' }}>
                    Topics Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedInterview.keyTopics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full text-sm font-semibold"
                        style={{
                          backgroundColor: '#F7F2E8',
                          color: '#C8972B',
                        }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    className="flex-1 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                    style={{
                      backgroundColor: '#C8972B',
                      color: 'white',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    <Play size={18} />
                    Watch Full Interview
                  </button>

                  <button
                    className="flex-1 py-3 rounded-lg font-semibold border-2 flex items-center justify-center gap-2 transition-all duration-300"
                    style={{
                      borderColor: '#E8541A',
                      color: '#E8541A',
                      backgroundColor: 'white',
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#FFF5F0'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                  >
                    <Share2 size={18} />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}