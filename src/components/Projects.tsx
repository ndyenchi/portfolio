import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
              Portfolio
            </span>
          </div>
          <h2 className="heading-2 mb-6">Featured Projects</h2>
          <p className="body-large max-w-2xl mx-auto">
            Some of my recent work and side projects that showcase my skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 grid-auto-rows-1fr">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-fade-in h-full"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition duration-300"></div>

              <div className="relative h-full card-hover rounded-2xl transition-all group-hover:shadow-2xl flex flex-col ">
                {/* <div className="relative h-full rounded-2xl border border-border overflow-hidden transition-all group-hover:border-blue-500/50 group-hover:shadow-2xl flex flex-col"> */}
                {/* Project Image/Placeholder */}
                {project.image ? (
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay for buttons */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3 z-20 pointer-events-auto">
                      {" "}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition"
                        >
                          Code
                        </a>
                      )}
                    </div>

                    <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent opacity-60"></div>
                  </div>
                ) : (
                  <div className="relative h-52 bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                )}

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-text-secondary"
                        >
                          <svg
                            className="w-4 h-4 mr-2 mt-0.5 text-blue-500 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5 border-t border-border mt-auto pt-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
