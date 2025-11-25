import { personalInfo } from "../data/portfolio";

export function Home() {
  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="mb-8 animate-fade-in">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Welcome to my portfolio
              </span>
            </div>

            {/* Main Heading with staggered animation */}
            <div
              className="mb-6 animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              <h1 className="heading-1 mb-4">
                <span className="block text-text-secondary text-2xl md:text-3xl font-normal mb-2">
                  Hi, I'm
                </span>
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-lg"></span>
                  <span className="relative gradient-primary bg-clip-text text-transparent font-bold">
                    {personalInfo.name}
                  </span>
                </span>
              </h1>
            </div>

            {/* Title */}
            <div
              className="mb-8 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <p className="heading-3 text-text-primary font-semibold">
                {personalInfo.title}
              </p>
            </div>

            {/* Bio with better styling */}
            <div
              className="mb-12 animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
                {personalInfo.bio}
              </p>
            </div>

            {/* Enhanced Buttons */}
            <div
              className="flex flex-wrap gap-4 mb-16 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-transform group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg
                  className="w-5 h-5 mr-2 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="relative z-10">Get in touch</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-text-primary rounded-xl border-2 border-border hover:border-blue-500  backdrop-blur-sm transition-all hover:scale-105 active:scale-95 hover:shadow-lg"
                download
              >
                <svg
                  className="w-5 h-5 mr-2 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
          {/* Avatar Section */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              {/* Gradient Background */}
              <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>

              {/* Avatar Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500 to-purple-500 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-bg-primary"></div>
                </div>
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-full object-cover border-4 border-bg-primary"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator with animation */}
        <div className="animate-fade-in" style={{ animationDelay: "500ms" }}>
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-text-tertiary hover:text-blue-500 transition-colors group"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="relative">
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
