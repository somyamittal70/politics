import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'Events', 'Press', 'Community', 'Initiatives', 'Infrastructure'];

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
      category: 'Events',
      title: 'Community Gathering',
      date: 'June 2026',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?q=80&w=1200&auto=format&fit=crop',
      category: 'Press',
      title: 'Press Conference',
      date: 'June 2026',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
      category: 'Community',
      title: 'Community Support',
      date: 'June 2026',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
      category: 'Initiatives',
      title: 'Youth Program',
      date: 'May 2026',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
      category: 'Infrastructure',
      title: 'Development Project',
      date: 'May 2026',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?q=80&w=1200&auto=format&fit=crop',
      category: 'Events',
      title: 'Grand Event',
      date: 'May 2026',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
      category: 'Community',
      title: 'Community Drive',
      date: 'April 2026',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
      category: 'Press',
      title: 'Media Coverage',
      date: 'April 2026',
    },
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  return (
    <section className="py-24" style={{ backgroundColor: '#F7F2E8' }}>
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
            Photo Gallery
          </span>
          <h2
            className="text-5xl font-light mt-4"
            style={{ color: '#0D1B3E', fontFamily: 'Playfair Display, serif' }}
          >
            Visual Moments
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap gap-3 mb-16 items-center"
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
                  ? 'text-white shadow-lg scale-105'
                  : 'text-gray-700 border-2 hover:border-opacity-100'
              }`}
              style={{
                backgroundColor: activeFilter === category ? '#C8972B' : 'transparent',
                borderColor: activeFilter === category ? '#C8972B' : '#D4A574',
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedImage(photo)}
                className="group relative overflow-hidden rounded-[20px] h-72 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />

                {/* Zoom Icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#C8972B' }}
                  >
                    <ZoomIn size={28} color="white" />
                  </div>
                </motion.div>

                {/* Photo Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transform group-hover:translate-y-0 translate-y-8 transition duration-500">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#C8972B' }}
                  >
                    {photo.category}
                  </span>
                  <h4 className="text-white font-semibold mt-2">
                    {photo.title}
                  </h4>
                  <p className="text-gray-300 text-sm mt-1">{photo.date}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition z-10"
              >
                <X size={32} />
              </button>

              {/* Image */}
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full rounded-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              />

              {/* Image Info */}
              <motion.div
                className="mt-6 text-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <span
                  className="text-sm font-semibold uppercase tracking-widest"
                  style={{ color: '#C8972B' }}
                >
                  {selectedImage.category}
                </span>
                <h3 className="text-3xl font-light mt-3 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300">{selectedImage.date}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}