export default function About() {
  const techStack = [
    'JavaScript', 'React', 'CSS', 'HTML',
    'Python', 'Flask', 'PostgreSQL',
    'Tailwind CSS', 'Git', 'Github'
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300 px-1">
            <p>
              I'm <span className="font-medium text-gray-800 dark:text-gray-100">Bakari Juma</span>, a fullstack developer  with a passion for building digital solutions that make an impact. I approach problems with both technical precision and creative thinking.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work, which evolved into building applications that solve real-world challenges. I believe in writing clean, maintainable code that stands the test of time.
            </p>
          </div>
          <a 
            href="Isaac_juma_fullstack_role"
            download
            className="inline-block mt-8 px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"

          >
            Download Resume
          </a>
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Tech Stack</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-3 px-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
