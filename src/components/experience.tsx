import { experiences } from "../data/portfolio";

function formatDate(dateString: string): string {
  if (dateString.toLowerCase() === "present") return "Present";

  const [year, month] = dateString.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
              Journey
            </span>
          </div>
          <h2 className="heading-2 mb-6">Work Experience</h2>
          <p className="body-large max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 md:pl-12 animate-fade-in group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

                {/* Timeline dot */}
                <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-4 border-background group-hover:scale-150 transition-transform">
                  <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-10 blur transition duration-300"></div>

                {/* Content */}
                <div className="relative card-hover rounded-2xl transition-all group-hover:shadow-2xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="heading-4 mb-1 group-hover:text-blue-500 transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-lg font-medium text-blue-500">
                        {exp.company}
                      </p>
                      <p className="text-sm text-text-tertiary flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center gap-2 text-sm text-text-secondary bg-blue-500/10 px-3 py-1 rounded-full">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-text-secondary leading-relaxed"
                      >
                        <svg
                          className="w-5 h-5 mr-3 mt-0.5 text-blue-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
