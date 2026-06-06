import { useState } from "react";

const pressArticles = [
  {
    id: 1,
    source: "Hindustan Times",
    sourceShort: "HT",
    lang: "hindi",
    headline: "जलवायु चुनौतियों से निपटने के लिए मास्टर प्लान बनाने की जरूरत",
    date: "May 10, 2026",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
    link: "https://www.hindustantimes.com",
    featured: true,
    size: "large",
  },
  {
    id: 2,
    source: "Amar Ujala",
    sourceShort: "AU",
    lang: "hindi",
    headline: "बाढ़ और तूफान से निपटने की तैयारियों की समीक्षा — हर राज्य में प्रबंधन टीम बनाएं",
    date: "May 10, 2026",
    category: "Disaster Mgmt",
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=600&q=80",
    link: "https://www.amarujala.com",
    featured: true,
    size: "small",
  },
  {
    id: 3,
    source: "Indian Express",
    sourceShort: "IE",
    lang: "english",
    headline: "Home Minister pushes for 'zero-casualty' disaster management strategy across states",
    date: "May 10, 2026",
    category: "Policy",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&q=80",
    link: "https://www.indianexpress.com",
    featured: true,
    size: "small",
  },
  {
    id: 4,
    source: "The Indian Express",
    sourceShort: "IE",
    lang: "english",
    headline: "Strength of democracy lies in institutional balance, says Home Minister",
    date: "May 10, 2026",
    category: "Democracy",
    image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?w=600&q=80",
    link: "https://www.indianexpress.com",
    featured: true,
    size: "small",
  },
  {
    id: 5,
    source: "Dainik Bhaskar",
    sourceShort: "DB",
    lang: "hindi",
    headline: "एनडीए सरकार संसद में परिसीमन विधेयक को पारित कराना सुनिश्चित करेगी",
    date: "Apr 19, 2026",
    category: "Parliament",
    image: "https://images.unsplash.com/photo-1575320181282-9afab399332c?w=600&q=80",
    link: "https://www.bhaskar.com",
    featured: false,
  },
  {
    id: 6,
    source: "ABP News",
    sourceShort: "ABP",
    lang: "hindi",
    headline: "कांग्रेस-DMK ने महिलाओं को दिया धोखा, BJP दिलाएगी न्याय — तमिलनाडु में बोले",
    date: "Apr 19, 2026",
    category: "Politics",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&q=80",
    link: "https://www.abpnews.com",
    featured: false,
  },
  {
    id: 7,
    source: "ABP News",
    sourceShort: "ABP",
    lang: "hindi",
    headline: "कांग्रेस-DMK ने महिलाओं को दिया धोखा, BJP दिलाएगी न्याय — तमिलनाडु में बोले",
    date: "Apr 19, 2026",
    category: "Politics",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&q=80",
    link: "https://www.abpnews.com",
    featured: false,
  },
];

const sidebarItems = [
  {
    id: 1,
    headline: "PM Modi's promise of 'Rs 15 lakh in each account' — revisited",
    date: "Feb 06, 2015",
    link: "#",
    image: "https://images.unsplash.com/photo-1570126688035-1e6adbd61053?w=200&q=80",
  },
  {
    id: 2,
    headline: "NEP's roots in Santiniketan education movement",
    date: "May 10, 2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&q=80",
  },
  {
    id: 3,
    headline: "Democracy reached grassroots level in India's villages",
    date: "Mar 02, 2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80",
  },
  {
    id: 4,
    headline: "'Use tech to maintain maximum reach, speed across constituencies'",
    date: "Mar 04, 2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=80",
  },
  {
    id: 5,
    headline: "PM Modi's promise of 'Rs 15 lakh in each account' — revisited",
    date: "Feb 06, 2015",
    link: "#",
    image: "https://images.unsplash.com/photo-1570126688035-1e6adbd61053?w=200&q=80",
  },
  {
    id: 6,
    headline: "NEP's roots in Santiniketan education movement",
    date: "May 10, 2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200&q=80",
  },
  {
    id: 7,
    headline: "Democracy reached grassroots level in India's villages",
    date: "Mar 02, 2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&q=80",
  },
  {
    id: 8,
    headline: "'Use tech to maintain maximum reach, speed across constituencies'",
    date: "Mar 04, 2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=80",
  },
];

const catStyle = {
  Environment:    "bg-igreen/15 text-igreen",
  "Disaster Mgmt":"bg-saffron-pale text-saffron-dark",
  Policy:         "bg-navy/10 text-navy",
  Democracy:      "bg-gold/20 text-gold-dark",
  Parliament:     "bg-navy/10 text-navy",
  Politics:       "bg-saffron-pale text-saffron-dark",
};

