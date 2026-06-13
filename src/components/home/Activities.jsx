// import { useState } from "react";

// const events = [
//   {
//     id: 1,
//     title: "Hon'ble Minister inaugurated and dedicated several key development projects undertaken by AMC and AUDA in Ahmedabad, aimed at enhancing urban infrastructure, improving public amenities, and promoting sustainable growth across the city.",
//     date: "Sep 30, 2023",
//     image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80",
//     link: "#",
//     tag: "Inauguration",
//   },
//   {
//     id: 2,
//     title: "Hon'ble Minister inaugurated and dedicated several key development projects undertaken by AMC and AUDA in Ahmedabad, aimed at enhancing urban infrastructure, improving public amenities, and promoting sustainable growth across the city.",
//     date: "Sep 30, 2023",
//     image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=500&q=80",
//     link: "#",
//     tag: "Development",
//   },
//   {
//     id: 3,
//     title: "HM chairs high-level meeting on internal security preparedness",
//     date: "Oct 05, 2023",
//     image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=500&q=80",
//     link: "#",
//     tag: "Security",
//   },
//   {
//     id: 4,
//     title: "HM addresses National Conference on Cooperative Movement",
//     date: "Oct 12, 2023",
//     image: "https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=500&q=80",
//     link: "#",
//     tag: "Conference",
//   },
//   {
//     id: 5,
//     title: "HM chairs high-level meeting on internal security preparedness",
//     date: "Oct 05, 2023",
//     image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=500&q=80",
//     link: "#",
//     tag: "Security",
//   },
// ];

// // #fc8814 = primary orange | #e8e7e6 = light grey | #FFFFFF = white
// const tagColors = {
//   Inauguration: "bg-[#fc8814] text-white",
//   Development:  "bg-[#1a1a1a] text-white",
//   Security:     "bg-[#444444] text-white",
//   Conference:   "bg-[#444444] text-white",
// };

// export default function EventsSection() {
//   const [active, setActive] = useState(null);

//   return (
//     <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#FFFFFF]">
//       <div className="max-w-7xl mx-auto">

//         {/* ── Header ── */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
//           <div>
//             <p className="text-[#1a1a1a]/50 text-xs font-bold uppercase tracking-[0.3em] mb-2 flex items-center gap-3">
//               <span className="w-8 h-px bg-[#fc8814] inline-block" />
//               What's Happening
//             </p>
//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1a1a1a] leading-none">
//              Activities  &amp; <span className="italic text-[#fc8814]"> Impact</span>
//             </h2>
//           </div>

//           <div className="flex items-center gap-3 self-start sm:self-auto flex-shrink-0">
//             <a
//               href="#"
//               className="text-[#1a1a1a]/60 hover:text-[#1a1a1a] text-xs sm:text-sm font-bold uppercase
//                 tracking-widest transition-colors duration-200 flex items-center gap-1.5 group"
//             >
//               View All
//               <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform"
//                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </a>
//             <span className="w-px h-4 bg-[#e8e7e6]" />
//             <button className="bg-[#fc8814] hover:bg-[#e07710] text-white text-[10px] sm:text-xs
//               font-black uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded-full
//               shadow-md transition-all duration-200 flex items-center gap-2">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
//               </span>
//               Watch Live
//             </button>
//           </div>
//         </div>

//         {/* ── Main Grid ── */}
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px] gap-4 sm:gap-5">

//           {/* ── Event Cards ── */}
//           <div className="flex flex-col gap-3 sm:gap-4">
//             {events.slice(0, 2).map((event, i) => (
//               <EventCard
//                 key={event.id}
//                 event={event}
//                 isActive={active === i}
//                 onEnter={() => setActive(i)}
//                 onLeave={() => setActive(null)}
//               />
//             ))}
//           </div>

//           {/* ── Live Panel ── */}
//           <LivePanel />
//         </div>

