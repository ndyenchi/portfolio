import { education } from "../data/portfolio";

function formatDate(dateString: string): string {
  if (dateString.toLowerCase() === "present") return "Present";

  const [year, month] = dateString.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export function Education() {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
              Background
            </span>
          </div>
          <h2 className="heading-2 mb-6">Education</h2>
          <p className="body-large max-w-2xl mx-auto">
            My academic background and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div
            className="group relative animate-fade-in"
            style={{
              animationDelay: `${100}ms`,
            }}
          >
            {/* Hover glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
            <div className="relative card-hover rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium text-blue-500">
                    {education.school}
                  </h3>
                  <p className="text-sm text-text-tertiary">
                    {education.degree}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center gap-2 text-sm text-text-secondary bg-blue-500/10 px-3 py-1 rounded-full">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {formatDate(education.startDate)} -{" "}
                  {formatDate(education.endDate)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
