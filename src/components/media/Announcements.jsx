// import React, { useState } from "react";
// import {
//   FiPlus,
//   FiX,
//   FiCalendar,
//   FiArrowRight,
//   FiEdit2,
//   FiTrash2,
//   FiPin,
// } from "react-icons/fi";
// import { motion, AnimatePresence } from "framer-motion";

// const AnnouncementsUpdates = () => {
//   const [announcements, setAnnouncements] = useState([
//     {
//       id: 1,
//       title: "Student Felicitation Registration Open",
//       category: "Registration",
//       date: "2024-06-15",
//       description:
//         "Register now for the annual student felicitation ceremony. Limited seats available. Early registration recommended.",
//       image: "https://via.placeholder.com/400x250?text=Student+Felicitation",
//       status: "Active",
//       isPinned: true,
//     },
//     {
//       id: 2,
//       title: "Aadhaar Assistance Camp",
//       category: "Camp",
//       date: "2024-06-12",
//       description:
//         "Free Aadhaar assistance camp for residents. Expert guidance and support available. Bring necessary documents.",
//       image: "https://via.placeholder.com/400x250?text=Aadhaar+Camp",
//       status: "Active",
//       isPinned: true,
//     },
//     {
//       id: 3,
//       title: "Plantation Drive Registration",
//       category: "Campaign",
//       date: "2024-06-10",
//       description:
//         "Join our environmental initiative. Help us plant 10,000 trees this season. Register your team today.",
//       image: "https://via.placeholder.com/400x250?text=Plantation+Drive",
//       status: "Active",
//       isPinned: false,
//     },
//     {
//       id: 4,
//       title: "Health Camp Announcement",
//       category: "Camp",
//       date: "2024-06-08",
//       description:
//         "Free health checkup camp for all residents. Expert doctors and medical staff on duty. No registration needed.",
//       image: "https://via.placeholder.com/400x250?text=Health+Camp",
//       status: "Active",
//       isPinned: false,
//     },
//     {
//       id: 5,
//       title: "Tiranga Salute Campaign",
//       category: "Campaign",
//       date: "2024-06-05",
//       description:
//         "Celebrate national pride with our Tiranga Salute initiative. Participate in community events and activities.",
//       image: "https://via.placeholder.com/400x250?text=Tiranga+Salute",
//       status: "Active",
//       isPinned: false,
//     },
//     {
//       id: 6,
//       title: "Public Meeting Notice",
//       category: "Public Notice",
//       date: "2024-06-01",
//       description:
//         "Important public meeting scheduled. Discuss community development projects and citizen feedback. Attendance is appreciated.",
//       image: "https://via.placeholder.com/400x250?text=Public+Meeting",
//       status: "Expired",
//       isPinned: false,
//     },
//   ]);

//   const [activeCategory, setActiveCategory] = useState("All");
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     category: "Registration",
//     date: "",
//     description: "",
//     image: null,
//     status: "Active",
//   });

//   const categories = [
//     "All",
//     "Registration",
//     "Camp",
//     "Event",
//     "Public Notice",
//     "Campaign",
//     "Information",
//   ];

//   // Sort announcements: pinned first, then by date (newest first)
//   const sortedAnnouncements = [...announcements].sort((a, b) => {
//     if (a.isPinned !== b.isPinned) return b.isPinned - a.isPinned;
//     return new Date(b.date) - new Date(a.date);
//   });

//   const filteredAnnouncements = sortedAnnouncements.filter(
//     (ann) => activeCategory === "All" || ann.category === activeCategory,
//   );

//   const handleAddAnnouncement = (e) => {
//     e.preventDefault();
//     if (formData.title.trim() && formData.date) {
//       const newAnnouncement = {
//         id: announcements.length + 1,
//         ...formData,
//         image:
//           formData.image ||
//           "https://via.placeholder.com/400x250?text=Announcement",
//       };
//       setAnnouncements([newAnnouncement, ...announcements]);
//       setFormData({
//         title: "",
//         category: "Registration",
//         date: "",
//         description: "",
//         image: null,
//         status: "Active",
//       });
//       setShowAddModal(false);
//     }
//   };

