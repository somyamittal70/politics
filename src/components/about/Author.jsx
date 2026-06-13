import React from "react";
import { ShoppingCart, BookOpen } from "lucide-react";

const ACCENT = "#E8541A";

export default function Author() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "60px 24px",
        overflow: "hidden",
        fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <style>{`
        .author-heading h2 {
          font-size: 32px;
        }
        .book-section {
          flex-direction: row;
        }
        .author-message {
          flex-direction: row;
          text-align: left;
        }
        .author-message-text {
          text-align: left;
        }
        @media (max-width: 768px) {
          .author-heading h2 {
            font-size: 26px !important;
          }
          .author-heading p {
            font-size: 15px !important;
          }
          .book-section {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .book-details h3 {
            font-size: 22px !important;
            text-align: center;
          }
          .book-details {
            text-align: center;
          }
          .book-details p {
            text-align: center;
          }
          .buy-btn {
            margin: 0 auto;
          }
          .author-message {
            flex-direction: column !important;
            text-align: center !important;
            padding: 28px !important;
          }
          .author-message-text {
            text-align: center !important;
          }
        }
        @media (max-width: 480px) {
          .author-heading h2 {
            font-size: 22px !important;
          }
          .book-cover-box {
            max-width: 260px !important;
          }
          .author-photo {
            width: 130px !important;
            height: 130px !important;
          }
        }
      `}</style>

      {/* Section Heading */}
      <div className="author-heading" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 56px" }}>
        <h2
          style={{
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "14px",
          }}
        >
          Author & Thought Leadership
        </h2>
        <p style={{ fontSize: "16px", color: "#666666", lineHeight: 1.7 }}>
          Sharing ideas, perspectives, and vision through writing and public
          engagement.
        </p>
      </div>

      {/* Book Section */}
      <div
        className="book-section"
        style={{
          maxWidth: "1100px",
          margin: "0 auto 64px",
          display: "flex",
          flexWrap: "wrap",
          gap: "48px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Left: Book Cover */}
        <div
          style={{
            flex: "1 1 320px",
            maxWidth: "360px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="book-cover-box"
            style={{
              width: "100%",
              aspectRatio: "3 / 4.5",
              borderRadius: "12px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
              background: "#f7f7f7",
              border: `2px solid ${ACCENT}`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              color: "#999999",
              textAlign: "center",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            {/*
              Replace this placeholder block with:
              <img
                src="YOUR_BOOK_COVER_IMAGE"
                alt="Why Bharat Needs Modi: Now & Beyond - Book Cover"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
              />
            */}
            <BookOpen size={48} color={ACCENT} strokeWidth={1.5} />
            <span style={{ fontSize: "14px" }}>Book Cover Image</span>
          </div>
        </div>

        {/* Right: Book Details */}
        <div className="book-details" style={{ flex: "1 1 380px", maxWidth: "560px" }}>
          <h3
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "8px",
              lineHeight: 1.3,
            }}
          >
            Why Bharat Needs Modi: Now & Beyond
          </h3>

          <p
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: ACCENT,
              marginBottom: "20px",
            }}
          >
            Author: Sandeep Singh Dham
          </p>

          <p style={{ fontSize: "15.5px", color: "#555555", lineHeight: 1.7, marginBottom: "28px" }}>
            Why Bharat Needs Modi: Now & Beyond explores the themes of
            leadership, governance, national development, and Bharat's
            evolving role in the world. The book reflects on transformational
            initiatives, public policy, and the vision for a stronger and more
            prosperous nation.
          </p>

          {/* Buy Button */}
          <a
            href="#" /* TODO: replace with Amazon link */
            target="_blank"
            rel="noopener noreferrer"
            className="buy-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: ACCENT,
              color: "#ffffff",
              fontSize: "15px",
              fontWeight: 600,
              padding: "14px 28px",
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
            <ShoppingCart size={20} strokeWidth={2} />
            Buy on Amazon
          </a>
        </div>
      </div>

      {/* Author's Message */}
      <div
        className="author-message"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "#fdf6f3",
          borderRadius: "16px",
          padding: "40px",
          display: "flex",
          flexWrap: "wrap",
          gap: "36px",
          alignItems: "center",
          justifyContent: "center",
          borderTop: `4px solid ${ACCENT}`,
          boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
        }}
      >
        {/* Left: Photo */}
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            justifyContent: "center",
            width: "180px",
          }}
        >
          <div
            className="author-photo"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "#ffffff",
              border: `3px solid ${ACCENT}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#999999",
              fontSize: "14px",
              textAlign: "center",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            {/*
              Replace this placeholder block with:
              <img
                src="YOUR_PHOTO_IMAGE"
                alt="Sandeep Singh Dham"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            */}
            Author Photo
          </div>
        </div>

        {/* Right: Message */}
        <div className="author-message-text" style={{ flex: "1 1 320px" }}>
          <h4
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "14px",
            }}
          >
            Author's Message
          </h4>
          <p
            style={{
              fontSize: "15.5px",
              color: "#555555",
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
          >
            "Writing this book was an effort to present thoughts and
            perspectives on leadership, governance, and the future of Bharat.
            Through public life, organizational work, and interactions with
            people from diverse backgrounds, I have witnessed the aspirations
            and potential of our nation. This book is a humble contribution to
            the ongoing dialogue about Bharat's progress and future
            direction."
          </p>
        </div>
      </div>
    </section>
  );
}