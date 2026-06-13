import React, { useState } from "react";
import { X } from "lucide-react";

const ACCENT = "#E8541A";

// Replace these placeholder image URLs with your actual photographs.
// "featured: true" marks the larger center photo in the desktop grid.
const photos = [
  { src: "https://placehold.co/400x400?text=Photo+1", alt: "Photo 1", featured: false },
  { src: "https://placehold.co/400x400?text=Photo+2", alt: "Photo 2", featured: false },
  { src: "https://placehold.co/400x400?text=Photo+3", alt: "Photo 3", featured: false },
  { src: "https://placehold.co/400x400?text=Photo+4", alt: "Photo 4", featured: false },
  { src: "https://placehold.co/800x800?text=Featured+Photo", alt: "Featured Photo", featured: true },
  { src: "https://placehold.co/400x400?text=Photo+6", alt: "Photo 6", featured: false },
  { src: "https://placehold.co/400x400?text=Photo+7", alt: "Photo 7", featured: false },
  { src: "https://placehold.co/400x400?text=Photo+8", alt: "Photo 8", featured: false },
  { src: "https://placehold.co/400x400?text=Photo+9", alt: "Photo 9", featured: false },
];

export default function Journey() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "60px 24px",
        overflow: "hidden",
        fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Section Heading */}
      <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "14px",
          }}
        >
          A Journey in Pictures
        </h2>
        <p style={{ fontSize: "16px", color: "#666666", lineHeight: 1.7 }}>
          A visual glimpse into three decades of service, leadership, public
          engagement, election campaigns, community initiatives and memorable
          moments.
        </p>
      </div>

      {/* Collage Grid */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto 40px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "1fr",
          gap: "16px",
        }}
        className="journey-grid"
      >
        {photos.map((photo, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(photo)}
            className={photo.featured ? "journey-item featured" : "journey-item"}
            style={{
              gridColumn: photo.featured ? "2 / 3" : "auto",
              gridRow: photo.featured ? "2 / 3" : "auto",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
              cursor: "pointer",
              aspectRatio: "1 / 1",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 8px 22px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.08)";
            }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        ))}
      </div>

      {/* View Complete Gallery Button */}
      <div style={{ textAlign: "center" }}>
        <a
          href="/gallery" /* TODO: replace with actual gallery page link */
          style={{
            display: "inline-block",
            background: ACCENT,
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: 600,
            padding: "14px 32px",
            borderRadius: "8px",
            textDecoration: "none",
            boxShadow: "0 4px 14px rgba(232, 84, 26, 0.3)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(232, 84, 26, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 14px rgba(232, 84, 26, 0.3)";
          }}
        >
          View Complete Gallery
        </a>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "24px",
          }}
        >
          <button
            onClick={() => setSelected(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#ffffff",
            }}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}

      {/* Responsive rules */}
      <style>{`
        @media (max-width: 768px) {
          .journey-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .journey-item.featured {
            grid-column: auto !important;
            grid-row: auto !important;
          }
          .journey-item:nth-child(n+7) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}