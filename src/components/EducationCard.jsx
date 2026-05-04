const education = [
  {
    institution: "Moringa School",
    location: "Nairobi, Kenya",
    degree: "Full-Stack Web Development",
    period: "Feb 2025 – Jul 2025",
    points: [
      "Full-stack development with React, Flask, and PostgreSQL.",
      "Built and deployed multiple production-grade projects from scratch.",
      "Focused on REST API design, JWT authentication, and cloud deployment.",
    ],
  },
  {
    institution: "Taita Taveta University",
    location: "Voi, Kenya",
    degree: "BSc Information Technology",
    period: "Aug 2019 – Aug 2023",
    points: [
      "Core CS fundamentals: algorithms, data structures, databases, networking.",
      "Systems programming and software engineering principles.",
      "Member of the university rugby team — KUSF Coast League.",
    ],
  },
];

export default function EducationCard() {
  return (
    <div className="space-y-3 w-72">
      {education.map((entry, i) => (
        <div
          key={i}
          className="rounded-xl p-3 border"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--divider)",
          }}
        >
          <div className="flex justify-between items-start gap-2 mb-1">
            <div>
              <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                {entry.institution}
              </p>
              <p className="text-xs" style={{ color: "var(--green)" }}>
                {entry.degree}
              </p>
              <p className="text-[10px]" style={{ color: "var(--text-sub)" }}>
                {entry.location}
              </p>
            </div>
            <span
              className="text-[10px] whitespace-nowrap"
              style={{ color: "var(--text-sub)" }}
            >
              {entry.period}
            </span>
          </div>
          <ul className="space-y-1 mt-2">
            {entry.points.map((point, j) => (
              <li
                key={j}
                className="text-[11px] leading-relaxed flex gap-1.5"
                style={{ color: "var(--text-sub)" }}
              >
                <span className="mt-0.5 flex-shrink-0" style={{ color: "var(--green)" }}>
                  •
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
