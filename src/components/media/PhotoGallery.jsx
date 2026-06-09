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
      // tall card
      span: 'row-span-2',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?q=80&w=1200&auto=format&fit=crop',
      category: 'Press',
      title: 'Press Conference',
      date: 'June 2026',
      span: '',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
      category: 'Community',
      title: 'Community Support',
      date: 'June 2026',
      span: '',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
      category: 'Initiatives',
      title: 'Youth Program',
      date: 'May 2026',
      // wide card
      span: 'col-span-2',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
      category: 'Infrastructure',
      title: 'Development Project',
      date: 'May 2026',
      span: 'row-span-2',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?q=80&w=1200&auto=format&fit=crop',
      category: 'Events',
      title: 'Grand Event',
      date: 'May 2026',
      span: '',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
      category: 'Community',
      title: 'Community Drive',
      date: 'April 2026',
      span: '',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
      category: 'Press',
      title: 'Media Coverage',
      date: 'April 2026',
      span: 'col-span-2',
    },
  ];

  const filteredPhotos = activeFilter === 'all'
    ? photos
    : photos.filter(photo => photo.category === activeFilter);

  return (
    <section className="py-24" style={{ backgroundColor: '#F7F2E8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-7 h-[2px]" style={{ background: '#FF9933' }} />
            <span
              className="text-xs font-black uppercase tracking-[0.3em]"
              style={{ color: '#FF9933', fontFamily: 'Raleway, sans-serif' }}
            >
              Photo Gallery
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-light leading-tight"
            style={{ color: '#0D1B3E', fontFamily: 'Playfair Display, serif' }}
          >
            Visual <em className="italic" style={{ color: '#FF9933' }}>Moments</em>
          </h2>
        </motion.div>

        {/* ── Filter Pills ── */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="relative px-5 py-2 text-[0.6rem] font-black tracking-[0.18em] uppercase transition-all duration-250 overflow-hidden"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              {activeFilter === cat ? (
                <>
                  <span className="relative z-10 text-white">{cat}</span>
                  <span className="absolute inset-0" style={{ background: '#FF9933' }} />
                </>
              ) : (
                <>
                  <span className="relative z-10" style={{ color: '#0D1B3E', opacity: 0.5 }}>{cat}</span>
                  <span className="absolute inset-0 border" style={{ borderColor: 'rgba(13,27,62,0.18)' }} />
                </>
              )}
            </button>
          ))}
        </motion.div>

        {/* ── Bento Grid (desktop) / Stacked (mobile) ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Mobile: simple 1-col stack */}
            <div className="flex flex-col gap-4 sm:hidden">
              {filteredPhotos.map((photo, i) => (
                <GalleryCard key={photo.id} photo={photo} index={i} onClick={() => setSelectedImage(photo)} mobile />
              ))}
            </div>

            {/* Tablet: 2-col simple grid */}
            <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4">
              {filteredPhotos.map((photo, i) => (
                <GalleryCard key={photo.id} photo={photo} index={i} onClick={() => setSelectedImage(photo)} />
              ))}
            </div>

            {/* Desktop: bento grid with varied spans */}
            {activeFilter === 'all' ? (
              <div
                className="hidden lg:grid gap-4"
                style={{
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gridAutoRows: '220px',
                }}
              >
                {photos.map((photo, i) => (
                  <GalleryCard
                    key={photo.id}
                    photo={photo}
                    index={i}
                    onClick={() => setSelectedImage(photo)}
                    spanClass={photo.span}
                  />
                ))}
              </div>
            ) : (
              <div className="hidden lg:grid grid-cols-4 gap-4" style={{ gridAutoRows: '220px' }}>
                {filteredPhotos.map((photo, i) => (
                  <GalleryCard key={photo.id} photo={photo} index={i} onClick={() => setSelectedImage(photo)} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.92)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition"
              >
                <X size={30} />
              </button>

              {/* Image — no border-radius to match editorial feel */}
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-cover"
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Caption bar */}
              <motion.div
                className="flex items-center justify-between mt-5"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <div>
                  <span
                    className="block text-[0.6rem] font-black uppercase tracking-[0.25em] mb-1"
                    style={{ color: '#FF9933', fontFamily: 'Raleway, sans-serif' }}
                  >
                    {selectedImage.category}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-light text-white"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {selectedImage.title}
                  </h3>
                </div>
                <span
                  className="text-white/35 text-sm"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  {selectedImage.date}
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ── Card Component ── */
function GalleryCard({ photo, index, onClick, spanClass = '', mobile = false }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className={`group relative overflow-hidden cursor-pointer ${spanClass} ${mobile ? 'h-56' : ''}`}
      style={!mobile && !spanClass ? { minHeight: '220px' } : {}}
    >
      {/* Image */}
      <img
        src={photo.src}
        alt={photo.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        style={{ minHeight: '100%' }}
      />

      {/* Subtle dark base overlay */}
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 transition-colors duration-500" />

      {/* Gold top-left corner accent */}
      <div
        className="absolute top-0 left-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, #FF9933 40%, transparent 100%)',
        }}
      />

      {/* Zoom icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="w-12 h-12 flex items-center justify-center border-2"
          style={{ borderColor: '#FF9933', background: 'rgba(200,151,43,0.15)' }}
        >
          <ZoomIn size={20} color="#FF9933" />
        </div>
      </div>

      {/* Bottom info — slides up on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-400"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)' }}
      >
        {/* Gold left bar */}
        <div className="flex items-start gap-3">
          <div className="mt-1 w-[3px] h-8 flex-shrink-0" style={{ background: '#FF9933' }} />
          <div>
            <span
              className="block text-[0.52rem] font-black uppercase tracking-[0.2em] mb-0.5"
              style={{ color: '#FF9933', fontFamily: 'Raleway, sans-serif' }}
            >
              {photo.category}
            </span>
            <p
              className="text-white text-sm font-semibold leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {photo.title}
            </p>
            <p
              className="text-white/45 text-[0.6rem] mt-0.5 uppercase tracking-widest"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              {photo.date}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}