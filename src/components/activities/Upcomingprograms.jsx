import { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  RefreshCw,
  MapPin,
  Calendar,
  ExternalLink,
  X,
} from "lucide-react";

/* ─── CONSTANTS ───────────────────────────────────────────── */
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DEFAULT_IMGS = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=65",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&q=65",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=65",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=65",
  "https://images.unsplash.com/photo-1467286863660-c6f9c4b3e9e0?w=500&q=65",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=65",
];

const STATUS_CYCLE = {
  upcoming: "ongoing",
  ongoing: "completed",
  completed: "upcoming",
};

const STATUS_STYLES = {
  upcoming: { bg: "bg-[#e6f1fb]", text: "text-[#185fa5]", label: "Upcoming" },
  ongoing: { bg: "bg-[#eaf3de]", text: "text-[#3b6d11]", label: "Ongoing" },
  completed: { bg: "bg-[#f1efe8]", text: "text-[#5f5e5a]", label: "Completed" },
};

/* ─── INITIAL DATA ────────────────────────────────────────── */
const INITIAL_EVENTS = [
  {
    id: 1,
    title: "Student Felicitation Ceremony",
    date: "2025-07-15",
    loc: "District Collectorate Hall, Noida",
    desc: "Annual ceremony honouring meritorious students from government schools with merit certificates, scholarships and awards in the presence of local dignitaries.",
    status: "upcoming",
    btn: "Register Now",
    link: "#",
    img: DEFAULT_IMGS[0],
  },
  {
    id: 2,
    title: "Plantation Drive",
    date: "2025-07-05",
    loc: "Central Park, Sector 12",
    desc: "Mass tree plantation campaign with local volunteers, school children and NGO partners planting 5,000 saplings across the urban green belt.",
    status: "upcoming",
    btn: "Join Drive",
    link: "#",
    img: DEFAULT_IMGS[1],
  },
  {
    id: 3,
    title: "Health Check-up Camp",
    date: "2025-06-20",
    loc: "Pratap Nagar Community Centre",
    desc: "Free medical check-ups including blood pressure, sugar, eye and dental screening for senior citizens and BPL families. Medicines provided at no cost.",
    status: "ongoing",
    btn: "Know More",
    link: "#",
    img: DEFAULT_IMGS[2],
  },
  {
    id: 4,
    title: "Aadhaar Assistance Camp",
    date: "2025-06-10",
    loc: "Gram Panchayat Office, Dadri",
    desc: "Facilitation camp for new Aadhaar enrollment, biometric update and correction of details for villagers who lack proper identification documents.",
    status: "ongoing",
    btn: "Find Venue",
    link: "#",
    img: DEFAULT_IMGS[3],
  },
  {
    id: 5,
    title: "Independence Day Tiranga Campaign",
    date: "2025-08-12",
    loc: "Vijay Chowk & All Blocks",
    desc: "Constituency-wide Har Ghar Tiranga campaign with flag distribution, patriotic cultural programs and youth-led march past across all 32 blocks.",
    status: "upcoming",
    btn: "Participate",
    link: "#",
    img: DEFAULT_IMGS[4],
  },
  {
    id: 6,
    title: "Public Outreach Program",
    date: "2025-06-01",
    loc: "Various Ward Locations",
    desc: "Monthly Jan Sampark drive where elected representatives directly meet constituents, record grievances and fast-track pending development work.",
    status: "completed",
    btn: "View Report",
    link: "#",
    img: DEFAULT_IMGS[5],
  },
];

const EMPTY_FORM = {
  title: "",
  date: "",
  status: "upcoming",
  loc: "",
  btn: "Register Now",
  desc: "",
  img: "",
  link: "",
};

/* ─── HELPERS ─────────────────────────────────────────────── */
function parseDateParts(d) {
  if (!d) return { day: "—", month: "", year: "" };
  const dt = new Date(d + "T00:00:00");
  return {
    day: dt.getDate(),
    month: MONTHS[dt.getMonth()],
    year: dt.getFullYear(),
  };
}