export default function PressSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "English", "Hindi"];

  const filtered = pressArticles.filter((a) => {
    if (activeFilter === "All") return true;
    return activeFilter === "English" ? a.lang === "english" : a.lang === "hindi";
  });

  const allFeatured = filtered.filter((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);

  const largeFeat = allFeatured.length > 0 ? allFeatured[0] : null;
  const smallFeat = allFeatured.slice(1);

  return (
    <section className="bg-cream min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-saffron text-xs font-bold uppercase tracking-[0.25em] mb-2 flex items-center gap-2">
              <span className="w-8 h-px bg-saffron inline-block" />
              In The News
            </p>
            <h2 className="text-5xl sm:text-6xl font-black text-navy leading-none">
              Press &amp;{" "}
              <span className="text-saffron italic">Media</span>
            </h2>
          </div>

          <div className="flex items-center gap-1 bg-white rounded-full border border-cream-dark shadow-sm p-1 self-start">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-navy text-white shadow"
                    : "text-navy/60 hover:text-navy"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* ── Body Grid: Articles + Sidebar ── */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8">

          {/* ── Articles ── */}
          <div className="flex flex-col gap-6">

            {/* Featured Block */}
            {allFeatured.length > 0 && (
              <div
                className={`grid gap-4 ${
                  largeFeat && smallFeat.length > 0
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {/* Large card */}
                {largeFeat && <LargeCard article={largeFeat} />}

                {/* Small stacked cards — FIX: removed fixed height, flex col with gap */}
                {smallFeat.length > 0 && (
                  <div className="flex flex-col gap-4">
                    {smallFeat.map((a) => <SmallFeatCard key={a.id} article={a} />)}
                  </div>
                )}
              </div>
            )}

            {/* More Coverage */}
            {rest.length > 0 && (
              <>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-cream-dark" />
                  <span className="text-[11px] font-bold text-navy/35 uppercase tracking-[0.2em]">
                    More Coverage
                  </span>
                  <div className="flex-1 h-px bg-cream-dark" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {rest.map((a) => <ListCard key={a.id} article={a} />)}
                </div>
              </>
            )}
          </div>

          {/* ── Sidebar ── */}
          <aside>
            <div className="rounded-2xl overflow-hidden border border-cream-dark bg-white">
              {/* FIX: text-white instead of text-black */}
              <div className="bg-navy px-5 py-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-saffron flex-shrink-0" />
                <span className="text-white text-sm font-bold uppercase tracking-[0.2em]">
                  Popular Press
                </span>
              </div>
              <div className="divide-y divide-cream-dark">
                {sidebarItems.map((item, i) => (
                  <SidebarCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ── Large Hero Card ── */
function LargeCard({ article }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-2xl overflow-hidden block h-[360px] md:h-full min-h-[320px]"
    >
      <img
        src={article.image}
        alt={article.headline}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex items-start justify-between">
          <span className="bg-saffron text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {article.category}
          </span>
          <span className="bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full">
            {article.source}
          </span>
        </div>

        <div>
          <p className="text-white font-bold text-xl leading-snug mb-3 group-hover:text-saffron-light transition-colors duration-200">
            {article.headline}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-white/60 text-xs">{article.date}</span>
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-saffron transition-colors duration-200">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

/* ── Small Featured Card ── */
/* FIX: removed h-[calc(50%-8px)] — cards now take natural auto height */
function SmallFeatCard({ article }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl overflow-hidden border border-cream-dark hover:border-saffron/40 hover:shadow-md transition-all duration-300 flex"
    >
      <div className="w-[120px] flex-shrink-0 overflow-hidden min-h-[110px]">
        <img
          src={article.image}
          alt={article.headline}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col justify-between p-4 flex-1 min-w-0">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${catStyle[article.category] || "bg-cream-dark text-navy"}`}>
              {article.category}
            </span>
          </div>
          <p className="text-navy text-[13px] font-semibold leading-snug line-clamp-3 group-hover:text-saffron transition-colors duration-200">
            {article.headline}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-navy/40 text-[11px]">{article.date}</span>
          <span className="text-[10px] font-bold text-navy/50 uppercase">{article.source}</span>
        </div>
      </div>
    </a>
  );
}

/* ── List Card (More Coverage) ── */
function ListCard({ article }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-xl overflow-hidden border border-cream-dark hover:border-saffron/40 hover:shadow-md transition-all duration-300 flex flex-col"
    >
      <div className="relative h-36 overflow-hidden">
        <img
          src={article.image}
          alt={article.headline}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
        <span className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${catStyle[article.category] || "bg-white text-navy"}`}>
          {article.category}
        </span>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <span className="text-[10px] font-black uppercase tracking-widest text-saffron">
          {article.source}
        </span>
        <p className="text-navy text-[13px] font-semibold leading-snug line-clamp-3 group-hover:text-saffron transition-colors duration-200 flex-1">
          {article.headline}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-cream-dark">
          <span className="text-navy/40 text-[11px]">{article.date}</span>
          <svg className="w-4 h-4 text-saffron opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </a>
  );
}

/* ── Sidebar Card ── */
function SidebarCard({ item, index }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 px-4 py-4 hover:bg-cream transition-colors duration-200"
    >
      <span className="text-saffron font-black text-2xl leading-none w-8 flex-shrink-0 text-right tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.headline}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <p className="text-navy/80 text-[12px] leading-snug line-clamp-2 group-hover:text-navy font-medium transition-colors">
          {item.headline}
        </p>
        <span className="text-navy/35 text-[11px]">{item.date}</span>
      </div>
    </a>
  );
}