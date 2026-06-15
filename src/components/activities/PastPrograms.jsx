import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Sample Data ──────────────────────────────────────────────────────────────
const samplePrograms = [
  {
    id: 1,
    title: "Student Felicitation Program 2024",
    date: "March 15, 2024",
    category: "Education",
    image: "https://placehold.co/600x400/1a1a1a/ff6b00?text=Student+Felicitation",
    description:
      "Outstanding students from government schools across the constituency were felicitated for their exceptional academic performance. Scholarships and study kits were distributed to encourage academic excellence.",
    stats: [
      { label: "Students Felicitated", value: "320+" },
      { label: "Schools Covered", value: "18" },
      { label: "Scholarships Given", value: "45" },
    ],
    fullReport:
      "The Student Felicitation Program 2024 was held at the Community Hall, bringing together students, parents, and educators. Top performers from Class 5 to Class 12 were recognized with certificates, scholarships, and study material kits. The event aimed to motivate young minds and encourage excellence in academics.",
    photos: [
      "https://placehold.co/800x500/1a1a1a/ff6b00?text=Photo+1",
      "https://placehold.co/800x500/2a2a2a/ff6b00?text=Photo+2",
    ],
  },
  {
    id: 2,
    title: "Plantation Drive – Green Initiative",
    date: "July 5, 2024",
    category: "Environment",
    image: "https://placehold.co/600x400/1a1a1a/ff6b00?text=Plantation+Drive",
    description:
      "A large-scale plantation drive was organized on World Environment Day, involving local residents, school children, and volunteers. Native tree saplings were planted across parks, roadsides and school campuses.",
    stats: [
      { label: "Trees Planted", value: "1,200" },
      { label: "Volunteers", value: "500+" },
      { label: "Locations", value: "12" },
    ],
    fullReport:
      "The Green Initiative Plantation Drive covered 12 key locations including 5 schools and 3 public parks. Volunteers, students, and local residents participated enthusiastically. Native species like Neem, Peepal, and Gulmohar were chosen for their ecological value and low maintenance needs.",
    photos: [
      "https://placehold.co/800x500/1a1a1a/ff6b00?text=Plantation+1",
      "https://placehold.co/800x500/2a2a2a/ff6b00?text=Plantation+2",
    ],
  },
  {
    id: 3,
    title: "Aadhaar Assistance Camp",
    date: "October 10, 2023",
    category: "Public Welfare",
    image: "https://placehold.co/600x400/1a1a1a/ff6b00?text=Aadhaar+Camp",
    description:
      "A dedicated Aadhaar enrollment and correction camp was set up to help senior citizens, daily-wage workers and marginalized communities get their Aadhaar cards updated hassle-free.",
    stats: [
      { label: "Beneficiaries", value: "850+" },
      { label: "New Enrollments", value: "320" },
      { label: "Corrections Done", value: "530" },
    ],
    fullReport:
      "The Aadhaar Assistance Camp was conducted in partnership with UIDAI-authorized operators. The camp specifically targeted senior citizens above 60 years and residents of 3 underserved localities. All services were provided free of cost.",
    photos: [
      "https://placehold.co/800x500/1a1a1a/ff6b00?text=Aadhaar+1",
    ],
  },
  {
    id: 4,
    title: "Free Health Camp",
    date: "January 26, 2024",
    category: "Health",
    image: "https://placehold.co/600x400/1a1a1a/ff6b00?text=Health+Camp",
    description:
      "A free medical checkup camp was organized featuring specialists in general medicine, eye care, dental health, and blood pressure/diabetes screening. Free medicines were distributed to patients in need.",
    stats: [
      { label: "Patients Checked", value: "1,100+" },
      { label: "Doctors & Staff", value: "35" },
      { label: "Free Medicines", value: "700+" },
    ],
    fullReport:
      "The Free Health Camp was held on Republic Day as a gesture of public service. Medical teams from three local hospitals participated. Eye checkups and free spectacles were provided to 150 senior citizens. Blood donation sub-camp was also organized collecting 80 units.",
    photos: [
      "https://placehold.co/800x500/1a1a1a/ff6b00?text=Health+1",
      "https://placehold.co/800x500/2a2a2a/ff6b00?text=Health+2",
    ],
  },
  {
    id: 5,
    title: "Community Outreach Program",
    date: "August 15, 2023",
    category: "Community",
    image: "https://placehold.co/600x400/1a1a1a/ff6b00?text=Community+Outreach",
    description:
      "A community outreach drive was conducted on Independence Day to connect with residents, understand local issues, and distribute essential items to low-income households.",
    stats: [
      { label: "Families Reached", value: "600+" },
      { label: "Villages Covered", value: "8" },
      { label: "Kits Distributed", value: "600" },
    ],
    fullReport:
      "The outreach program covered 8 villages and urban slum clusters. Essential household kits containing ration, hygiene items, and utility supplies were distributed. Feedback forms were collected to identify infrastructure and civic issues for follow-up action.",
    photos: [
      "https://placehold.co/800x500/1a1a1a/ff6b00?text=Outreach+1",
    ],
  },
  {
    id: 6,
    title: "Public Welfare Initiative – Clean Water Drive",
    date: "June 5, 2023",
    category: "Public Welfare",
    image: "https://placehold.co/600x400/1a1a1a/ff6b00?text=Water+Drive",
    description:
      "Drinking water purification units were installed in 6 wards lacking clean water access. Awareness sessions on water hygiene were also conducted in local schools.",
    stats: [
      { label: "Purifiers Installed", value: "24" },
      { label: "Beneficiaries", value: "4,000+" },
      { label: "Awareness Sessions", value: "12" },
    ],
    fullReport:
      "The Clean Water Drive was undertaken in response to community feedback about contaminated groundwater in 6 wards. RO-based community purifiers were installed at key public points. Hygiene awareness sessions were conducted in 12 schools and community halls.",
    photos: [
      "https://placehold.co/800x500/1a1a1a/ff6b00?text=Water+1",
      "https://placehold.co/800x500/2a2a2a/ff6b00?text=Water+2",
    ],
  },
];

