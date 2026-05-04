export default function ProjectCard({ project }) {
  return (
    <div
      className="rounded-xl overflow-hidden w-72 border"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--divider)",
      }}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-36 object-cover"
        />
      ) : (
        <div
          className="w-full h-24 flex items-center justify-center"
          style={{ backgroundColor: "var(--active)" }}
        >
          <span className="text-xs font-medium" style={{ color: "var(--text-sub)" }}>
            {project.title}
          </span>
        </div>
      )}

      <div className="p-3">
        <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--text)" }}>
          {project.title}
        </h4>
        <p
          className="text-xs leading-relaxed mb-3 line-clamp-2"
          style={{ color: "var(--text-sub)" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.slice(0, 3).map((t) => (
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
          {project.tech.length > 3 && (
            <span
              className="text-[10px] px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: "var(--active)",
                color: "var(--text-sub)",
              }}
            >
              +{project.tech.length - 3} more
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs py-1.5 rounded-lg font-medium text-white transition-colors"
              style={{ backgroundColor: "var(--green)" }}
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center text-xs py-1.5 rounded-lg font-medium transition-colors border"
              style={{
                borderColor: "var(--divider)",
                color: "var(--text-muted)",
              }}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