//   const handleEditAnnouncement = (e) => {
//     e.preventDefault();
//     setAnnouncements(
//       announcements.map((ann) =>
//         ann.id === editingId ? { ...ann, ...formData } : ann,
//       ),
//     );
//     setShowEditModal(false);
//     setEditingId(null);
//     setFormData({
//       title: "",
//       category: "Registration",
//       date: "",
//       description: "",
//       image: null,
//       status: "Active",
//     });
//   };

//   const handleDeleteAnnouncement = (id) => {
//     setAnnouncements(announcements.filter((ann) => ann.id !== id));
//   };

//   const handlePinAnnouncement = (id) => {
//     setAnnouncements(
//       announcements.map((ann) =>
//         ann.id === id ? { ...ann, isPinned: !ann.isPinned } : ann,
//       ),
//     );
//   };

//   const openEditModal = (announcement) => {
//     setEditingId(announcement.id);
//     setFormData({
//       title: announcement.title,
//       category: announcement.category,
//       date: announcement.date,
//       description: announcement.description,
//       image: announcement.image,
//       status: announcement.status,
//     });
//     setShowEditModal(true);
//   };

//   return (
//     <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 sm:mb-16"
//         >
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <div
//               className="w-8 sm:w-10 h-1"
//               style={{ backgroundColor: "#E8541A" }}
//             />
//             <span
//               className="text-xs sm:text-sm font-semibold tracking-widest uppercase"
//               style={{ color: "#E8541A" }}
//             >
//               Latest Updates
//             </span>
//             <div
//               className="w-8 sm:w-10 h-1"
//               style={{ backgroundColor: "#E8541A" }}
//             />
//           </div>

//           <h2
//             className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
//             style={{ color: "#080F22", fontFamily: "Playfair Display, serif" }}
//           >
//             Announcements & Updates
//           </h2>

//           <p
//             className="max-w-2xl mx-auto text-base sm:text-lg"
//             style={{ color: "#6B7280", fontFamily: "Raleway, sans-serif" }}
//           >
//             Important announcements, registration drives, public notices,
//             upcoming activities and citizen information updates.
//           </p>
//         </motion.div>

//         {/* Admin Controls & Filters */}
//         <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-start sm:items-center mb-10">
//           {/* Category Filter - Scrollable on mobile */}
//           <div className="w-full sm:flex-1 overflow-x-auto">
//             <div className="flex gap-2 pb-2 min-w-max sm:min-w-0 flex-wrap sm:flex-nowrap">
//               {categories.map((category) => (
//                 <motion.button
//                   key={category}
//                   whileHover={{ scale: 1.02 }}
//                   onClick={() => setActiveCategory(category)}
//                   className="px-4 sm:px-5 py-2 rounded-[4px] font-medium text-sm sm:text-base whitespace-nowrap transition-all duration-300"
//                   style={{
//                     backgroundColor:
//                       activeCategory === category ? "#E8541A" : "#F3F4F6",
//                     color: activeCategory === category ? "white" : "#080F22",
//                     fontFamily: "Raleway, sans-serif",
//                   }}
//                 >
//                   {category}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Add Button */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => {
//               setEditingId(null);
//               setFormData({
//                 title: "",
//                 category: "Registration",
//                 date: "",
//                 description: "",
//                 image: null,
//                 status: "Active",
//               });
//               setShowAddModal(true);
//             }}
//             className="w-full sm:w-auto flex items-center gap-2 px-6 py-3 rounded-[4px] font-semibold text-white transition-all hover:shadow-lg whitespace-nowrap"
//             style={{ backgroundColor: "#E8541A" }}
//           >
//             <FiPlus size={20} />
//             Add Announcement
//           </motion.button>
//         </div>

