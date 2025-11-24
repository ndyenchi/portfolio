import { education } from "../data/portfolio";

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
