import { experience } from "../data/chats";

export default function ExperienceCards() {
  return (
    <div className="space-y-3 w-72">
      {experience.map((job, i) => (
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
                {job.role}
              </p>
              <p className="text-xs" style={{ color: "var(--green)" }}>
                {job.company} · {job.location}
              </p>
            </div>
            <span
              className="text-[10px] whitespace-nowrap"
              style={{ color: "var(--text-sub)" }}
            >
              {job.period}
            </span>
          </div>

          {job.tech.length > 0 && (
            <div className="flex flex-wrap gap-1 my-2">
              {job.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: "var(--active)",
                    color: "var(--text-muted)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <ul className="space-y-1 mt-2">
            {job.points.map((point, j) => (
              <li
                key={j}
                className="text-[11px] leading-relaxed flex gap-1.5"
                style={{ color: "var(--text-sub)" }}
              >
                <span
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "var(--green)" }}
                >
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