//         {/* Announcements Grid */}
//         {filteredAnnouncements.length > 0 ? (
//           <motion.div
//             layout
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
//           >
//             <AnimatePresence>
//               {filteredAnnouncements.map((announcement, index) => (
//                 <motion.div
//                   key={announcement.id}
//                   layout
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -8 }}
//                   className="group rounded-[4px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
//                   style={{ borderTop: `4px solid #E8541A` }}
//                 >
//                   {/* Image Container */}
//                   <div className="relative overflow-hidden bg-gray-200 h-48 sm:h-56">
//                     <img
//                       src={announcement.image}
//                       alt={announcement.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                     />

//                     {/* Pin Badge */}
//                     {announcement.isPinned && (
//                       <div
//                         className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 rounded-[4px] text-white text-xs font-semibold"
//                         style={{ backgroundColor: "#E8541A" }}
//                       >
//                         <FiPin size={14} />
//                         Pinned
//                       </div>
//                     )}

//                     {/* Status Badge */}
//                     <div
//                       className="absolute top-3 right-3 px-3 py-1 rounded-[4px] text-white text-xs font-semibold"
//                       style={{
//                         backgroundColor:
//                           announcement.status === "Active"
//                             ? "#10B981"
//                             : "#9CA3AF",
//                       }}
//                     >
//                       {announcement.status}
//                     </div>
//                   </div>

//                   {/* Content Container */}
//                   <div className="p-4 sm:p-6 bg-white flex-1 flex flex-col">
//                     {/* Category Tag */}
//                     <div className="mb-2">
//                       <span
//                         className="text-xs sm:text-sm px-3 py-1 rounded-[4px] font-medium text-white inline-block"
//                         style={{ backgroundColor: "#E8541A", opacity: 0.8 }}
//                       >
//                         {announcement.category}
//                       </span>
//                     </div>

//                     {/* Date */}
//                     <div className="flex items-center gap-2 mb-3">
//                       <FiCalendar size={16} style={{ color: "#E8541A" }} />
//                       <p
//                         className="text-xs sm:text-sm font-medium"
//                         style={{ color: "#E8541A" }}
//                       >
//                         {new Date(announcement.date).toLocaleDateString(
//                           "en-IN",
//                           {
//                             year: "numeric",
//                             month: "short",
//                             day: "numeric",
//                           },
//                         )}
//                       </p>
//                     </div>

//                     {/* Title */}
//                     <h3
//                       className="text-base sm:text-lg font-bold mb-3 line-clamp-2"
//                       style={{
//                         color: "#080F22",
//                         fontFamily: "Playfair Display, serif",
//                       }}
//                     >
//                       {announcement.title}
//                     </h3>

//                     {/* Description */}
//                     <p
//                       className="text-sm sm:text-base mb-6 line-clamp-3 flex-1"
//                       style={{ color: "#6B7280" }}
//                     >
//                       {announcement.description}
//                     </p>

//                     {/* Button & Actions */}
//                     <div className="space-y-3 pt-4 border-t border-gray-200">
//                       <button
//                         className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-[4px] font-semibold text-white transition-all hover:shadow-md text-sm sm:text-base"
//                         style={{ backgroundColor: "#E8541A" }}
//                       >
//                         Read More
//                         <FiArrowRight size={16} />
//                       </button>

//                       {/* Admin Actions */}
//                       <div className="flex gap-2">
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => openEditModal(announcement)}
//                           className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-[4px] font-medium text-sm transition-all"
//                           style={{
//                             backgroundColor: "#F3F4F6",
//                             color: "#080F22",
//                           }}
//                           title="Edit"
//                         >
//                           <FiEdit2 size={16} />
//                           <span className="hidden sm:inline">Edit</span>
//                         </motion.button>

