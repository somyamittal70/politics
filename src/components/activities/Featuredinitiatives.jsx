import { useState } from "react";
import {
  Plus,
  Edit2,
  Eye,
  EyeOff,
  Trash2,
  Calendar,
  ExternalLink,
  Upload,
  X,
  Inbox,
} from "lucide-react";

/* ─── DEFAULT PLACEHOLDER IMAGES ─────────────────────────── */
const DEFAULT_IMGS = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=70",
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=70",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=70",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=70",
  "https://images.unsplash.com/photo-1467286863660-c6f9c4b3e9e0?w=600&q=70",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=70",
];

/* ─── INITIAL DATA ────────────────────────────────────────── */
const INITIAL_INITIATIVES = [
  {
    id: 1,
    title: "Student Felicitation Program",
    desc: "Recognizing and honouring meritorious students from underprivileged backgrounds with scholarships, certificates and public felicitation.",
    date: "2025-07-31",
    btn: "Apply Now",
    link: "#",
    img: DEFAULT_IMGS[0],
    active: true,
  },
  {
    id: 2,
    title: "Plantation Drive",
    desc: "Community-led green initiative planting thousands of saplings across urban and rural areas to combat rising temperatures and restore ecology.",
    date: "2025-06-30",
    btn: "Join Us",
    link: "#",
    img: DEFAULT_IMGS[1],
    active: true,
  },
  {
    id: 3,
    title: "Aadhaar Assistance Camp",
    desc: "Free Aadhaar enrollment and update camps organized in remote villages ensuring every citizen has access to their foundational identity document.",
    date: "",
    btn: "Find Nearest Camp",
    link: "#",
    img: DEFAULT_IMGS[2],
    active: true,
  },
  {
    id: 4,
    title: "Health Camp",
    desc: "Free health check-ups, blood sugar testing, eye care and medicine distribution for senior citizens and BPL families in the constituency.",
    date: "2025-08-15",
    btn: "Register Free",
    link: "#",
    img: DEFAULT_IMGS[3],
    active: true,
  },
  {
    id: 5,
    title: "Tiranga Salute Campaign",
    desc: "A patriotic outreach campaign celebrating the national flag with flag-hoisting events, cultural programs and youth marches across all blocks.",
    date: "2025-08-12",
    btn: "Participate",
    link: "#",
    img: DEFAULT_IMGS[4],
    active: true,
  },
  {
    id: 6,
    title: "Public Outreach Program",
    desc: "Monthly jan-sampark drives where representatives meet citizens directly, listen to grievances and fast-track resolution of pending issues.",
    date: "",
    btn: "Know More",
    link: "#",
    img: DEFAULT_IMGS[5],
    active: false,
  },
];

