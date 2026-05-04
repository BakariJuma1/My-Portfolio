const categories = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript (ES6+)", "SQL"],
  },
  {
    label: "Frontend",
    skills: ["React", "TailwindCSS", "Responsive UI", "Component Architecture", "State Management"],
  },
  {
    label: "Backend",
    skills: ["Flask", "REST APIs", "SQLAlchemy", "JWT Authentication", "MVC Architecture"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "SQLite"],
  },
  {
    label: "DevOps & Infra",
    skills: ["Linux VPS", "Nginx", "Gunicorn", "Git", "GitHub Actions", "CI/CD", "Render", "Vercel"],
  },
  {
    label: "Integrations",
    skills: ["M-Pesa Daraja API", "Paystack"],
  },
  {
    label: "AI & LLMs",
    skills: ["LLM-assisted development", "Prompt engineering", "AI debugging"],
  },
];

export default function SkillBubbles() {
  return (
    <div className="space-y-3 w-72">
      {categories.map((cat) => (
        <div key={cat.label}>
          <p
            className="text-[10px] uppercase tracking-wider mb-1.5"
            style={{ color: "var(--text-sub)" }}
          >
            {cat.label}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  backgroundColor: "var(--active)",
                  color: "var(--text)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