//         {/* ── Upcoming strip ── */}
//         <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#e8e7e6]">
//           <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
//             <span className="bg-[#1a1a1a] text-white text-[13px] sm:text-[14px] font-black uppercase
//               tracking-widest px-3 py-1.5 rounded-full flex-shrink-0 w-fit">
//               Upcoming
//             </span>
//             <div className="flex items-start sm:items-center gap-4 sm:gap-6 overflow-x-auto pb-2 sm:pb-0">
//               {events.slice(2).map((e) => (
//                 <a
//                   key={e.id}
//                   href={e.link}
//                   className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group"
//                 >
//                   <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0
//                     ring-2 ring-[#e8e7e6] group-hover:ring-[#fc8814]/50 transition-all">
//                     <img src={e.image} alt="" className="w-full h-full object-cover" />
//                   </div>
//                   <div className="max-w-[160px] sm:max-w-[200px]">
//                     <p className="text-[#1a1a1a]/70 group-hover:text-[#fc8814] text-xs sm:text-sm
//                       font-semibold leading-snug transition-colors line-clamp-2">
//                       {e.title}
//                     </p>
//                     <p className="text-[#1a1a1a]/40 text-[10px] sm:text-[11px] mt-0.5">{e.date}</p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// function EventCard({ event, isActive, onEnter, onLeave }) {
//   const tag = tagColors[event.tag] || "bg-[#444444] text-white";

//   return (
//     <a
//       href={event.link}
//       onMouseEnter={onEnter}
//       onMouseLeave={onLeave}
//       className={`group flex overflow-hidden rounded-2xl bg-[#FFFFFF] transition-all duration-300
//         cursor-pointer border border-[#e8e7e6]
//         ${isActive
//           ? "shadow-xl shadow-[#fc8814]/15 -translate-y-0.5 border-[#fc8814]/30"
//           : "hover:shadow-lg hover:shadow-[#fc8814]/10 hover:border-[#fc8814]/20"
//         }`}
//     >
//       {/* Thumbnail */}
//       <div className="relative w-[120px] xs:w-[150px] sm:w-[200px] md:w-[220px] flex-shrink-0 overflow-hidden"
//         style={{ minHeight: 160 }}>
//         <img
//           src={event.image}
//           alt={event.title}
//           className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500
//             ${isActive ? "scale-110" : "scale-100"}`}
//         />
//         {/* Subtle orange tint on hover */}
//         <div className={`absolute inset-0 bg-[#fc8814] transition-opacity duration-300
//           ${isActive ? "opacity-10" : "opacity-0"}`} />
//         <span className={`absolute top-2 left-2 sm:top-3 sm:left-3 text-[9px] sm:text-[10px]
//           font-black uppercase tracking-wider px-2 py-0.5 sm:py-1 rounded-full ${tag}`}>
//           {event.tag}
//         </span>
//       </div>

//       {/* Text */}
//       <div className="flex flex-col justify-between p-3 sm:p-4 md:p-5 min-w-0 flex-1 bg-[#FFFFFF]">
//         <p className={`font-bold text-sm sm:text-base leading-snug transition-colors duration-200
//           line-clamp-3 sm:line-clamp-4
//           ${isActive ? "text-[#fc8814]" : "text-[#1a1a1a] group-hover:text-[#fc8814]"}`}>
//           {event.title}
//         </p>

//         <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#e8e7e6]">
//           <div className="flex items-center gap-1 sm:gap-1.5 text-[#1a1a1a]/40 text-[10px] sm:text-xs">
//             <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24"
//               stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round"
//                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//             <span className="hidden xs:inline">{event.date}</span>
//             <span className="xs:hidden">{event.date.split(",")[0]}</span>
//           </div>

//           <div className="flex items-center gap-1.5 sm:gap-2">
//             {/* Share */}
//             <button
//               onClick={(e) => e.preventDefault()}
//               className="hidden xs:flex w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#e8e7e6]
//                 hover:border-[#fc8814] items-center justify-center text-[#1a1a1a]/30
//                 hover:text-[#fc8814] transition-all duration-200"
//             >
//               <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24"
//                 stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round"
//                   d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//               </svg>
//             </button>
//             {/* Arrow */}
//             <span className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center
//               transition-all duration-200
//               ${isActive ? "bg-[#fc8814]" : "bg-[#e8e7e6] group-hover:bg-[#fc8814]"}`}>
//               <svg
//                 className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-colors duration-200
//                   ${isActive ? "text-white" : "text-[#1a1a1a]/50 group-hover:text-white"}`}
//                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//               </svg>
//             </span>
//           </div>
//         </div>
//       </div>
//     </a>
//   );
// }

// function LivePanel() {
//   return (
//     <div className="relative rounded-2xl overflow-hidden flex flex-col min-h-[260px] sm:min-h-[300px] lg:min-h-0
//       shadow-xl shadow-[#fc8814]/20 border border-[#fc8814]/20">

