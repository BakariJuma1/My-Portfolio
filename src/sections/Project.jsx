
const projects = [
  {
    title: "SomaPoa Bursary App",
    description: "A fullstack bursary application system with role-based access control, document verification, and real-time notifications. Built with Flask backend and React frontend.",
    tech: ["React", "Flask", "PostgreSQL", "Tailwind CSS"],
    liveLink: "https://somapoa.netlify.app",
    github: "https://github.com/BakariJuma1/SomaPoa",
  },
  {
    title: "County Permit Tracker",
    description: "Command-line interface for managing business permits with automated renewal reminders, payment tracking, and reporting features.",
    tech: ["Python", "SQLAlchemy", "Click", "Rich"],
    github: "https://github.com/BakariJuma1/county-permit-tracker",
  },
  {
    title: "Supa Fundi",
    description: "Tinder-style job matching platform connecting tradespeople with clients, featuring geolocation and instant messaging capabilities.",
    tech: ["JavaScript", "Mapbox API", "Firebase"],
    github: "https://github.com/BakariJuma1/Supa-Fundi",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges that helped me grow as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="h-3 bg-gradient-to-r from-blue-500 to-blue-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-auto">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${!project.liveLink ? 'flex-1' : ''}`}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/BakariJuma1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}