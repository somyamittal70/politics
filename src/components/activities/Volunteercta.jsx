import { useState } from "react";
import {
  HandHeart,
  Users,
  Bell,
  Settings,
  ToggleLeft,
  ToggleRight,
  Edit2,
  X,
  Check,
  Send,
  ChevronRight,
} from "lucide-react";

/* ─── CONFIG DATA ─────────────────────────────────────────── */
const INITIAL_CONFIG = {
  heading: "Be a Part of Positive Change",
  subheading:
    "Every contribution matters. Join community initiatives, volunteer for social programs, and participate in activities that create a meaningful impact.",
  cards: [
    {
      id: 1,
      icon: HandHeart,
      title: "Volunteer for Programs",
      desc: "Dedicate your time and skills to support community welfare drives, health camps, plantation activities and student felicitation events.",
      btn: "Become a Volunteer",
      enabled: true,
      formTitle: "Volunteer Registration",
      fields: ["Full Name", "Mobile Number", "Area / Ward", "Skills / Availability"],
    },
    {
      id: 2,
      icon: Users,
      title: "Participate in Community Initiatives",
      desc: "Join ongoing public outreach programs, Aadhaar camps, clean water drives and social welfare activities happening across the constituency.",
      btn: "Participate in an Initiative",
      enabled: true,
      formTitle: "Participation Form",
      fields: ["Full Name", "Mobile Number", "Program of Interest", "Message (Optional)"],
    },
    {
      id: 3,
      icon: Bell,
      title: "Receive Updates on Upcoming Activities",
      desc: "Stay informed about new programs, events and campaigns. Get timely notifications directly to your phone or email.",
      btn: "Get Updates",
      enabled: true,
      formTitle: "Subscribe for Updates",
      fields: ["Full Name", "Mobile Number", "Email Address"],
    },
  ],
};