//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() => handlePinAnnouncement(announcement.id)}
//                           className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-[4px] font-medium text-sm transition-all"
//                           style={{
//                             backgroundColor: announcement.isPinned
//                               ? "#E8541A"
//                               : "#F3F4F6",
//                             color: announcement.isPinned ? "white" : "#080F22",
//                           }}
//                           title="Toggle Pin"
//                         >
//                           <FiPin size={16} />
//                           <span className="hidden sm:inline">Pin</span>
//                         </motion.button>

//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           onClick={() =>
//                             handleDeleteAnnouncement(announcement.id)
//                           }
//                           className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-[4px] font-medium text-sm text-white transition-all"
//                           style={{ backgroundColor: "#EF4444" }}
//                           title="Delete"
//                         >
//                           <FiTrash2 size={16} />
//                           <span className="hidden sm:inline">Delete</span>
//                         </motion.button>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         ) : (
//           <div className="text-center py-16">
//             <p style={{ color: "#6B7280" }} className="text-lg">
//               No announcements found in this category.
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Add/Edit Modal */}
//       <AnimatePresence>
//         {(showAddModal || showEditModal) && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
//             onClick={() => {
//               setShowAddModal(false);
//               setShowEditModal(false);
//             }}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-white rounded-[4px] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
//             >
//               {/* Modal Header */}
//               <div
//                 className="flex items-center justify-between p-6 border-b sticky top-0 bg-white"
//                 style={{ borderColor: "#E5E7EB" }}
//               >
//                 <h2
//                   className="text-2xl font-bold"
//                   style={{
//                     color: "#080F22",
//                     fontFamily: "Playfair Display, serif",
//                   }}
//                 >
//                   {showEditModal ? "Edit Announcement" : "Add Announcement"}
//                 </h2>
//                 <button
//                   onClick={() => {
//                     setShowAddModal(false);
//                     setShowEditModal(false);
//                   }}
//                   className="p-1 hover:bg-gray-100 rounded-[4px] transition-colors"
//                 >
//                   <FiX size={24} style={{ color: "#080F22" }} />
//                 </button>
//               </div>

//               {/* Modal Form */}
//               <form
//                 onSubmit={
//                   showEditModal ? handleEditAnnouncement : handleAddAnnouncement
//                 }
//                 className="p-6 space-y-5"
//               >
//                 {/* Title */}
//                 <div>
//                   <label
//                     className="block text-sm font-semibold mb-2"
//                     style={{ color: "#080F22" }}
//                   >
//                     Announcement Title *
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     placeholder="Enter announcement title"
//                     value={formData.title}
//                     onChange={(e) =>
//                       setFormData({ ...formData, title: e.target.value })
//                     }
//                     className="w-full px-4 py-2 rounded-[4px] border-2 focus:outline-none transition-all text-sm sm:text-base"
//                     style={{ borderColor: "#E5E7EB", color: "#080F22" }}
//                   />
//                 </div>

//                 {/* Two Column Row */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {/* Category */}
//                   <div>
//                     <label
//                       className="block text-sm font-semibold mb-2"
//                       style={{ color: "#080F22" }}
//                     >
//                       Category *
//                     </label>
//                     <select
//                       value={formData.category}
//                       onChange={(e) =>
//                         setFormData({ ...formData, category: e.target.value })
//                       }
//                       className="w-full px-4 py-2 rounded-[4px] border-2 focus:outline-none transition-all text-sm"
//                       style={{ borderColor: "#E5E7EB", color: "#080F22" }}
//                     >
//                       <option value="Registration">Registration</option>
//                       <option value="Camp">Camp</option>
//                       <option value="Event">Event</option>
//                       <option value="Public Notice">Public Notice</option>
//                       <option value="Campaign">Campaign</option>
//                       <option value="Information">Information</option>
//                     </select>
//                   </div>

