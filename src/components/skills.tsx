import { skills } from "../data/portfolio";

const categoryColors = {
  frontend: {
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-blue-500/50",
  },
  backend: {
    bg: "bg-green-500/10",
    text: "text-green-500",
    border: "border-green-500/20",
    glow: "group-hover:shadow-green-500/50",
  },
  tools: {
    bg: "bg-purple-500/10",
    text: "text-purple-500",
    border: "border-purple-500/20",
    glow: "group-hover:shadow-purple-500/50",
  },
  other: {
    bg: "bg-gray-500/10",
    text: "text-gray-500",
    border: "border-gray-500/20",
    glow: "group-hover:shadow-gray-500/50",
  },
};

export function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools",
    other: "Mobile",
  };

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
              Expertise
            </span>
          </div>
          <h2 className="heading-2 mb-6 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="body-large max-w-2xl mx-auto text-text-secondary">
            Technologies and tools I work with to build modern applications
          </p>
        </div>

        {/* 3 Column Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(groupedSkills).map(
            ([category, categorySkills], catIndex) => {
              const colors =
                categoryColors[category as keyof typeof categoryColors];
              const label =
                categoryLabels[category as keyof typeof categoryLabels];

              return (
                <div
                  key={category}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${catIndex * 100}ms` }}
                >
                  {/* Card */}
                  <div className="relative bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-8 transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-2xl group-hover:shadow-purple-500/10 h-full">
                    {/* Category Header */}
                    <h3 className="text-2xl font-bold mb-8 text-center bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      {label}
                    </h3>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {categorySkills.map((skill, index) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-500/5 transition-all duration-300 group/item"
                          style={{
                            animationDelay: `${catIndex * 100 + index * 50}ms`,
                          }}
                        >
                          {/* Icon */}
                          <div
                            className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center ${colors.text} transition-transform group-hover/item:scale-110`}
                          >
                            {skill.icon ? (
                              <span className="text-2xl">{skill.icon}</span>
                            ) : (
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                              </svg>
                            )}
                          </div>

                          {/* Skill Name */}
                          <span className="text-base font-medium text-text-primary group-hover/item:text-blue-400 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
