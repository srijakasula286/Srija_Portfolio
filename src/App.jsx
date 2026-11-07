
import './App.css';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

// NAVBAR
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="brand">
        <div className="logo">
          <span>&lt;</span>/ <span>&gt;</span>
        </div>
        <h2>
          Srijaa <span>Kasula</span>
        </h2>
      </a>

      <div className="nav-links">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="/Srija_Resume.pdf" className="resume-btn" download>
        ↓ Resume
      </a>
    </nav>
  );
}

// HOME
function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <p className="greeting">HELLO, I'M</p>

        <h1>Srijaa Kasula</h1>

        <h2>Aspiring Software Developer</h2>

        <p className="description">
          I'm a Computer Science Engineering student passionate
          about software development, problem-solving and building
          meaningful technology solutions.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/srijakasula286"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <SiGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>
        </div>

        <a href="#projects" className="explore-btn">
          Explore My Work →
        </a>
      </div>

      <div className="home-image">
        <div className="image-circle">
          &lt;/&gt;
        </div>
        <p>Building ideas into reality.</p>
      </div>
    </section>
  );
}

// ABOUT
function About() {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-container">
        <div className="about-card">
          <div className="about-icon">🎓</div>
          <h3>Education</h3>
          <p>B.Tech in Computer Science Engineering</p>
          <p>Vignan Institute of Technology and Science</p>
        </div>

        <div className="about-content">
          <h3>Hello! I'm Srijaa Kasula.</h3>

          <p>
            I'm a Computer Science Engineering student
            passionate about software development and
            problem-solving.
          </p>

          <p>
            I enjoy solving Data Structures and Algorithms
            problems using C++ and exploring full-stack
            development and Artificial Intelligence.
          </p>

          <p>
            My goal is to become a skilled Software
            Development Engineer and build impactful
            technology solutions.
          </p>

          <div className="about-stats">
            <div>
              <h2>8.5</h2>
              <p>CGPA</p>
            </div>

            <div>
              <h2>B.Tech</h2>
              <p>Degree</p>
            </div>

            <div>
              <h2>CSE</h2>
              <p>Specialization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// SKILLS
function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "JavaScript"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Node.js"]
    },
    {
      title: "Computer Science",
      skills: ["Data Structures & Algorithms", "DBMS", "OOP", "SQL"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Vercel"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-heading">
        <p>WHAT I WORK WITH</p>
        <h2>Technical Skills</h2>
        <span>
          Technologies and tools I use to build and solve problems.
        </span>
      </div>

      <div className="skills-container">
        {skillGroups.map((group, index) => (
          <div className="skill-card" key={index}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-item" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// PROJECTS
function Projects() {
  const projects = [
    {
      title: "AI-Powered Code Review System",
      description:
        "An AI-based code review platform designed to analyze code, identify potential issues and provide intelligent suggestions for improving code quality.",
      tech: ["React", "Next.js", "Python", "AI", "Semgrep"],
      status: "In Progress",
           github: "https://github.com/srijakasula286/AI-Powered-Code-Review-System",
      demo: "https://ai-powered-code-review-system-sqmf.vercel.app/"
    },
    {
  title: "Campus Pulse",
  description:
    "A campus notification platform designed to help students and faculty access important announcements and college updates.",
  tech: ["React", "JavaScript", "CSS", "Vercel"],
  status: "Project",
  github: "https://github.com/srijakasula286/campus-pulse",
  demo: "#"
},
    {
      title: "Tic-Tac-Toe Game",
      description:
        "An interactive two-player Tic-Tac-Toe game with customizable player names, winning announcements and a reset option.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      github: "https://github.com/srijakasula286/Tic-Tac-Toe_Srija",
      demo: "https://srijakasula286.github.io/Tic-Tac-Toe_Srija/"
    },
    {
      title: "Fifteen Puzzle",
      description:
        "A classic number-sliding puzzle game where players arrange numbered tiles in the correct order.",
      tech: ["HTML", "JavaScript"],
      status: "Project",
      github: "https://github.com/srijakasula286/Fifteen_Puzzle",
      demo: "https://srijakasula286.github.io/Fifteen_Puzzle/"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <p>MY WORK</p>
        <h2>Projects</h2>
        <span>Some of the projects I have worked on.</span>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <span className="project-status">
              {project.status}
            </span>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-buttons">
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              )}

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ACHIEVEMENTS
function Achievements() {
  const achievements = [
    {
      title: "Artificial Intelligence",
      organization: "Infosys Springboard",
      description:
        "Selected for the Artificial Intelligence learning program.",
      type: "Learning Program"
    },
    {
      title: "Agent Architect",
      organization: "Google Build with AI Bootcamp",
      description:
        "Completed learning activities focused on AI agents.",
      type: "Bootcamp"
    },
    {
      title: "Google Gen AI Academy",
      organization: "Google",
      description:
        "Participated in the Gen AI Academy ADK learning track.",
      type: "Learning Program"
    }
  ];

  return (
    <section className="achievements" id="achievements">
      <div className="achievements-heading">
        <p>MY LEARNING JOURNEY</p>
        <h2>Achievements & Certifications</h2>
        <span>
          Learning, growing and improving my technical skills.
        </span>
      </div>

      <div className="achievements-container">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-icon">
              🏆
            </div>

            <span className="achievement-type">
              {item.type}
            </span>

            <h3>{item.title}</h3>
            <h4>{item.organization}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// CONTACT
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <p>LET'S CONNECT</p>
        <h2>Get In Touch</h2>
        <span>
          Have an opportunity or exciting project?
          I'd love to hear from you.
        </span>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's work together!</h3>

          <p>
            I'm always interested in learning new
            technologies, collaborating on projects
            and exploring software development opportunities.
          </p>

          <div className="contact-detail">
            <span>✉️</span>
            <div>
              <h4>Email</h4>
              <p>YOUR_EMAIL@gmail.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>💻</span>
            <div>
              <h4>GitHub</h4>
              <a
                href="https://github.com/srijakasula286"
                target="_blank"
                rel="noreferrer"
              >
                Visit GitHub Profile
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <span>🔗</span>
            <div>
              <h4>LinkedIn</h4>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                Connect with me
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Me a Message</h3>

          <form
            action="https://formsubmit.co/YOUR_EMAIL@gmail.com"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// MAIN APP
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />

      <footer className="footer">
        <h3>Srijaa Kasula</h3>
        <p>Building ideas into reality.</p>
        <p>© 2026 Srijaa Kasula. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