//                   {/* Date */}
//                   <div>
//                     <label
//                       className="block text-sm font-semibold mb-2"
//                       style={{ color: "#080F22" }}
//                     >
//                       Publish Date *
//                     </label>
//                     <input
//                       type="date"
//                       required
//                       value={formData.date}
//                       onChange={(e) =>
//                         setFormData({ ...formData, date: e.target.value })
//                       }
//                       className="w-full px-4 py-2 rounded-[4px] border-2 focus:outline-none transition-all text-sm"
//                       style={{ borderColor: "#E5E7EB", color: "#080F22" }}
//                     />
//                   </div>
//                 </div>

//                 {/* Status */}
//                 <div>
//                   <label
//                     className="block text-sm font-semibold mb-2"
//                     style={{ color: "#080F22" }}
//                   >
//                     Status *
//                   </label>
//                   <div className="flex gap-4">
//                     <label className="flex items-center gap-2">
//                       <input
//                         type="radio"
//                         name="status"
//                         value="Active"
//                         checked={formData.status === "Active"}
//                         onChange={(e) =>
//                           setFormData({ ...formData, status: e.target.value })
//                         }
//                         className="w-4 h-4"
//                       />
//                       <span style={{ color: "#080F22" }}>Active</span>
//                     </label>
//                     <label className="flex items-center gap-2">
//                       <input
//                         type="radio"
//                         name="status"
//                         value="Expired"
//                         checked={formData.status === "Expired"}
//                         onChange={(e) =>
//                           setFormData({ ...formData, status: e.target.value })
//                         }
//                         className="w-4 h-4"
//                       />
//                       <span style={{ color: "#080F22" }}>Expired</span>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <div>
//                   <label
//                     className="block text-sm font-semibold mb-2"
//                     style={{ color: "#080F22" }}
//                   >
//                     Description *
//                   </label>
//                   <textarea
//                     required
//                     placeholder="Enter announcement description (2-3 lines recommended)"
//                     value={formData.description}
//                     onChange={(e) =>
//                       setFormData({ ...formData, description: e.target.value })
//                     }
//                     rows="4"
//                     className="w-full px-4 py-2 rounded-[4px] border-2 focus:outline-none transition-all resize-none text-sm"
//                     style={{ borderColor: "#E5E7EB", color: "#080F22" }}
//                   />
//                 </div>

//                 {/* Image Upload */}
//                 <div>
//                   <label
//                     className="block text-sm font-semibold mb-2"
//                     style={{ color: "#080F22" }}
//                   >
//                     Upload Poster/Image *
//                   </label>
//                   <input
//                     type="file"
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         image: e.target.files[0]?.name || formData.image,
//                       })
//                     }
//                     className="w-full px-4 py-2 rounded-[4px] border-2 focus:outline-none text-sm"
//                     style={{ borderColor: "#E5E7EB", color: "#080F22" }}
//                     accept="image/*"
//                   />
//                   <p className="text-xs mt-2" style={{ color: "#6B7280" }}>
//                     Recommended size: 400x250px | Supported: JPG, PNG, WebP
//                   </p>
//                 </div>

//                 {/* Form Buttons */}
//                 <div
//                   className="flex gap-3 pt-6 border-t"
//                   style={{ borderColor: "#E5E7EB" }}
//                 >
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setShowAddModal(false);
//                       setShowEditModal(false);
//                     }}
//                     className="flex-1 px-4 py-3 rounded-[4px] font-semibold border-2 transition-all text-sm"
//                     style={{ borderColor: "#080F22", color: "#080F22" }}
//                   >
//                     Cancel
//                   </button>
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     type="submit"
//                     className="flex-1 px-4 py-3 rounded-[4px] font-semibold text-white transition-all text-sm"
//                     style={{ backgroundColor: "#E8541A" }}
//                   >
//                     {showEditModal ? "Update Announcement" : "Add Announcement"}
//                   </motion.button>
//                 </div>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default AnnouncementsUpdates;


import React from 'react'

function Announcements() {
  return (
    <div>Announcements</div>
  )
}

export default Announcements