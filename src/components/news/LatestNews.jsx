import React, { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Youth Empowerment Initiative Reaches New Milestone in Delhi",
    date: "June 12, 2026",
    category: "Initiative",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    description:
      "A landmark youth empowerment program has reached significant milestones across Delhi, providing skill development and career opportunities to over 50,000 young citizens.",
    fullContent:
      "Through strategic partnerships with educational institutions and private sector organizations, the youth empowerment initiative has established training centers in 15 districts across Delhi. The program provides comprehensive skill development in areas such as IT, digital marketing, sustainable agriculture, and traditional crafts. Participants have reported 85% employment within 6 months of completing the program. Government officials announced plans to expand the initiative to 25 additional districts by end of this year, with a total investment of ₹500 crores dedicated to infrastructure and training resources.",
  },
  {
    id: 2,
    title: "Public Interaction Program Conducted Successfully Across NCR",
    date: "June 10, 2026",
    category: "Community",
    image:
      "https://www.pexels.com/photo/group-of-tourists-among-monuments-18414618/",
    description:
      "Community leaders held extensive town halls and public forums to gather feedback on local governance and development priorities from residents across NCR region.",
    fullContent:
      "The public interaction program, held across 12 locations in the NCR region, brought together over 15,000 citizens to discuss critical issues including infrastructure development, healthcare access, education quality, and environmental sustainability. Direct feedback from residents has been documented and will inform policy decisions for the next fiscal year. Key concerns raised include traffic management, water supply reliability, and primary school infrastructure improvements. Sessions were conducted in Hindi and English to ensure maximum participation and representation.",
  },
  {
    id: 3,
    title: "Infrastructure Development Projects Announced for 2026-27",
    date: "June 08, 2026",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695c952952?q=80&w=1600&auto=format&fit=crop",
    description:
      "Major infrastructure development projects worth ₹15,000 crores announced focusing on road networks, metro expansion, and public transportation across the region.",
    fullContent:
      "The government announced ambitious infrastructure plans including 250 km of new road construction, metro line extension in 3 major corridors, and modernization of 45 bus terminals. Smart city initiatives will be implemented with IoT-based traffic management systems and digital governance platforms. Project implementation will begin in July 2026 with expected completion within 24 months. Employment generation is estimated at 40,000 jobs across construction and technology sectors, with preference given to local youth.",
  },
  {
    id: 4,
    title: "National Conference Scheduled For Next Month",
    date: "June 05, 2026",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    description:
      "National conference on sustainable development and governance reforms scheduled to bring together policy makers, administrators, and citizen leaders.",
    fullContent:
      "The National Conference on Sustainable Development will be held in New Delhi from July 15-18, 2026. The three-day event will feature keynote addresses from national leaders, interactive panel discussions on healthcare, education, agriculture, and environmental protection. Over 2,000 delegates from across India are expected to participate, including government officials, NGO representatives, academic experts, and community activists. Registration is open for all interested citizens.",
  },
  {
    id: 5,
    title: "Healthcare Access Program Expands to Rural Areas",
    date: "June 03, 2026",
    category: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1579154204601-01d82b3f2ed1?q=80&w=1600&auto=format&fit=crop",
    description:
      "New mobile health clinics launched to provide primary healthcare services in 200 villages across Uttar Pradesh and Haryana.",
    fullContent:
      "The healthcare expansion program will deploy 50 mobile medical units equipped with diagnostic facilities to underserved rural areas. Free health camps, vaccination drives, and preventive care awareness programs will be conducted weekly in target villages. Government aims to reduce healthcare disparities between urban and rural regions by 60% within 18 months. Special focus on maternal health, child nutrition, and communicable disease prevention.",
  },
  {
    id: 6,
    title: "Education Reform Initiatives Launched in 500 Schools",
    date: "May 30, 2026",
    category: "Education",
    image:
      "https://www.pexels.com/photo/children-reading-in-brazilian-community-library-32218711/",
    description:
      "Comprehensive education reform program focusing on curriculum modernization and teacher training initiatives across state schools.",
    fullContent:
      "500 government schools have been selected for a pilot program introducing updated STEM curriculum, digital learning platforms, and teacher professional development workshops. Focus areas include problem-solving skills, critical thinking, and environmental awareness. Investment of ₹500 crores allocated for infrastructure upgrades and technology integration. Teachers will receive monthly training sessions and digital resources to enhance teaching methodologies.",
  },
];