/* ─── DATE FORMATTER ──────────────────────────────────────── */
function formatDate(d) {
  if (!d) return null;
  const dt = new Date(d + "T00:00:00");
  return dt.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/* ─── EMPTY MODAL STATE ───────────────────────────────────── */
const EMPTY_FORM = {
  title: "",
  desc: "",
  img: "",
  date: "",
  btn: "Register Now",
  link: "",
  active: true,
};

/* ─── INITIATIVE CARD ─────────────────────────────────────── */
function InitiativeCard({ item, onEdit, onToggle, onDelete }) {
  return (
    <div
      className={`group relative flex flex-col bg-white rounded-2xl overflow-hidden
        border border-[#ede9e2] transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
        ${!item.active ? "opacity-55" : ""}`}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-[#e8e6e0] flex-shrink-0">
        <img
          src={item.img || DEFAULT_IMGS[0]}
          alt={item.title}
          loading="lazy"
          onError={(e) => {
            e.target.src = DEFAULT_IMGS[0];
          }}
          className="w-full h-full object-cover"
        />

        {/* Active badge */}
        <span
          className={`absolute top-2.5 left-2.5 text-[10px] font-black tracking-widest
            uppercase px-2.5 py-1 rounded-md
            ${
              item.active
                ? "bg-[#eaf3de] text-[#3b6d11]"
                : "bg-[#f1efe8] text-[#5f5e5a]"
            }`}
        >
          {item.active ? "Active" : "Inactive"}
        </span>

        {/* Admin controls — visible on hover */}
        <div className="absolute top-2 right-2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => onEdit(item)}
            title="Edit"
            className="w-7 h-7 rounded-lg bg-white/90 hover:bg-white text-[#1a1a1a]
              flex items-center justify-center transition-colors"
          >
            <Edit2 size={13} />
          </button>
          <button
            onClick={() => onToggle(item.id)}
            title={item.active ? "Deactivate" : "Activate"}
            className="w-7 h-7 rounded-lg bg-white/90 hover:bg-white text-[#1a1a1a]
              flex items-center justify-center transition-colors"
          >
            {item.active ? <EyeOff size={13} /> : <Eye size={13} />}
          </button>
          <button
            onClick={() => onDelete(item.id)}
            title="Delete"
            className="w-7 h-7 rounded-lg bg-white/90 hover:bg-white text-red-600
              flex items-center justify-center transition-colors"
          >
            <Trash2 size={13} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col gap-2 px-5 pt-4 pb-3">
        <h3
          className="text-[15px] font-black leading-snug text-[#1a1a1a]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {item.title}
        </h3>
        <p className="text-[13px] text-[#666] leading-relaxed flex-1">
          {item.desc}
        </p>
        {item.date && (
          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[#888]">
            <Calendar size={13} className="text-[#fc8814]" />
            Last Date: {formatDate(item.date)}
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="px-5 pb-5 pt-2 border-t border-[#f0ede6] mt-2">
        <a
          href={item.link || "#"}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg
            border-[1.5px] border-[#fc8814] text-[#fc8814] text-[13px] font-bold
            hover:bg-[#fc8814] hover:text-white transition-all duration-200"
        >
          <ExternalLink size={13} />
          {item.btn || "Know More"}
        </a>
      </div>
    </div>
  );
}

/* ─── MODAL ───────────────────────────────────────────────── */
function Modal({ form, setForm, onSave, onClose, isEdit }) {
  return (
    /* faux-viewport so modal has layout height */
    <div className="min-h-[560px] bg-black/45 flex items-start justify-center p-5 rounded-2xl">
      <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
        {/* Head */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#ede9e2]">
          <h3
            className="text-[16px] font-black text-[#1a1a1a]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {isEdit ? "Edit Initiative" : "Add Initiative"}
          </h3>
          <button
            onClick={onClose}
            className="text-[#888] hover:text-[#1a1a1a] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
          {/* Title */}
          <div>
            <label className="block text-[11px] font-bold tracking-widest uppercase text-[#555] mb-1.5">
              Initiative Title
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g. Student Felicitation Program"
              className="w-full px-3 py-2 border border-[#ddd] rounded-lg text-[14px]
                bg-[#fafaf8] focus:outline-none focus:border-[#fc8814] transition-colors"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-[11px] font-bold tracking-widest uppercase text-[#555] mb-1.5">
              Description (2–3 lines)
            </label>
            <textarea
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              placeholder="Brief description of the initiative..."
              rows={3}
              className="w-full px-3 py-2 border border-[#ddd] rounded-lg text-[14px]
                bg-[#fafaf8] focus:outline-none focus:border-[#fc8814] transition-colors resize-y"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-[11px] font-bold tracking-widest uppercase text-[#555] mb-1.5">
              Photo URL
            </label>
            <input
              type="text"
              value={form.img}
              onChange={(e) => setForm({ ...form, img: e.target.value })}
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3 py-2 border border-[#ddd] rounded-lg text-[14px]
                bg-[#fafaf8] focus:outline-none focus:border-[#fc8814] transition-colors"
            />
            {/* Upload area hint */}
            <div
              className="mt-2 border-[1.5px] border-dashed border-[#ddd] rounded-xl p-5
              flex flex-col items-center gap-1 bg-[#fafaf8] cursor-pointer hover:border-[#fc8814] transition-colors"
            >
              <Upload size={20} className="text-[#bbb]" />
              <p className="text-[12px] text-[#aaa]">
                Paste URL above — or integrate with your file uploader here
              </p>
            </div>
          </div>

          {/* Date + Button text */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold tracking-widest uppercase text-[#555] mb-1.5">
                Registration Last Date
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
              <label className="block text-[11px] font-bold tracking-widest uppercase text-[#555] mb-1.5">
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

          {/* Registration link */}
          <div>
            <label className="block text-[11px] font-bold tracking-widest uppercase text-[#555] mb-1.5">
              Registration Link / Form URL
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

          {/* Active toggle */}
          <div className="flex items-center justify-between py-2">
            <span className="text-[13px] font-semibold text-[#444]">
              Show as Active
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={form.active}
                onChange={(e) => setForm({ ...form, active: e.target.checked })}
                className="sr-only peer"
              />
              <div
                className="w-10 h-[22px] bg-[#ddd] peer-checked:bg-[#fc8814]
                rounded-full transition-colors duration-250 relative
                after:content-[''] after:absolute after:top-[3px] after:left-[3px]
                after:w-4 after:h-4 after:bg-white after:rounded-full
                after:transition-all after:duration-250
                peer-checked:after:translate-x-[18px]"
              />
            </label>
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
            Save Initiative
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN SECTION ────────────────────────────────────────── */
export default function FeaturedInitiatives() {
  const [initiatives, setInitiatives] = useState(INITIAL_INITIATIVES);
  const [nextId, setNextId] = useState(7);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);

  /* Open modal for Add */
  const handleAdd = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  };

  /* Open modal for Edit */
  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      title: item.title,
      desc: item.desc,
      img: item.img || "",
      date: item.date || "",
      btn: item.btn || "Know More",
      link: item.link || "",
      active: item.active,
    });
    setModalOpen(true);
  };

  /* Save (add or update) */
  const handleSave = () => {
    if (editingId !== null) {
      setInitiatives((prev) =>
        prev.map((it) =>
          it.id === editingId
            ? { ...it, ...form, img: form.img || DEFAULT_IMGS[0] }
            : it,
        ),
      );
    } else {
      setInitiatives((prev) => [
        ...prev,
        { id: nextId, ...form, img: form.img || DEFAULT_IMGS[0] },
      ]);
      setNextId((n) => n + 1);
    }
    setModalOpen(false);
  };

  /* Toggle active/inactive */
  const handleToggle = (id) => {
    setInitiatives((prev) =>
      prev.map((it) => (it.id === id ? { ...it, active: !it.active } : it)),
    );
  };

  /* Delete */
  const handleDelete = (id) => {
    setInitiatives((prev) => prev.filter((it) => it.id !== id));
  };

  return (
    <section
      className="bg-[#f7f6f3] py-[72px]"
      style={{ fontFamily: "Playfair Display, sans-serif" }}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 lg:px-7">
        {/* Section heading */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-7 h-0.5 bg-[#fc8814] rounded" />
          <span
            className="text-[10px] font-black tracking-[0.28em] uppercase text-[#fc8814]"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Currently Active
          </span>
        </div>
        <h2
          className="text-[clamp(2rem,4vw,3rem)] font-black text-[#1a1a1a] leading-none mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Featured Initiatives
        </h2>
        <div className="flex gap-[3px] h-[3px] w-[52px] mb-8">
          <div className="flex-1 bg-[#FF9933]" />
          <div className="flex-1 bg-black/15" />
          <div className="flex-1 bg-[#138808]" />
        </div>

        {/* Admin bar */}
        <div
          className="flex items-center justify-between mb-7 px-4 py-3.5
          bg-white rounded-xl border border-[#e8e6e0]"
        >
          <p className="text-[12px] font-bold text-[#888] uppercase tracking-wider">
            Admin Panel&nbsp;·&nbsp;
            <span className="text-[#1a1a1a]">
              {initiatives.length} initiative
              {initiatives.length !== 1 ? "s" : ""}
            </span>
          </p>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 bg-[#fc8814] text-white
              rounded-lg text-[13px] font-bold hover:bg-[#e07810] transition-colors"
          >
            <Plus size={15} />
            Add Initiative
          </button>
        </div>

        {/* Card grid */}
        {initiatives.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-20 text-[#aaa]">
            <Inbox size={36} />
            <p className="text-[14px]">
              No initiatives yet. Click "Add Initiative" to get started.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((it) => (
              <InitiativeCard
                key={it.id}
                item={it}
                onEdit={handleEdit}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {/* Modal */}
        {modalOpen && (
          <div className="mt-10">
            <Modal
              form={form}
              setForm={setForm}
              onSave={handleSave}
              onClose={() => setModalOpen(false)}
              isEdit={editingId !== null}
            />
          </div>
        )}
      </div>
    </section>
  );
}
