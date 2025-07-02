export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 py-20 overflow-hidden">
      
      {/* Blurred floating blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 dark:opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative w-full max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight break-words">
          <span className="inline-block">Hey, I'm</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
            Bakari Juma
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
          Fullstack Developer & Problem Solver
        </h2>

        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
          I craft clean, scalable web applications with thoughtful architecture and 
          delightful user experiences. Currently focused on building tools that 
          solve real problems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 px-2">
          <a 
            href="#projects" 
            className="px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            View My Work 
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 hidden md:block animate-bounce">
        <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