/* ─── FILTER TABS ─────────────────────────────────────────── */
const FILTERS = [
  { key: "all", label: "All" },
  { key: "upcoming", label: "Upcoming" },
  { key: "ongoing", label: "Ongoing" },
  { key: "completed", label: "Completed" },
];

/* ─── EVENT CARD ──────────────────────────────────────────── */
function EventCard({ ev, onEdit, onCycleStatus, onDelete }) {
  const p = parseDateParts(ev.date);
  const st = STATUS_STYLES[ev.status];

  return (
    <div
      className="group flex items-stretch bg-white rounded-2xl border border-[#ede9e2]
      overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
    >
      {/* Date column */}
      <div
        className="w-[76px] flex-shrink-0 flex flex-col items-center justify-center
        px-3 py-5 border-r border-[#f0ede6] bg-[#fafaf8] gap-0"
      >
        <span
          className="text-[2rem] font-black leading-none text-[#1a1a1a]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {p.day}
        </span>
        <span className="text-[10px] font-black tracking-widest uppercase text-[#fc8814] mt-0.5">
          {p.month}
        </span>
        <span className="text-[10px] text-[#aaa] font-semibold mt-0.5">
          {p.year}
        </span>
      </div>

      {/* Event image */}
      {ev.img && (
        <div
          className="w-[116px] flex-shrink-0 overflow-hidden bg-[#e8e6e0]
          hidden sm:block"
        >
          <img
            src={ev.img}
            alt={ev.title}
            loading="lazy"
            onError={(e) => {
              e.target.parentElement.style.display = "none";
            }}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Body */}
      <div className="flex-1 flex flex-col gap-1.5 px-5 py-4 min-w-0">
        {/* Title + badge */}
        <div className="flex items-start justify-between gap-3">
          <h3
            className="text-[15px] font-black leading-snug text-[#1a1a1a] flex-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {ev.title}
          </h3>
          <span
            className={`flex-shrink-0 text-[10px] font-black tracking-wider uppercase
              px-2.5 py-1 rounded-md ${st.bg} ${st.text}`}
          >
            {st.label}
          </span>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-3">
          <span className="flex items-center gap-1.5 text-[12px] font-semibold text-[#888]">
            <MapPin size={13} className="text-[#fc8814] flex-shrink-0" />
            {ev.loc}
          </span>
          <span className="flex items-center gap-1.5 text-[12px] font-semibold text-[#888]">
            <Calendar size={13} className="text-[#fc8814] flex-shrink-0" />
            {ev.date || "TBD"}
          </span>
        </div>

        {/* Description */}
        <p className="text-[13px] text-[#666] leading-relaxed line-clamp-2">
          {ev.desc}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-1">
          {/* Admin controls — visible on group hover */}
          <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => onEdit(ev)}
              title="Edit"
              className="w-7 h-7 rounded-lg border border-[#e8e6e0] bg-[#fafaf8]
                flex items-center justify-center text-[#555]
                hover:border-[#fc8814] hover:text-[#fc8814] transition-colors"
            >
              <Edit2 size={12} />
            </button>
            <button
              onClick={() => onCycleStatus(ev.id)}
              title="Change status"
              className="w-7 h-7 rounded-lg border border-[#e8e6e0] bg-[#fafaf8]
                flex items-center justify-center text-[#555]
                hover:border-[#fc8814] hover:text-[#fc8814] transition-colors"
            >
              <RefreshCw size={12} />
            </button>
            <button
              onClick={() => onDelete(ev.id)}
              title="Delete"
              className="w-7 h-7 rounded-lg border border-[#e8e6e0] bg-[#fafaf8]
                flex items-center justify-center text-[#555]
                hover:border-red-400 hover:text-red-500 transition-colors"
            >
              <Trash2 size={12} />
            </button>
          </div>

          {/* CTA button */}
          <a
            href={ev.link || "#"}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg
              border-[1.5px] border-[#fc8814] text-[#fc8814] text-[12px] font-bold
              hover:bg-[#fc8814] hover:text-white transition-all duration-200 ml-auto"
          >
            <ExternalLink size={12} />
            {ev.btn || "Know More"}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── MODAL ───────────────────────────────────────────────── */
function Modal({ form, setForm, onSave, onClose, isEdit }) {
  return (
    <div
      className="min-h-[500px] bg-black/45 flex items-start justify-center
      p-5 rounded-2xl mt-6"
    >
      <div className="bg-white rounded-2xl w-full max-w-[560px] overflow-hidden shadow-2xl">
        {/* Head */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#ede9e2]">
          <h3
            className="text-[16px] font-black text-[#1a1a1a]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {isEdit ? "Edit Program" : "Add Program"}
          </h3>
          <button
            onClick={onClose}
            className="text-[#aaa] hover:text-[#1a1a1a] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 flex flex-col gap-4 max-h-[68vh] overflow-y-auto">
          {/* Title */}
          <div>
            <label className="block text-[11px] font-bold tracking-wider uppercase text-[#555] mb-1.5">
              Event Title
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g. Student Felicitation Ceremony"
              className="w-full px-3 py-2 border border-[#ddd] rounded-lg text-[14px]
                bg-[#fafaf8] focus:outline-none focus:border-[#fc8814] transition-colors"
            />
          </div>

          {/* Date + Status */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#555] mb-1.5">
                Event Date
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-3 py-2 border border-[#ddd] rounded-lg text-[14px]
                  bg-[#fafaf8] focus:outline-none focus:border-[#fc8814] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#555] mb-1.5">
                Status
              </label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full px-3 py-2 border border-[#ddd] rounded-lg text-[14px]
                  bg-[#fafaf8] focus:outline-none focus:border-[#fc8814] transition-colors"
              >
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>

          {/* Location + Button text */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#555] mb-1.5">
                Location
              </label>
              <input
                type="text"
                value={form.loc}
                onChange={(e) => setForm({ ...form, loc: e.target.value })}
                placeholder="e.g. Community Hall, Block A"
                className="w-full px-3 py-2 border border-[#ddd] rounded-lg text-[14px]
                  bg-[#fafaf8] focus:outline-none focus:border-[#fc8814] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold tracking-wider uppercase text-[#555] mb-1.5">
                Button Text
              </label>
              <input
                type="text"
                value={form.btn}
                onChange={(e) => setForm({ ...form, btn: e.target.value })}
                placeholder="Register Now"
                className="w-full px-3 py-2 border border-[#ddd] rounded-lg text-[14px]
                  bg-[#fafaf8] focus:outline-none focus:border-[#fc8814] transition-colors"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-[11px] font-bold tracking-wider uppercase text-[#555] mb-1.5">
              Short Description
            </label>
            <textarea
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              placeholder="2–3 lines about this event..."
              rows={3}
              className="w-full px-3 py-2 border border-[#ddd] rounded-lg text-[14px]
                bg-[#fafaf8] focus:outline-none focus:border-[#fc8814] transition-colors resize-y"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-[11px] font-bold tracking-wider uppercase text-[#555] mb-1.5">
              Event Image / Poster URL
            </label>
            <input
              type="text"
              value={form.img}
              onChange={(e) => setForm({ ...form, img: e.target.value })}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3 py-2 border border-[#ddd] rounded-lg text-[14px]
                bg-[#fafaf8] focus:outline-none focus:border-[#fc8814] transition-colors"
            />
            {/* Upload hint */}
            <div
              className="mt-2 border-[1.5px] border-dashed border-[#ddd] rounded-xl
              p-4 flex flex-col items-center gap-1 bg-[#fafaf8]
              hover:border-[#fc8814] transition-colors cursor-pointer"
            >
              <span className="text-[#ccc] text-xl">📷</span>
              <p className="text-[12px] text-[#aaa]">
                Paste image URL above · or connect your file uploader here
              </p>
            </div>
          </div>

          {/* Registration link */}
          <div>
            <label className="block text-[11px] font-bold tracking-wider uppercase text-[#555] mb-1.5">
              Registration / Info Link
            </label>
            <input
              type="text"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
              placeholder="https://..."
              className="w-full px-3 py-2 border border-[#ddd] rounded-lg text-[14px]
                bg-[#fafaf8] focus:outline-none focus:border-[#fc8814] transition-colors"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#ede9e2] flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 border border-[#ddd] rounded-lg text-[13px]
              font-semibold text-[#555] hover:bg-[#f7f6f3] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-6 py-2 bg-[#fc8814] text-white rounded-lg text-[13px]
              font-bold hover:bg-[#e07810] transition-colors"
          >
            Save Program
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN SECTION ────────────────────────────────────────── */
export default function UpcomingPrograms() {
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [nextId, setNextId] = useState(7);
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const filtered =
    activeFilter === "all"
      ? events
      : events.filter((e) => e.status === activeFilter);

  const handleAdd = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  };

  const handleEdit = (ev) => {
    setEditingId(ev.id);
    setForm({
      title: ev.title,
      date: ev.date || "",
      status: ev.status,
      loc: ev.loc || "",
      btn: ev.btn || "Know More",
      desc: ev.desc || "",
      img: ev.img || "",
      link: ev.link || "",
    });
    setModalOpen(true);
  };

  const handleSave = () => {
    const record = {
      ...form,
      img: form.img || DEFAULT_IMGS[0],
      link: form.link || "#",
    };
    if (editingId !== null) {
      setEvents((prev) =>
        prev.map((e) => (e.id === editingId ? { ...e, ...record } : e)),
      );
    } else {
      setEvents((prev) => [...prev, { id: nextId, ...record }]);
      setNextId((n) => n + 1);
    }
    setModalOpen(false);
  };

  const handleCycleStatus = (id) => {
    setEvents((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, status: STATUS_CYCLE[e.status] } : e,
      ),
    );
  };

  const handleDelete = (id) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <section
      className="bg-white py-[72px] border-t border-[#ede9e2]"
      style={{ fontFamily: "Playfair Display, sans-serif" }}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 lg:px-7">
        {/* Heading */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-7 h-0.5 bg-[#fc8814] rounded" />
          <span
            className="text-[10px] font-black tracking-[0.28em] uppercase text-[#fc8814]"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Events & Campaigns
          </span>
        </div>

        <h2
          className="text-[clamp(2rem,4vw,3rem)] font-black text-[#1a1a1a] leading-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Upcoming Programs
        </h2>

        <p
          className="text-[1rem] italic text-[#888] mt-2 max-w-xl leading-relaxed"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          "Stay informed, stay engaged — join us in building a stronger
          community through active participation."
        </p>

        <div className="flex gap-[3px] h-[3px] w-[52px] mt-3.5 mb-8">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-black/15" />
          <div className="flex-1 bg-[#138808]" />
        </div>

        {/* Admin bar */}
        <div
          className="flex items-center justify-between mb-6 px-4 py-3.5
          bg-[#f7f6f3] rounded-xl border border-[#ede9e2]"
        >
          <p className="text-[12px] font-bold text-[#888] uppercase tracking-wider">
            Admin Panel&nbsp;·&nbsp;
            <span className="text-[#1a1a1a]">
              {events.length} program{events.length !== 1 ? "s" : ""}
            </span>
          </p>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-[#fc8814] text-white
              rounded-lg text-[13px] font-bold hover:bg-[#e07810] transition-colors"
          >
            <Plus size={15} /> Add Program
          </button>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mb-7">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-1.5 rounded-full text-[12px] font-bold border-[1.5px]
                transition-all duration-150
                ${
                  activeFilter === f.key
                    ? "bg-[#fc8814] border-[#fc8814] text-white"
                    : "bg-white border-[#e0ddd6] text-[#888] hover:border-[#fc8814] hover:text-[#fc8814]"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Events list */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-20 text-[#bbb]">
            <Calendar size={40} />
            <p className="text-[14px]">No programs in this category yet.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((ev) => (
              <EventCard
                key={ev.id}
                ev={ev}
                onEdit={handleEdit}
                onCycleStatus={handleCycleStatus}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {/* Modal */}
        {modalOpen && (
          <Modal
            form={form}
            setForm={setForm}
            onSave={handleSave}
            onClose={() => setModalOpen(false)}
            isEdit={editingId !== null}
          />
        )}
      </div>
    </section>
  );
}
