export default function About() {
  const techStack = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 
    'Node.js', 'Python', 'Flask', 'PostgreSQL',
    'MongoDB', 'Tailwind CSS', 'Git', 'Docker'
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            <p>
              I'm <span className="font-medium text-gray-800 dark:text-gray-100">Bakari Juma</span>, a fullstack developer based in Nairobi with a passion for building digital solutions that make an impact. I approach problems with both technical precision and creative thinking.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work, which evolved into building applications that solve real-world challenges. I believe in writing clean, maintainable code that stands the test of time.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open source, mentoring junior developers, or exploring new technologies in the ever-evolving web ecosystem.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Tech Stack</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
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

        {/* Optional experience timeline or metrics */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '30+', label: 'Projects Completed' },
            { value: '∞', label: 'Cups of Coffee' },
            { value: '100%', label: 'Passion' }
          ].map((item) => (
            <div key={item.label} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{item.value}</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{item.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}