import React from "react";
import { Landmark, Vote, Handshake, TreeDeciduous } from "lucide-react";

const ACCENT = "#E8541A";

const cardsData = [
  {
    icon: Landmark,
    title: "Organizational Leadership",
    description:
      "Held leadership responsibilities across multiple levels of the Bharatiya Janata Party, contributing to organizational growth, team development, and grassroots strengthening.",
    highlights: [
      "President – Minority Front",
      "Ward Yuva Morcha President",
      "Ward Vice President",
      "Mahamantri – BJP Sion Koliwada Vidhan Sabha",
      "President – BJP Sion Koliwada Vidhan Sabha",
      "Vice President – BJP South Central Mumbai District",
      "Prabhari – Anushakti Nagar Vidhan Sabha",
      "Mahamantri – BJP South Central Mumbai District",
    ],
  },
  {
    icon: Vote,
    title: "Election Management & Strategy",
    description:
      "Actively involved in election planning, campaign management, voter outreach, booth-level strengthening, and organizational coordination across multiple elections.",
    highlights: [
      "MCGM Elections",
      "Maharashtra Assembly Elections",
      "Lok Sabha Elections",
      "Gujarat Assembly Elections",
      "Karnataka Assembly Elections",
      "Madhya Pradesh Assembly Elections",
      "War Room Operations",
      "Candidate Selection Committee",
    ],
  },
  {
    icon: Handshake,
    title: "Public Outreach & Grassroots Mobilization",
    description:
      "Focused on strengthening the connection between citizens, party workers, and public representatives through continuous grassroots engagement.",
    highlights: [
      "Booth Level Meetings",
      "Worker Coordination",
      "Public Meetings & Sabhas",
      "Voter Outreach Campaigns",
      "Organizational Expansion",
      "Leadership Development",
      "Citizen Interaction Programs",
    ],
  },
  {
    icon: TreeDeciduous,
    title: "Community Service & Social Initiatives",
    description:
      "Committed to community welfare through various service-oriented initiatives and citizen support activities.",
    highlights: [
      "COVID Relief Activities",
      "Student Felicitation Programs",
      "Plantation Drives",
      "Aadhaar Registration Camps",
      "Citizen Assistance Initiatives",
      "Public Welfare Programs",
      "Community Outreach Activities",
    ],
  },
];

const areasOfExperience = [
  "Political Organization",
  "Election Management",
  "Public Outreach",
  "Community Service",
  "Leadership Development",
  "Author & Thought Leadership",
];

function Card({ icon: Icon, title, description, highlights }) {
  return (
    <div
      className="leadership-card"
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
      }}
    >
      {/* Accent top line */}
      <div style={{ height: "5px", width: "100%", background: ACCENT }} />

      <div style={{ padding: "28px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <div style={{ marginBottom: "12px" }}>
          <Icon size={32} color={ACCENT} strokeWidth={1.75} />
        </div>

        <h3
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "12px",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: "15px",
            color: "#555555",
            lineHeight: 1.6,
            marginBottom: "18px",
          }}
        >
          {description}
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flexGrow: 1,
          }}
        >
          {highlights.map((item, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                fontSize: "14.5px",
                color: "#333333",
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  marginTop: "6px",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: ACCENT,
                  display: "inline-block",
                }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Leaderships() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "60px 24px",
        fontFamily:
          "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .leadership-heading h2 {
            font-size: 26px !important;
          }
          .leadership-heading p {
            font-size: 15px !important;
          }
          .leadership-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .areas-heading {
            font-size: 19px !important;
          }
          .leadership-card h3 {
            font-size: 19px !important;
          }
        }
        @media (max-width: 480px) {
          .leadership-heading h2 {
            font-size: 22px !important;
          }
          .leadership-card > div {
            padding: 20px !important;
          }
          .area-tag {
            font-size: 13px !important;
            padding: 8px 16px !important;
          }
        }
      `}</style>

      {/* Section Heading */}
      <div className="leadership-heading" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "14px",
          }}
        >
          Leadership, Organization & Public Service
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#666666",
            lineHeight: 1.7,
          }}
        >
          Over three decades of active public engagement, organizational
          leadership, election management, community service, and grassroots
          development.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        className="leadership-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "28px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {cardsData.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>

      {/* Areas of Experience */}
      <div style={{ maxWidth: "1200px", margin: "56px auto 0", textAlign: "center" }}>
        <h3
          className="areas-heading"
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "24px",
          }}
        >
          Areas of Experience
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          {areasOfExperience.map((area, idx) => (
            <span
              key={idx}
              className="area-tag"
              style={{
                background: "#ffffff",
                border: `1.5px solid ${ACCENT}`,
                color: "#1a1a1a",
                borderRadius: "999px",
                padding: "10px 22px",
                fontSize: "14px",
                fontWeight: 600,
                transition: "background 0.2s ease, color 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = ACCENT;
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.color = "#1a1a1a";
              }}
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}