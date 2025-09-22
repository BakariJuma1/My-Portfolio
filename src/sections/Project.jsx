export default function Projects() {
  const projects = [
    {
      title: "SomaPoa Bursary App",
      description:
        "SomaPoa is a fullstack bursary application system built to streamline how students apply for financial aid and how administrators manage applications. It features role-based access control (admin vs. student), secure document uploads, application status tracking, and real-time email notifications. The backend is powered by Flask, PostgreSQL, and SQLAlchemy with Alembic migrations, while the frontend is built in React with responsive UI components. This project was inspired by gaps in existing school funding workflows and aims to digitize and secure the entire bursary process.",
      tech: ["React", "Flask", "PostgreSQL", "CSS", "Alembic", "SQLAlchemy"],
      liveLink: "https://somapoa.netlify.app",
      github: "https://github.com/BakariJuma1/SomaPoa",
      image: "/images/somapoa.png",
    },
    {
      title: "County Permit Tracker",
      description:
        "County Permit Tracker is a command-line tool designed for local government officers or registry clerks to manage business permits efficiently. It helps users register businesses, issue permits, track renewal dates, calculate fees, and generate reports. Built with Python, SQLAlchemy, and Alembic, it includes colorful terminal outputs using rich for a smooth user experience. This project was inspired by real-world challenges faced by local permit offices in maintaining up-to-date records and reducing manual errors..",
      tech: ["Python", "SQLAlchemy", "Click", "Rich", "SQLite", "Alembic"],
      github: "https://github.com/BakariJuma1/county-permit-tracker",
      image: "/images/permit-tracker.png",
    },
    {
      title: "PaySync",
      description:
        "PaySync is a lightweight debt management web app built for small business owners like hardware storekeepers and freelancers. Inspired by a real experience of manual record struggles, it enables users to easily track customers, items owed, payment status, and due dates—all in one place. Built with React and styled with CSS, it ensures a responsive, user-friendly interface. Whether you're a shop owner or a solo fundi, PaySync helps you stay organized and avoid lost payments.Working on the backend rightnow",
      tech: ["HTML", "React", "CSS","JSON"],
      liveLink:"https://paysync1.netlify.app/",
      github: "https://github.com/BakariJuma1/Debt-management-app-",
      image: "/images/paysync.png",
    },
    {
      tittle:"Radamjaribu builders",
      description:
        "A website for  construction company to showcase their services, projects, and client testimonials. Clients can book for a consultation and the company can login and their data dynamically.Built with React and Tailwind CSS for a modern, responsive design and a light backend for the company to be able to add their services ,contact,portfolio and upload images dynamically ",
      tech:["React","Tailwind CSS","Python","Flask","PostgreSQL","Cloudinary"],
      liveLink:"https://radamjaribu.netlify.app/",
      github:"",
      image:"/images/Radam.png"
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 px-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges that helped me grow as a developer.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
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

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-lg font-medium transition-colors duration-300 w-full"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-lg font-medium transition-colors duration-300 w-full"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/BakariJuma1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
