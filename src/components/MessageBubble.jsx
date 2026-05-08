import ProjectCard from "./ProjectCard";
import SkillBubbles from "./SkillBubbles";
import ContactInfo from "./ContactInfo";
import ExperienceCards from "./ExperienceCard";
import EducationCard from "./EducationCard";
import ContactForm from "./ContactForm";

const RICH_TYPES = ["project", "skills", "contact-info", "experience", "education", "contact-form"];

export default function MessageBubble({ message, projects }) {
  const isBakari = message.from === "bakari";
  const isRich = RICH_TYPES.includes(message.type);

  const renderContent = () => {
    switch (message.type) {
      case "skills":
        return <SkillBubbles />;
      case "project":
        return <ProjectCard project={projects[message.projectIndex]} />;
      case "experience":
        return <ExperienceCards />;
      case "education":
        return <EducationCard />;
      case "contact-info":
        return <ContactInfo />;
      case "contact-form":
        return <ContactForm />;
      case "resume":
        return (
          <a
            href="/Isaac_Bakari_Juma_CV.pdf"
            download
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: "var(--green)" }}
          >
            Download Resume
          </a>
        );
      default:
        return (
          <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
            {message.text}
          </p>
        );
    }
  };

  if (isRich) {
    return (
      <div className={`flex ${isBakari ? "justify-start" : "justify-end"} mb-2`}>
        <div>
          {renderContent()}
          <p
            className={`text-[10px] mt-1 ${isBakari ? "text-left" : "text-right"}`}
            style={{ color: "var(--text-sub)" }}
          >
            {message.time}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isBakari ? "justify-start" : "justify-end"} mb-1`}>
      <div
        className="max-w-[75%] md:max-w-[60%] rounded-2xl px-3.5 py-2 shadow-sm"
        style={{
          backgroundColor: isBakari ? "var(--bubble-in)" : "var(--bubble-out)",
          borderRadius: isBakari
            ? "0.5rem 1rem 1rem 0.2rem"
            : "1rem 0.5rem 0.2rem 1rem",
        }}
      >
        {renderContent()}
        <div className={`flex items-center gap-1 mt-1 ${isBakari ? "justify-start" : "justify-end"}`}>
          <span className="text-[10px]" style={{ color: "var(--text-sub)" }}>
            {message.time}
          </span>
          {!isBakari && (
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 16 15"
              fill="currentColor"
              style={{ color: "var(--check)" }}
            >
              <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