//       {/* BG image */}
//       <img
//         src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       {/* Gradient overlay — orange tinted for brand consistency */}
//       <div className="absolute inset-0"
//         style={{ background: "linear-gradient(to top, rgba(26,26,26,0.92) 0%, rgba(252,136,20,0.25) 60%, rgba(26,26,26,0.3) 100%)" }} />
//       {/* Top orange accent line */}
//       <div className="absolute top-0 left-0 right-0 h-1 bg-[#fc8814]" />

//       {/* Content */}
//       <div className="relative z-10 p-5 sm:p-6 md:p-7 flex flex-col flex-1 justify-between">
//         <div className="flex flex-col gap-3 sm:gap-4">

//           {/* Live badge */}
//           <div className="flex w-fit items-center gap-2 border border-[#fc8814]/60
//             bg-[#fc8814]/10 rounded-full px-3 py-1.5">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fc8814] opacity-75" />
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fc8814]" />
//             </span>
//             <span className="text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
//               Live Streaming
//             </span>
//           </div>

//           <p className="text-white/70 text-sm sm:text-base">
//             Check this space for live coverage of programs
//           </p>

//           <div>
//             <p className="text-white/80 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold mb-1">
//               Hon. Minister of Home &amp; Cooperation
//             </p>
//             <h3 className="text-white font-black text-3xl sm:text-4xl leading-tight">
//               Shri <span className="text-[#fc8814]">Amit Shah</span>
//             </h3>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-6 sm:mt-8 flex items-center justify-between pt-4 border-t border-white/10">
//           <div className="flex items-center gap-2">
//             <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#fc8814] animate-pulse" />
//             <span className="text-[#fc8814] text-[10px] sm:text-xs font-bold uppercase tracking-widest">
//               Live Soon
//             </span>
//           </div>
//           <button className="bg-[#fc8814] hover:bg-[#e07710] text-white text-[10px] sm:text-xs
//             font-bold uppercase tracking-wider px-4 sm:px-5 py-2 sm:py-2.5 rounded-full
//             transition-colors duration-200 flex items-center gap-1.5 sm:gap-2 shadow-lg">
//             <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24"
//               stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round"
//                 d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//             </svg>
//             Notify Me
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MapPin,
  Users,
  Calendar,
  ArrowRight,
  Play,
} from "lucide-react";