/* ─── REGISTRATION FORM MODAL ─────────────────────────────── */
function FormModal({ card, onClose }) {
  const [values, setValues] = useState(
    Object.fromEntries(card.fields.map((f) => [f, ""]))
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const required = card.fields.filter((f) => !f.includes("Optional"));
    const missing = required.some((f) => !values[f].trim());
    if (missing) return alert("Please fill all required fields.");
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-5"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-[440px] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Head */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#ede9e2]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#fff4e8] flex items-center justify-center">
              <card.icon size={16} className="text-[#fc8814]" strokeWidth={1.8} />
            </div>
            <h3
              className="text-[15px] font-black text-[#1a1a1a]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {card.formTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-[#aaa] hover:text-[#1a1a1a] transition-colors"
          >
            <X size={17} />
          </button>
        </div>

        {!submitted ? (
          <>
            {/* Body */}
            <div className="px-6 py-5 flex flex-col gap-4">
              {card.fields.map((field) => (
                <div key={field}>
                  <label className="block text-[11px] font-bold tracking-wider uppercase text-[#555] mb-1.5">
                    {field}
                  </label>
                  <input
                    type={
                      field.toLowerCase().includes("email")
                        ? "email"
                        : field.toLowerCase().includes("mobile")
                        ? "tel"
                        : "text"
                    }
                    placeholder={`Enter ${field.replace(" (Optional)", "")}`}
                    value={values[field]}
                    onChange={(e) =>
                      setValues({ ...values, [field]: e.target.value })
                    }
                    className="w-full px-3 py-2.5 border border-[#ddd] rounded-lg text-[14px]
                      bg-[#fafaf8] focus:outline-none focus:border-[#fc8814] transition-colors"
                  />
                </div>
              ))}
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
                onClick={handleSubmit}
                className="flex items-center gap-2 px-6 py-2 bg-[#fc8814] text-white
                  rounded-lg text-[13px] font-bold hover:bg-[#e07810] transition-colors"
              >
                <Send size={13} /> Submit
              </button>
            </div>
          </>
        ) : (
          /* Success state */
          <div className="px-6 py-12 flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-[#eaf3de] flex items-center justify-center">
              <Check size={30} className="text-[#138808]" />
            </div>
            <h4
              className="text-[18px] font-black text-[#1a1a1a]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Thank You!
            </h4>
            <p className="text-[13.5px] text-[#777] leading-relaxed max-w-xs">
              Your response has been recorded. We will get in touch with you
              shortly.
            </p>
            <div className="flex gap-[3px] h-[3px] w-[36px] mt-1">
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-black/15" />
              <div className="flex-1 bg-[#138808]" />
            </div>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2.5 bg-[#fc8814] text-white rounded-xl
                text-[13px] font-bold hover:bg-[#e07810] transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── ADMIN EDIT MODAL ────────────────────────────────────── */
function EditModal({ card, onSave, onClose }) {
  const [form, setForm] = useState({ btn: card.btn, formTitle: card.formTitle });

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-[400px] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#ede9e2]">
          <h3
            className="text-[15px] font-black text-[#1a1a1a]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Edit — {card.title}
          </h3>
          <button onClick={onClose} className="text-[#aaa] hover:text-[#1a1a1a] transition-colors">
            <X size={17} />
          </button>
        </div>

        <div className="px-6 py-5 flex flex-col gap-4">
          <div>
            <label className="block text-[11px] font-bold tracking-wider uppercase text-[#555] mb-1.5">
              Button Text
            </label>
            <input
              type="text"
              value={form.btn}
              onChange={(e) => setForm({ ...form, btn: e.target.value })}
              className="w-full px-3 py-2 border border-[#ddd] rounded-lg text-[14px]
                bg-[#fafaf8] focus:outline-none focus:border-[#fc8814] transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold tracking-wider uppercase text-[#555] mb-1.5">
              Form Title
            </label>
            <input
              type="text"
              value={form.formTitle}
              onChange={(e) => setForm({ ...form, formTitle: e.target.value })}
              className="w-full px-3 py-2 border border-[#ddd] rounded-lg text-[14px]
                bg-[#fafaf8] focus:outline-none focus:border-[#fc8814] transition-colors"
            />
          </div>
        </div>

        <div className="px-6 py-4 border-t border-[#ede9e2] flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 border border-[#ddd] rounded-lg text-[13px]
              font-semibold text-[#555] hover:bg-[#f7f6f3] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(form)}
            className="px-6 py-2 bg-[#fc8814] text-white rounded-lg text-[13px]
              font-bold hover:bg-[#e07810] transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── PARTICIPATION CARD ──────────────────────────────────── */
function ParticipationCard({ card, adminMode, onToggle, onEdit, onOpenForm }) {
  const Icon = card.icon;

  return (
    <div
      className={`relative flex flex-col gap-4 bg-white rounded-2xl border
        px-7 py-8 transition-all duration-300
        ${card.enabled
          ? "border-[#ede9e2] hover:shadow-xl hover:-translate-y-1"
          : "border-[#ede9e2] opacity-50"
        }`}
    >
      {/* Admin controls */}
      {adminMode && (
        <div className="absolute top-4 right-4 flex gap-1.5">
          <button
            onClick={() => onEdit(card)}
            className="w-7 h-7 rounded-lg border border-[#e8e6e0] bg-[#fafaf8]
              flex items-center justify-center text-[#888]
              hover:border-[#fc8814] hover:text-[#fc8814] transition-colors"
          >
            <Edit2 size={12} />
          </button>
          <button
            onClick={() => onToggle(card.id)}
            className="w-7 h-7 rounded-lg border border-[#e8e6e0] bg-[#fafaf8]
              flex items-center justify-center transition-colors hover:border-[#fc8814]"
          >
            {card.enabled
              ? <ToggleRight size={14} className="text-[#138808]" />
              : <ToggleLeft size={14} className="text-[#aaa]" />
            }
          </button>
        </div>
      )}

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-[#fff4e8] flex items-center justify-center">
        <Icon size={28} className="text-[#fc8814]" strokeWidth={1.6} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3
          className="text-[17px] font-black text-[#1a1a1a] leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {card.title}
        </h3>
        <p
          className="text-[13.5px] text-[#777] leading-relaxed"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          {card.desc}
        </p>
      </div>

      {/* Tricolor */}
      <div className="flex gap-[3px] h-[3px] w-[36px]">
        <div className="flex-1 bg-[#FF9933]" />
        <div className="flex-1 bg-black/15" />
        <div className="flex-1 bg-[#138808]" />
      </div>

      {/* CTA Button */}
      {card.enabled ? (
        <button
          onClick={() => onOpenForm(card)}
          className="mt-auto flex items-center justify-center gap-2 px-5 py-3
            bg-[#fc8814] text-white text-[13px] font-bold rounded-xl
            hover:bg-[#e07810] transition-all duration-200 group"
        >
          {card.btn}
          <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      ) : (
        <div className="mt-auto flex items-center justify-center px-5 py-3
          bg-[#f0ede6] text-[#bbb] text-[13px] font-bold rounded-xl cursor-not-allowed">
          Registrations Closed
        </div>
      )}
    </div>
  );
}

/* ─── MAIN SECTION ────────────────────────────────────────── */
export default function VolunteerCTA() {
  const [config, setConfig] = useState(INITIAL_CONFIG);
  const [adminMode, setAdminMode] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [formCard, setFormCard] = useState(null);
  const [saved, setSaved] = useState(false);

  const handleToggle = (id) =>
    setConfig((prev) => ({
      ...prev,
      cards: prev.cards.map((c) =>
        c.id === id ? { ...c, enabled: !c.enabled } : c
      ),
    }));

  const handleEditSave = (form) => {
    setConfig((prev) => ({
      ...prev,
      cards: prev.cards.map((c) =>
        c.id === editTarget.id ? { ...c, ...form } : c
      ),
    }));
    setEditTarget(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <>
      <section
        className="bg-white py-[72px] border-t border-[#ede9e2]"
        style={{ fontFamily: "Playfair Display, sans-serif" }}
      >
        <div className="max-w-[1180px] mx-auto px-6 md:px-10 lg:px-7">

          {/* ── Dark Banner ── */}
          <div className="relative rounded-3xl overflow-hidden bg-[#1a1a1a] px-8 py-14 md:px-16 mb-14">
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#fc8814]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#fc8814]/8 blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-7 h-0.5 bg-[#fc8814] rounded" />
              <span
                className="text-[10px] font-black tracking-[0.28em] uppercase text-[#fc8814]"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Volunteer &amp; Participate
              </span>
            </div>

            <h2
              className="text-[clamp(2rem,4.5vw,3.4rem)] font-black text-white leading-tight max-w-2xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {config.heading}
            </h2>

            <p
              className="text-[1rem] text-[#aaa] mt-4 max-w-xl leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {config.subheading}
            </p>

            <div className="flex gap-[3px] h-[3px] w-[52px] mt-6">
              <div className="flex-1 bg-[#FF9933]" />
              <div className="flex-1 bg-white/20" />
              <div className="flex-1 bg-[#138808]" />
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {["100% Free to Join", "No Prior Experience Needed", "Make a Real Difference"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#fc8814]/20 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-[#fc8814]" />
                  </div>
                  <span
                    className="text-[12px] font-semibold text-[#ccc]"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Admin bar ── */}
          <div className="flex items-center justify-between mb-8 px-4 py-3.5
            bg-[#f7f6f3] rounded-xl border border-[#ede9e2]">
            <p className="text-[12px] font-bold text-[#888] uppercase tracking-wider">
              Admin Panel&nbsp;·&nbsp;
              <span className="text-[#1a1a1a]">
                {config.cards.filter((c) => c.enabled).length} of {config.cards.length} registrations active
              </span>
            </p>
            <button
              onClick={() => setAdminMode((v) => !v)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-bold
                border transition-colors
                ${adminMode
                  ? "bg-[#fc8814] border-[#fc8814] text-white"
                  : "bg-white border-[#ddd] text-[#555] hover:border-[#fc8814] hover:text-[#fc8814]"
                }`}
            >
              <Settings size={14} />
              {adminMode ? "Exit Admin" : "Manage"}
            </button>
          </div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.cards.map((card) => (
              <ParticipationCard
                key={card.id}
                card={card}
                adminMode={adminMode}
                onToggle={handleToggle}
                onEdit={setEditTarget}
                onOpenForm={setFormCard}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Registration Form Modal */}
      {formCard && (
        <FormModal card={formCard} onClose={() => setFormCard(null)} />
      )}

      {/* Admin Edit Modal */}
      {editTarget && (
        <EditModal
          card={editTarget}
          onSave={handleEditSave}
          onClose={() => setEditTarget(null)}
        />
      )}

      {/* Save toast */}
      {saved && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2
          bg-white border border-[#ede9e2] shadow-xl rounded-xl px-5 py-3">
          <Check size={14} className="text-[#138808]" />
          <span className="text-[13px] font-bold text-[#1a1a1a]">Changes saved</span>
        </div>
      )}
    </>
  );
}