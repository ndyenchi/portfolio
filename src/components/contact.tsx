import { contactInfo } from "../data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section py-24">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-secondary mb-16">
            Ready to bring your next project to life? Let's discuss how we can
            work together.
          </p>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl transition-all hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                <svg
                  className="w-7 h-7 text-blue-400"
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
              </div>
              <div className="text-center px-2">
                <p className="text-lg font-semibold mb-1">Email</p>
                <p className="text-sm text-text-tertiary break-words">
                  {contactInfo.email}
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            {contactInfo.linkedin && (
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 p-6 rounded-2xl transition-all hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                  <svg
                    className="w-7 h-7 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold mb-1">LinkedIn</p>
                  <p className="text-sm text-text-tertiary">
                    linkedin.com/in/ndyenchi
                  </p>
                </div>
              </a>
            )}

            {/* Phone */}
            {contactInfo.phone && (
              <a
                href={`tel:${contactInfo.phone}`}
                className="group flex flex-col items-center gap-4 p-6 rounded-2xl transition-all hover:scale-105"
              >
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                  <svg
                    className="w-7 h-7 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold mb-1">Phone</p>
                  <p className="text-sm text-text-tertiary">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>
            )}

            {/* Location */}
            <div className="group flex flex-col items-center gap-4 p-6 rounded-2xl transition-all">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                <svg
                  className="w-7 h-7 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold mb-1">Location</p>
                <p className="text-sm text-text-tertiary">
                  {contactInfo.location}
                </p>
              </div>
            </div>
          </div>

          {/* Availability Status */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium text-green-400">
              Available for new opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