function Activities() {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activitiesData = [
    {
      id: 1,
      title: "Youth Leadership Summit 2024",
      shortDescription: "Empowering young leaders through mentorship and development programs.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
      date: "15 June 2024",
      location: "New Delhi",
      attendees: 2500,
      fullDescription:
        "The Youth Leadership Summit brought together over 2,500 young leaders, entrepreneurs, and innovators from across the country. Through interactive workshops, keynote addresses, and networking sessions, participants gained insights into leadership, civic responsibility, and nation-building.",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80",
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
      ],
      videos: [
        { title: "Opening Ceremony", thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80" },
        { title: "Panel Discussion", thumbnail: "https://images.unsplash.com/photo-1559027615-cd0628902d4a?w=400&q=80" },
      ],
      highlights: [
        "Interactive mentorship sessions",
        "Skill development workshops",
        "Networking opportunities",
        "Live demonstrations",
        "Cultural performances",
        "Awards ceremony",
      ],
    },
    {
      id: 2,
      title: "Community Healthcare Drive",
      shortDescription: "Free medical camps and health awareness in rural communities.",
      image: "https://images.unsplash.com/photo-1579154204601-01d82b3f2ed1?w=600&q=80",
      date: "22 June 2024",
      location: "Uttar Pradesh",
      attendees: 1850,
      fullDescription:
        "Mobile health clinics visited 15 villages providing free medical consultations, health screenings, and awareness programs. Over 1,850 citizens received healthcare services including vaccinations, diabetes screening, and blood pressure checks.",
      images: [
        "https://images.unsplash.com/photo-1579154204601-01d82b3f2ed1?w=800&q=80",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      ],
      videos: [
        { title: "Healthcare Initiative", thumbnail: "https://images.unsplash.com/photo-1631217314830-4e5b85b80c69?w=400&q=80" },
      ],
      highlights: [
        "Free medical consultations",
        "Health screening camps",
        "Vaccination drives",
        "Health awareness seminars",
        "Disease prevention programs",
        "Follow-up care",
      ],
    },
    {
      id: 3,
      title: "Education & Skill Development",
      shortDescription: "Training programs for unemployed youth across 12 districts.",
      image: "https://images.unsplash.com/photo-1427504494785-cdcd02d457a0?w=600&q=80",
      date: "28 June 2024",
      location: "Gujarat",
      attendees: 3200,
      fullDescription:
        "Comprehensive skill development initiative reaching 3,200 youth across 12 districts. Programs cover IT skills, digital marketing, trades, and entrepreneurship with 85% employment placement rate.",
      images: [
        "https://images.unsplash.com/photo-1427504494785-cdcd02d457a0?w=800&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      ],
      videos: [
        { title: "Skill Training Program", thumbnail: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&q=80" },
        { title: "Student Testimonials", thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80" },
      ],
      highlights: [
        "Vocational training",
        "IT skill courses",
        "Entrepreneurship guidance",
        "Job placement assistance",
        "Career counseling",
        "Certification programs",
      ],
    },
    {
      id: 4,
      title: "Environmental Conservation Drive",
      shortDescription: "Tree plantation and waste management initiative in urban areas.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
      date: "05 July 2024",
      location: "Maharashtra",
      attendees: 1200,
      fullDescription:
        "Large-scale environmental initiative including planting of 50,000 trees, awareness on waste management, and community participation in maintaining green spaces across 8 major cities.",
      images: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
        "https://images.unsplash.com/photo-1559027615-cd0628902d4a?w=800&q=80",
      ],
      videos: [
        { title: "Tree Plantation Drive", thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80" },
      ],
      highlights: [
        "Tree plantation",
        "Waste segregation training",
        "Recycling programs",
        "Citizen awareness",
        "Green space maintenance",
        "Environmental education",
      ],
    },
    {
      id: 5,
      title: "Women Empowerment Program",
      shortDescription: "Self-help groups and entrepreneurship training for rural women.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
      date: "12 July 2024",
      location: "Madhya Pradesh",
      attendees: 2100,
      fullDescription:
        "Empowering 2,100 women through skill training, entrepreneurship programs, and financial literacy. Success rate of 78% in establishing self-help groups and micro-enterprises.",
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      ],
      videos: [
        { title: "Women Entrepreneurs", thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80" },
        { title: "Success Stories", thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80" },
      ],
      highlights: [
        "Skill training",
        "Business planning",
        "Financial literacy",
        "Self-help groups",
        "Micro-enterprise support",
        "Market linkage",
      ],
    },
    {
      id: 6,
      title: "Infrastructure Development Project",
      shortDescription: "Road construction and smart city initiative in rural regions.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=600&q=80",
      date: "18 July 2024",
      location: "Rajasthan",
      attendees: 800,
      fullDescription:
        "Major infrastructure development project covering 250 km of road construction, water supply systems, and smart city initiatives benefiting 45 villages with modern amenities.",
      images: [
        "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=800&q=80",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      ],
      videos: [
        { title: "Infrastructure Progress", thumbnail: "https://images.unsplash.com/photo-1581578731548-c64695c952952?w=400&q=80" },
      ],
      highlights: [
        "Road construction",
        "Water supply systems",
        "Smart city implementation",
        "Electricity infrastructure",
        "Digital connectivity",
        "Public facilities",
      ],
    },
  ];

  return (
    <>
      <section className="relative py-20 md:py-28 bg-[#FFFFFF] overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FC8814]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FC8814]/6 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14 md:mb-20"
          >
            <span
              className="inline-block uppercase tracking-[0.3em] text-[#FC8814] text-[0.65rem] md:text-[0.7rem] font-black px-4 py-2 bg-[#FC8814]/10 rounded-lg border border-[#FC8814]/20"
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              Community Initiatives
            </span>

            <h2
              className="mt-4 md:mt-6 text-3xl md:text-4xl lg:text-5xl text-[#333333] leading-tight font-black"
              style={{ fontFamily: "'Playfair Display',serif" }}
            >
              Activities & <em className="text-[#FC8814] not-italic italic">Impact</em>
            </h2>

            <p
              className="mt-4 md:mt-5 text-[#666666] max-w-3xl mx-auto text-sm md:text-base leading-7"
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              A glimpse of community initiatives, public outreach programs, and citizen-focused activities aimed at creating meaningful change.
            </p>
          </motion.div>

          {/* Activities Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8"
          >
            {activitiesData.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedActivity(activity)}
                className="group cursor-pointer bg-[#FFFFFF] border border-[#E8E7E6] rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-xl hover:border-[#FC8814]/40 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-56 md:h-64 overflow-hidden bg-[#E8E7E6]">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 text-[#FFFFFF] font-black text-[0.7rem] tracking-wider uppercase"
                      style={{ fontFamily: "Raleway,sans-serif" }}
                    >
                      <Play size={12} fill="white" />
                      View Details
                    </motion.div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-[#FC8814] text-[#FFFFFF] px-3 py-1.5 rounded-lg font-black text-[0.6rem] tracking-wider uppercase" style={{ fontFamily: "Raleway,sans-serif" }}>
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 lg:p-7">
                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 mb-3 text-[0.65rem] md:text-[0.7rem] text-[#999999]" style={{ fontFamily: "Raleway,sans-serif" }}>
                    <div className="flex items-center gap-1">
                      <Calendar size={12} className="text-[#FC8814]" />
                      {activity.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="text-[#FC8814]" />
                      {activity.location}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg md:text-xl text-[#333333] font-black leading-snug mb-2 group-hover:text-[#FC8814] transition-colors duration-200"
                    style={{ fontFamily: "'Playfair Display',serif" }}
                  >
                    {activity.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[#666666] text-sm md:text-base leading-6 line-clamp-2 mb-4"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    {activity.shortDescription}
                  </p>

                  {/* Attendees */}
                  <div className="flex items-center gap-2 text-[0.7rem] text-[#999999] pb-4 border-b border-[#E8E7E6]" style={{ fontFamily: "Raleway,sans-serif" }}>
                    <Users size={14} className="text-[#FC8814]" />
                    {activity.attendees.toLocaleString()} participants
                  </div>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-2 text-[#FC8814] font-black text-[0.7rem] tracking-wider uppercase group-hover:translate-x-1 transition-transform duration-200" style={{ fontFamily: "Raleway,sans-serif" }}>
                    See Full Activity
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedActivity && (
          <ActivityDetailModal
            activity={selectedActivity}
            onClose={() => setSelectedActivity(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function ActivityDetailModal({ activity, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-[#1A1A1A]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FFFFFF] rounded-2xl md:rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="absolute top-4 right-4 bg-[#FC8814] hover:bg-[#E8741F] text-[#FFFFFF] p-2 rounded-lg transition-all"
          >
            <X size={24} strokeWidth={2.5} />
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 lg:p-10">
          {/* Title & Meta */}
          <h1
            className="text-2xl md:text-3xl lg:text-4xl text-[#333333] font-black mb-4"
            style={{ fontFamily: "'Playfair Display',serif" }}
          >
            {activity.title}
          </h1>

          <div className="flex flex-wrap gap-6 mb-8 text-sm md:text-base text-[#666666]" style={{ fontFamily: "Raleway,sans-serif" }}>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-[#FC8814]" />
              {activity.date}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#FC8814]" />
              {activity.location}
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-[#FC8814]" />
              {activity.attendees.toLocaleString()} participants
            </div>
          </div>

          {/* Description */}
          <p
            className="text-base md:text-lg text-[#666666] leading-8 mb-8"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            {activity.fullDescription}
          </p>

          {/* Gallery */}
          {activity.images.length > 0 && (
            <div className="mb-8">
              <h2
                className="text-xl md:text-2xl text-[#333333] font-black mb-4"
                style={{ fontFamily: "'Playfair Display',serif" }}
              >
                Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {activity.images.map((img, idx) => (
                  <motion.img
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="rounded-lg h-48 md:h-56 object-cover cursor-pointer hover:shadow-lg transition-all"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Videos */}
          {activity.videos.length > 0 && (
            <div className="mb-8">
              <h2
                className="text-xl md:text-2xl text-[#333333] font-black mb-4"
                style={{ fontFamily: "'Playfair Display',serif" }}
              >
                Videos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activity.videos.map((video, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="relative cursor-pointer rounded-lg overflow-hidden group"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#1A1A1A]/40 group-hover:bg-[#1A1A1A]/60 transition-colors flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="bg-[#FC8814] text-[#FFFFFF] p-3 rounded-full"
                      >
                        <Play size={24} fill="white" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-[#FC8814] text-[#FFFFFF] px-3 py-1 rounded text-[0.7rem] font-black">
                      {video.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          {activity.highlights.length > 0 && (
            <div>
              <h2
                className="text-xl md:text-2xl text-[#333333] font-black mb-4"
                style={{ fontFamily: "'Playfair Display',serif" }}
              >
                Key Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activity.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-[#FC8814]/10 border border-[#FC8814]/20 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#FC8814] flex-shrink-0" />
                    <span
                      className="text-sm md:text-base text-[#666666] font-bold"
                      style={{ fontFamily: "Raleway,sans-serif" }}
                    >
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Activities;