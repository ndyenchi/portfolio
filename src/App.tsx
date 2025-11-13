import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const skills = {
    frontend: ['React', 'Angular', 'TypeScript', 'Vite', 'MUI', 'Tailwind', 'Mantine', 'Shadcn'],
    backend: ['Node.js', 'Express', 'Java', 'Spring Boot', 'JSF', 'Docker'],
    database: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
    tools: ['Git', 'GitHub', 'Jira', 'Agile/Scrum']
  }

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'SAIGONTEK',
      period: 'July 2023 – Present',
      projects: [
        {
          name: 'Multi-Account Crypto Trading Tool',
          description: [
            'Built a trading platform that supports multiple exchange accounts (Binance, Bybit)',
            'Designed and implemented reusable UI components, supporting multi-language and dark mode',
            'Integrated REST/WebSocket APIs for real-time trading data',
            'Optimized rendering performance to ensure smooth cross-device experiences',
            'Developed modules for order form, order book, trading history, and filtering'
          ],
          techStack: 'React, Mantine, Shadcn, Tailwind',
          teamSize: '4 members (2 Front-end, 2 Back-end)'
        },
        {
          name: 'Inventory Management System',
          description: [
            'Developed a web-based system for inventory and order management',
            'Developed core CRUD modules for Sales Products, Delivery Orders, Purchase Requests, Stock by Supplier & Product'
          ],
          techStack: 'React, MUI, Tailwind',
          teamSize: '3 members (2 Front-end, 1 BA, Back-end by customer)'
        }
      ]
    },
    {
      title: 'Fullstack Developer',
      company: 'TPS Software',
      period: 'June 2022 – March 2023',
      projects: [
        {
          name: 'Multi-platform e-commerce software',
          description: [
            'Maintained and enhanced the existing system as part of an outsourced project',
            'Developed and maintained multiple systems: Web & Mobile App, Affiliate Web, Tenants Web, Merchant Web, Admin Web',
            'Maintained and developed Angular modules for multiple web platforms',
            'Implemented APIs with Spring Boot for order management and authentication',
            'Wrote and optimized SQL queries for PostgreSQL, MySQL, MongoDB',
            'Collaborated with a 16-member Agile team, participating in sprint planning'
          ],
          techStack: 'Java (Spring Boot), Angular, PostgreSQL, MySQL, MongoDB',
          teamSize: '16 members (including 7 BE developers)'
        }
      ]
    }
  ]

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">YC</div>
          <ul className="nav-menu">
            {['home', 'about', 'skills', 'experience', 'education', 'contact'].map(section => (
              <li key={section}>
                <button
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Nguyen Do Yen Chi</span>
            </h1>
            <h2 className="hero-subtitle">Frontend Developer</h2>
            <p className="hero-description">
              Building exceptional digital experiences with modern web technologies.
              Nearly 3 years of experience in developing scalable and user-friendly web applications.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('experience')}>
                View My Work
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="avatar-placeholder">
              <span>YC</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate Frontend Developer with nearly 3 years of experience in building web applications.
                I specialize in creating intuitive, responsive user interfaces using modern frameworks and libraries.
              </p>
              <p>
                My expertise lies in <strong>React</strong> and <strong>TypeScript</strong>, with extensive experience
                in UI frameworks like <strong>Tailwind</strong>, <strong>MUI</strong>, and <strong>Mantine</strong>.
                I also have a solid fullstack background, having worked with <strong>Java Spring Boot</strong>,
                <strong>Node.js</strong>, and various databases.
              </p>
              <p>
                I'm always eager to learn new technologies and take on challenging projects that push my boundaries.
                I believe in writing clean, maintainable code and creating seamless user experiences.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">20+</div>
                <div className="stat-label">Technologies Used</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="category-icon">🎨</div>
              <h3>Frontend Development</h3>
              <div className="skill-tags">
                {skills.frontend.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="category-icon">⚙️</div>
              <h3>Backend Development</h3>
              <div className="skill-tags">
                {skills.backend.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="category-icon">🗄️</div>
              <h3>Database</h3>
              <div className="skill-tags">
                {skills.database.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="category-icon">🛠️</div>
              <h3>Tools & Workflow</h3>
              <div className="skill-tags">
                {skills.tools.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <div>
                      <h3>{exp.title}</h3>
                      <h4>{exp.company}</h4>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                  {exp.projects.map((project, pIndex) => (
                    <div key={pIndex} className="project-card">
                      <h4 className="project-name">{project.name}</h4>
                      <ul className="project-details">
                        {project.description.map((detail, dIndex) => (
                          <li key={dIndex}>{detail}</li>
                        ))}
                      </ul>
                      <div className="project-meta">
                        <p><strong>Tech Stack:</strong> {project.techStack}</p>
                        <p><strong>Team Size:</strong> {project.teamSize}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <div className="education-content">
              <h3>Posts and Telecommunications Institute of Technology</h3>
              <p className="education-location">Ho Chi Minh City</p>
              <p className="education-major"><strong>Major:</strong> Information Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="contact-grid">
            <a href="mailto:nguyendoyenchi215@gmail.com" className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>nguyendoyenchi215@gmail.com</p>
            </a>
            <a href="tel:0393377215" className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>039 337 7215</p>
            </a>
            <a href="#" className="contact-card" onClick={(e) => e.preventDefault()}>
              <div className="contact-icon">🔗</div>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Nguyen Do Yen Chi. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
