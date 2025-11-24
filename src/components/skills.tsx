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

const categoryIcons = {
  frontend: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  backend: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    </svg>
  ),
  tools: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  other: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    </svg>
  ),
};

export function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
              Expertise
            </span>
          </div>
          <h2 className="heading-2 mb-6">Skills & Technologies</h2>
          <p className="body-large max-w-2xl mx-auto">
            Technologies and tools I work with to build modern applications
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(
            ([category, categorySkills], catIndex) => {
              const colors =
                categoryColors[category as keyof typeof categoryColors];
              const icon =
                categoryIcons[category as keyof typeof categoryIcons];

              return (
                <div
                  key={category}
                  className="animate-fade-in"
                  style={{ animationDelay: `${catIndex * 100}ms` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-2 rounded-lg ${colors.bg} ${colors.text}`}
                    >
                      {icon}
                    </div>
                    <h3 className="text-2xl font-bold capitalize">
                      {category}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4"></div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {categorySkills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className={`group relative animate-fade-in`}
                        style={{
                          animationDelay: `${catIndex * 100 + index * 50}ms`,
                        }}
                      >
                        {/* Hover glow effect */}
                        <div
                          className={`absolute -inset-0.5 ${colors.bg} rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300`}
                        ></div>

                        <div
                          className={`relative ${colors.bg} ${colors.border} border rounded-xl p-4 transition-all group-hover:scale-105 group-hover:shadow-lg ${colors.glow}`}
                        >
                          <div className="flex flex-col items-center text-center gap-2">
                            {skill.icon && (
                              <span className="text-3xl">{skill.icon}</span>
                            )}
                            <span
                              className={`font-semibold ${colors.text} text-sm`}
                            >
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
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