const CATEGORIES = ["All", "Education", "Environment", "Health", "Community", "Public Welfare"];

const categoryColor = {
  Education: "#3b82f6",
  Environment: "#22c55e",
  Health: "#ef4444",
  Community: "#a855f7",
  "Public Welfare": "#f97316",
};

// ─── Detail Modal ─────────────────────────────────────────────────────────────
function DetailModal({ program, onClose }) {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <AnimatePresence>
      <motion.div
        className="pp-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="pp-modal"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ type: "spring", damping: 22 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button className="pp-modal-close" onClick={onClose}>✕</button>

          {/* Photo Gallery */}
          <div className="pp-modal-gallery">
            <img src={program.photos[activePhoto]} alt={program.title} />
            {program.photos.length > 1 && (
              <div className="pp-thumb-row">
                {program.photos.map((p, i) => (
                  <img
                    key={i}
                    src={p}
                    alt=""
                    className={`pp-thumb ${i === activePhoto ? "active" : ""}`}
                    onClick={() => setActivePhoto(i)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="pp-modal-body">
            <span
              className="pp-badge"
              style={{ backgroundColor: categoryColor[program.category] }}
            >
              {program.category}
            </span>
            <h2 className="pp-modal-title">{program.title}</h2>
            <p className="pp-modal-date">📅 {program.date}</p>

            {/* Stats */}
            {program.stats?.length > 0 && (
              <div className="pp-modal-stats">
                {program.stats.map((s, i) => (
                  <div key={i} className="pp-modal-stat">
                    <span className="pp-modal-stat-val">{s.value}</span>
                    <span className="pp-modal-stat-lbl">{s.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Full Report */}
            <div className="pp-modal-report">
              <h3>Program Report</h3>
              <p>{program.fullReport}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Program Card ─────────────────────────────────────────────────────────────
function ProgramCard({ program, index, onView }) {
  return (
    <motion.div
      className="pp-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="pp-card-img-wrap">
        <img src={program.image} alt={program.title} className="pp-card-img" />
        <span
          className="pp-badge pp-badge-abs"
          style={{ backgroundColor: categoryColor[program.category] }}
        >
          {program.category}
        </span>
        <span className="pp-completed-tag">✔ Completed</span>
      </div>

      <div className="pp-card-body">
        <p className="pp-card-date">📅 {program.date}</p>
        <h3 className="pp-card-title">{program.title}</h3>
        <p className="pp-card-desc">{program.description}</p>

        {program.stats?.length > 0 && (
          <div className="pp-card-stats">
            {program.stats.map((s, i) => (
              <div key={i} className="pp-stat">
                <span className="pp-stat-val">{s.value}</span>
                <span className="pp-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        )}

        <button className="pp-view-btn" onClick={() => onView(program)}>
          View Details →
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function PastPrograms() {
  const [programs] = useState(samplePrograms);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProgram, setSelectedProgram] = useState(null);

  const filtered =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="pp-section" id="past-programs">
        {/* Section Header */}
        <div className="pp-header">
          <motion.div
            className="pp-eyebrow"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Track Record
          </motion.div>
          <motion.h2
            className="pp-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Past Programs &amp; Achievements
          </motion.h2>
          <motion.p
            className="pp-subtext"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A testament to our commitment — successfully completed initiatives
            that have made a real difference in the community.
          </motion.p>

          {/* Filter Tabs */}
          <div className="pp-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`pp-filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="pp-grid">
          {filtered.map((program, i) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={i}
              onView={setSelectedProgram}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="pp-empty">No programs in this category yet.</p>
        )}
      </section>

      {/* Detail Modal */}
      {selectedProgram && (
        <DetailModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
        />
      )}

      {/* ── Styles ── */}
      <style>{`
        /* Variables */
        :root {
          --pp-orange: #f97316;
          --pp-dark: #0f0f0f;
          --pp-card-bg: #161616;
          --pp-border: rgba(255,255,255,0.08);
          --pp-text: #e5e5e5;
          --pp-muted: #888;
          --pp-radius: 14px;
        }

        /* Section */
        .pp-section {
          background: var(--pp-dark);
          padding: 90px 24px;
          font-family: 'Inter', sans-serif;
        }

        /* Header */
        .pp-header {
          max-width: 860px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .pp-eyebrow {
          display: inline-block;
          color: var(--pp-orange);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .pp-heading {
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px;
          line-height: 1.18;
        }
        .pp-subtext {
          color: var(--pp-muted);
          font-size: 16px;
          line-height: 1.7;
          max-width: 620px;
          margin: 0 auto 32px;
        }

        /* Filter Tabs */
        .pp-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
        .pp-filter-btn {
          padding: 8px 20px;
          border-radius: 999px;
          border: 1.5px solid var(--pp-border);
          background: transparent;
          color: var(--pp-muted);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.22s;
        }
        .pp-filter-btn:hover {
          border-color: var(--pp-orange);
          color: var(--pp-orange);
        }
        .pp-filter-btn.active {
          background: var(--pp-orange);
          border-color: var(--pp-orange);
          color: #fff;
        }

        /* Grid */
        .pp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Card */
        .pp-card {
          background: var(--pp-card-bg);
          border: 1px solid var(--pp-border);
          border-radius: var(--pp-radius);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .pp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(249,115,22,0.12);
        }
        .pp-card-img-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
        }
        .pp-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s;
        }
        .pp-card:hover .pp-card-img {
          transform: scale(1.06);
        }

        /* Badges */
        .pp-badge {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }
        .pp-badge-abs {
          position: absolute;
          top: 12px;
          left: 12px;
        }
        .pp-completed-tag {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(0,0,0,0.75);
          color: #4ade80;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid #4ade8055;
          backdrop-filter: blur(4px);
        }

        /* Card Body */
        .pp-card-body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 10px;
        }
        .pp-card-date {
          font-size: 12px;
          color: var(--pp-muted);
          margin: 0;
        }
        .pp-card-title {
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.3;
        }
        .pp-card-desc {
          font-size: 13.5px;
          color: var(--pp-muted);
          line-height: 1.65;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Stats */
        .pp-card-stats {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          padding: 12px 0;
          border-top: 1px solid var(--pp-border);
          border-bottom: 1px solid var(--pp-border);
        }
        .pp-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .pp-stat-val {
          font-size: 15px;
          font-weight: 800;
          color: var(--pp-orange);
        }
        .pp-stat-lbl {
          font-size: 10.5px;
          color: var(--pp-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* View Button */
        .pp-view-btn {
          margin-top: auto;
          padding: 10px 0;
          background: transparent;
          border: 1.5px solid var(--pp-orange);
          color: var(--pp-orange);
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.22s;
        }
        .pp-view-btn:hover {
          background: var(--pp-orange);
          color: #fff;
        }

        /* Empty */
        .pp-empty {
          text-align: center;
          color: var(--pp-muted);
          padding: 60px 0;
        }

        /* ── Modal ── */
        .pp-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(6px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          overflow-y: auto;
        }
        .pp-modal {
          background: #1a1a1a;
          border: 1px solid var(--pp-border);
          border-radius: 18px;
          width: 100%;
          max-width: 780px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }
        .pp-modal-close {
          position: sticky;
          top: 16px;
          left: calc(100% - 52px);
          display: block;
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.08);
          border: none;
          border-radius: 50%;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
          z-index: 10;
          margin: 16px 16px 0 auto;
          flex-shrink: 0;
        }
        .pp-modal-gallery {
          width: 100%;
        }
        .pp-modal-gallery > img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          display: block;
        }
        .pp-thumb-row {
          display: flex;
          gap: 8px;
          padding: 10px 20px;
          background: #111;
        }
        .pp-thumb {
          width: 64px;
          height: 44px;
          object-fit: cover;
          border-radius: 6px;
          cursor: pointer;
          opacity: 0.5;
          border: 2px solid transparent;
          transition: all 0.2s;
        }
        .pp-thumb.active,
        .pp-thumb:hover {
          opacity: 1;
          border-color: var(--pp-orange);
        }
        .pp-modal-body {
          padding: 28px;
        }
        .pp-modal-title {
          font-size: 22px;
          font-weight: 800;
          color: #fff;
          margin: 10px 0 6px;
        }
        .pp-modal-date {
          font-size: 13px;
          color: var(--pp-muted);
          margin: 0 0 20px;
        }
        .pp-modal-stats {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          background: #111;
          border-radius: 12px;
          padding: 18px 20px;
          margin-bottom: 24px;
        }
        .pp-modal-stat {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .pp-modal-stat-val {
          font-size: 22px;
          font-weight: 800;
          color: var(--pp-orange);
        }
        .pp-modal-stat-lbl {
          font-size: 11px;
          color: var(--pp-muted);
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
        .pp-modal-report h3 {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .pp-modal-report p {
          font-size: 14.5px;
          color: #aaa;
          line-height: 1.75;
          margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .pp-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .pp-section { padding: 60px 16px; }
          .pp-grid { grid-template-columns: 1fr; }
          .pp-modal-gallery > img { height: 220px; }
          .pp-modal-stats { gap: 14px; }
        }
      `}</style>
    </>
  );
}