export default function LatestNews() {
  const [selectedNews, setSelectedNews] = useState(newsData[0]);

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            <span
              className="uppercase tracking-[0.3em] text-[#FC8814] text-[0.65rem] md:text-[0.7rem] font-black"
              style={{ fontFamily: "Raleway,sans-serif" }}
            >
              Latest Updates
            </span>

            <h2
              className="mt-3 md:mt-4 text-3xl md:text-4xl lg:text-5xl text-[#333333] leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              News From The{" "}
              <em className="text-[#FC8814] not-italic italic">Ground</em>
            </h2>
          </div>

          
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Featured News - Left Side */}
          <motion.div
            key={selectedNews.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 group"
          >
            <div className="overflow-hidden rounded-2xl md:rounded-3xl bg-[#FFFFFF] border border-[#E8E7E6] shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              {/* Featured Image */}
              <div className="overflow-hidden h-[280px] md:h-[380px] lg:h-[420px]">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Featured Content */}
              <div className="p-6 md:p-8 lg:p-10 flex-grow flex flex-col">
                {/* Category Badge */}
                <motion.span
                  className="bg-[#FC8814] text-[#FFFFFF] px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[0.6rem] md:text-[0.7rem] font-black tracking-[0.08em] uppercase w-fit"
                  style={{ fontFamily: "Raleway,sans-serif" }}
                  whileHover={{ scale: 1.05 }}
                >
                  {selectedNews.category}
                </motion.span>

                {/* Date */}
                <div className="flex items-center gap-2 md:gap-3 text-[#FC8814] mt-4 md:mt-6">
                  <CalendarDays size={16} strokeWidth={2} />
                  <span
                    className="text-[0.7rem] md:text-[0.8rem] font-bold tracking-wide uppercase"
                    style={{ fontFamily: "Raleway,sans-serif" }}
                  >
                    {selectedNews.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="mt-4 md:mt-6 text-2xl md:text-3xl lg:text-4xl text-[#333333] leading-tight"
                  style={{ fontFamily: "'Playfair Display',serif" }}
                >
                  {selectedNews.title}
                </h3>

                {/* Content */}
                <p
                  className="mt-4 md:mt-6 text-[#666666] leading-7 md:leading-8 flex-grow text-sm md:text-base"
                style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {selectedNews.fullContent}
                </p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 md:mt-8 bg-[#FC8814] hover:bg-[#E8741F] text-[#FFFFFF] px-6 md:px-8 py-3 md:py-4  font-black text-[0.7rem] md:text-[0.75rem] tracking-[0.08em] uppercase flex items-center gap-2 md:gap-3 transition-all duration-200 w-fit shadow-md hover:shadow-lg"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Read Full Story
                  <ArrowRight size={16} strokeWidth={2.5} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Side News Tabs - Right Side */}
          <div className="space-y-3 md:space-y-4 max-h-[600px] md:max-h-[900px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#E8E7E6] scrollbar-track-transparent">
            {newsData.map((news, index) => (
              <motion.button
                key={news.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setSelectedNews(news)}
                className={`w-full group text-left overflow-hidden rounded-xl md:rounded-2xl transition-all duration-300 ${
                  selectedNews.id === news.id
                    ? "bg-[#FC8814]/8 border-2 border-[#FC8814] shadow-md"
                    : "bg-[#FFFFFF] border border-[#E8E7E6] hover:shadow-md hover:border-[#FC8814]/30"
                }`}
              >
                <div className="flex">
                  {/* News Image */}
                  <div className="w-28 md:w-32 h-28 md:h-32 overflow-hidden flex-shrink-0">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* News Content */}
                  <div className="p-3 md:p-4 flex flex-col justify-center flex-grow">
                    <span
                      className="text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.08em] font-black text-[#FC8814] transition"
                      style={{ fontFamily: "Raleway,sans-serif" }}
                    >
                      {news.category}
                    </span>

                    <h4
                      className={`mt-1 md:mt-2 font-black line-clamp-2 transition text-xs md:text-sm ${
                        selectedNews.id === news.id
                          ? "text-[#333333]"
                          : "text-[#333333] group-hover:text-[#FC8814]"
                      }`}
                      style={{ fontFamily: "'Playfair Display',serif" }}
                    >
                      {news.title}
                    </h4>

                    <div
                      className="flex items-center gap-1.5 md:gap-2 mt-2 md:mt-3 text-[0.55rem] md:text-[0.65rem] text-[#999999]"
                      style={{ fontFamily: "Raleway,sans-serif" }}
                    >
                      <CalendarDays size={12} strokeWidth={2} />
                      {news.date}
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {selectedNews.id === news.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="w-1 bg-[#FC8814]"
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
