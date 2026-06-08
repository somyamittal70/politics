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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14"
        >
          <div>
            <span className="uppercase tracking-[0.3em] text-[#C8972B] text-sm font-semibold">
              Latest Updates
            </span>

            <h2
              className="mt-4 text-4xl md:text-5xl text-[#0D1B3E]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              News From The Ground
            </h2>
          </div>

          <button className="mt-6 md:mt-0 text-[#E8541A] flex items-center gap-2 font-medium hover:text-[#C8972B] transition">
            View All News
            <ArrowRight size={18} />
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News - Left Side */}
          <motion.div
            key={selectedNews.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 group"
          >
            <div className="overflow-hidden rounded-[32px] bg-[#F7F2E8] shadow-xl h-full flex flex-col">
              {/* Featured Image */}
              <div className="overflow-hidden h-[420px]">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Featured Content */}
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <span className="bg-[#E8541A] text-white px-5 py-2 rounded-full text-sm font-semibold w-fit">
                  {selectedNews.category}
                </span>

                <div className="flex items-center gap-3 text-[#C8972B] mt-6">
                  <CalendarDays size={18} />
                  <span className="text-sm font-medium">
                    {selectedNews.date}
                  </span>
                </div>

                <h3
                  className="mt-5 text-3xl md:text-4xl text-[#0D1B3E] leading-tight"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {selectedNews.title}
                </h3>

                <p className="mt-6 text-gray-600 leading-8 flex-grow">
                  {selectedNews.fullContent}
                </p>

                <button className="mt-8 bg-[#0D1B3E] hover:bg-[#E8541A] text-white px-8 py-4 rounded-full flex items-center gap-3 transition w-fit">
                  Read Full Story
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Side News Tabs - Right Side */}
          <div className="space-y-4 max-h-[900px] overflow-y-auto pr-2">
            {newsData.map((news, index) => (
              <motion.button
                key={news.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                onClick={() => setSelectedNews(news)}
                className={`w-full group text-left overflow-hidden rounded-[24px] transition-all duration-300 ${
                  selectedNews.id === news.id
                    ? "bg-[#C8972B]/10 border-2 border-[#C8972B] shadow-lg"
                    : "bg-white border border-[#C8972B]/10 hover:shadow-lg hover:border-[#C8972B]/20"
                }`}
              >
                <div className="flex">
                  {/* News Image */}
                  <div className="w-32 h-32 overflow-hidden flex-shrink-0">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* News Content */}
                  <div className="p-4 flex flex-col justify-center flex-grow">
                    <span
                      className={`text-xs uppercase tracking-wider font-semibold transition ${
                        selectedNews.id === news.id
                          ? "text-[#E8541A]"
                          : "text-[#E8541A]"
                      }`}
                    >
                      {news.category}
                    </span>

                    <h4
                      className={`mt-2 font-semibold line-clamp-2 transition text-sm ${
                        selectedNews.id === news.id
                          ? "text-[#0D1B3E]"
                          : "text-[#0D1B3E] group-hover:text-[#C8972B]"
                      }`}
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {news.title}
                    </h4>

                    <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                      <CalendarDays size={14} />
                      {news.date}
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {selectedNews.id === news.id && (
                    <div className="w-1 bg-[#E8541A]" />
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
