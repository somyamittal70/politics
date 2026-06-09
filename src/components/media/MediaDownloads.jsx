import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, File, FileText, Image as ImageIcon, Package } from 'lucide-react';

export default function MediaDownloads() {
  const [expandedCategory, setExpandedCategory] = useState('press-kits');

  const downloadCategories = [
    {
      id: 'press-kits',
      name: 'Press Kits',
      icon: Package,
      items: [
        {
          id: 1,
          title: 'Complete Press Kit 2026',
          description: 'Comprehensive media package including bios, photos, and key information',
          size: '245 MB',
          format: 'ZIP',
        },
        {
          id: 2,
          title: 'Education Program Press Kit',
          description: 'Complete details on education reform initiatives and success stories',
          size: '128 MB',
          format: 'ZIP',
        },
        {
          id: 3,
          title: 'Infrastructure Projects Overview',
          description: 'Detailed information on ongoing infrastructure development projects',
          size: '156 MB',
          format: 'ZIP',
        },
      ],
    },
    {
      id: 'press-releases',
      name: 'Press Releases',
      icon: FileText,
      items: [
        {
          id: 4,
          title: 'June 2026 Press Releases',
          description: 'All official press releases and statements from June 2026',
          size: '2.3 MB',
          format: 'PDF',
        },
        {
          id: 5,
          title: 'Healthcare Initiative Announcement',
          description: 'Official statement on healthcare expansion programs',
          size: '1.1 MB',
          format: 'PDF',
        },
        {
          id: 6,
          title: 'Youth Empowerment Program Update',
          description: 'Latest updates on youth initiatives and success metrics',
          size: '1.5 MB',
          format: 'PDF',
        },
        {
          id: 7,
          title: 'National Conference 2026 Details',
          description: 'Complete information on the national conference',
          size: '0.9 MB',
          format: 'PDF',
        },
      ],
    },
    {
      id: 'high-res-photos',
      name: 'High Resolution Photos',
      icon: ImageIcon,
      items: [
        {
          id: 8,
          title: 'Official Portrait Collection',
          description: '50+ high-resolution official photos (4K quality)',
          size: '1.2 GB',
          format: 'ZIP',
        },
        {
          id: 9,
          title: 'Event Photography Archive',
          description: '200+ professional event photos from recent events',
          size: '2.8 GB',
          format: 'ZIP',
        },
        {
          id: 10,
          title: 'Community Program Photos',
          description: 'High-res images from community engagement programs',
          size: '950 MB',
          format: 'ZIP',
        },
        {
          id: 11,
          title: 'Infrastructure Project Images',
          description: 'Detailed photographs of infrastructure developments',
          size: '1.5 GB',
          format: 'ZIP',
        },
      ],
    },
    {
      id: 'documents',
      name: 'Documents & Reports',
      icon: File,
      items: [
        {
          id: 12,
          title: 'Annual Report 2025-2026',
          description: 'Comprehensive annual report with key statistics and achievements',
          size: '5.2 MB',
          format: 'PDF',
        },
        {
          id: 13,
          title: 'Development Strategy Document',
          description: 'Detailed strategy document outlining vision and objectives',
          size: '3.8 MB',
          format: 'PDF',
        },
        {
          id: 14,
          title: 'Policy Framework Overview',
          description: 'Key policies and frameworks guiding initiatives',
          size: '2.1 MB',
          format: 'PDF',
        },
        {
          id: 15,
          title: 'Success Stories & Case Studies',
          description: 'Real-world examples and impact measurements',
          size: '4.5 MB',
          format: 'PDF',
        },
      ],
    },
  ];

  const currentCategory = downloadCategories.find(cat => cat.id === expandedCategory);
  const CurrentIcon = currentCategory?.icon || Package;

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-24" style={{ backgroundColor: '#F5F5F5' }}>
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
            style={{ color: '#FC8814' }}
          >
            Media Resources
          </span>
          <h2
            className="text-5xl font-light mt-4"
            style={{ color: '#333333', fontFamily: 'Playfair Display, serif' }}
          >
            Downloads & Media Kit
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Access press kits, high-resolution photos, press releases, and official documents.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <motion.div
            className="lg:col-span-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              {downloadCategories.map((category) => {
                const Icon = category.icon;
                const isActive = expandedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setExpandedCategory(category.id)}
                    className={`w-full px-6 py-4 rounded-lg flex items-center gap-3 transition-all duration-300 ${
                      isActive ? 'shadow-lg' : 'hover:shadow-md'
                    }`}
                    style={{
                      backgroundColor: isActive ? '#FC8814' : 'white',
                      color: isActive ? 'white' : '#0D1B3E',
                    }}
                  >
                    <Icon size={20} />
                    <span className="font-semibold">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Downloads List */}
          <motion.div
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-[24px] p-8 shadow-lg">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: '#F7F2E8' }}
                >
                  <CurrentIcon size={28} style={{ color: '#FC8814' }} />
                </div>
                <div>
                  <h3
                    className="text-3xl font-light"
                    style={{ color: '#0D1B3E', fontFamily: 'Playfair Display, serif' }}
                  >
                    {currentCategory?.name}
                  </h3>
                </div>
              </div>

              {/* Downloads Grid */}
              <div className="space-y-4">
                {currentCategory?.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group p-6 rounded-lg border-2 hover:shadow-lg transition duration-300"
                    style={{ borderColor: '#F7F2E8' }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-grow">
                        <h4
                          className="text-lg font-semibold mb-2 group-hover:text-[#FC8814] transition"
                          style={{ color: '#0D1B3E' }}
                        >
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                        <div className="flex gap-4 text-xs">
                          <span
                            className="px-3 py-1 rounded-full"
                            style={{
                              backgroundColor: '#F7F2E8',
                              color: '#FC8814',
                              fontWeight: 500,
                            }}
                          >
                            {item.format}
                          </span>
                          <span className="text-gray-600 font-semibold">
                            {item.size}
                          </span>
                        </div>
                      </div>

                      {/* Download Button */}
                      <motion.button
                        className="flex-shrink-0 p-4 rounded-lg flex items-center justify-center transition-all duration-300"
                        style={{
                          backgroundColor: '#FC8814',
                          color: 'white',
                        }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download size={20} />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}