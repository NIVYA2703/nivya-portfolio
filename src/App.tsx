import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Code2,
  BrainCircuit,
  Globe2,
  MapPin,
  Sparkles,
  ChevronRight,
  Terminal,
  Layers3,
  Trophy,
  Award,
  GraduationCap,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

const profile = {
  name: "Nivya J",
  role: "AI & Machine Learning Student",
  email: "nivyaj504@gmail.com",
  linkedin: "https://www.linkedin.com/in/nivya-j-0881803b7",
  github: "https://github.com/NIVYA2703",
};

const projects = [
  {
    number: "01",
    name: "AirShield",
    category: "GEOSPATIAL · ENVIRONMENTAL INTELLIGENCE",
    description: "A hyperlocal pollution intelligence and climate action platform designed to visualize environmental events, pollution indicators, and local risk information.",
    tags: ["React", "TypeScript", "Leaflet", "API Integration"],
    icon: <Globe2 size={23} />,
    link: "#contact",
    linkLabel: "Repository link to be added",
    featured: true,
  },
  {
    number: "02",
    name: "Personal Expense Tracker",
    category: "JAVA · CONSOLE APPLICATION",
    description: "A Java application for recording expenses, viewing and deleting entries, calculating total spending, and summarizing expenses by category with file-based storage.",
    tags: ["Java", "File Handling", "Git", "GitHub"],
    icon: <Layers3 size={23} />,
    link: "https://github.com/NIVYA2703/java-personal-expense-tracker",
    linkLabel: "View on GitHub",
    featured: false,
  },
];

const certifications = [
  { name: "Introduction to Machine Learning", issuer: "NPTEL", detail: "Score: 65%" },
  { name: "Python for Beginners", issuer: "Unstop", detail: "July 2026" },
  { name: "C Programming Certification", issuer: "INET Technologies", detail: "June–September 2026" },
  { name: "Web Design", issuer: "Infocs", detail: "May 2026" },
  { name: "Python with Machine Learning", issuer: "Mindenious", detail: "February–March 2026" },
];

const hackathons = [
  { title: "Adobe Hackathon", note: "Team participation · Advanced to the second round" },
  { title: "Odoo Hackathon", note: "Team-based challenge and collaborative problem-solving" },
  { title: "Devfest Hackathon — AirShield", note: "Contributed to frontend development and geospatial visualization" },
  { title: "Smart India Hackathon (SIH)", note: "Shortlisted in the institution's internal hackathon; worked with a six-member team on an AI-based disaster management prototype" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Nivya home">
          <span className="brand-mark">N<span>.</span></span>
          <span className="brand-name">NIVYA J<span className="brand-dot">/</span></span>
        </a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["About", "Skills", "Projects", "Journey", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#projects" onClick={closeMenu}>Explore work <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> PORTFOLIO · 2026</div>
            <h1>Curious mind.<br /><span className="gradient-text">Builder's mindset.</span></h1>
            <p className="hero-lead">
              Hey, I'm <strong>Nivya</strong> — an AI & Machine Learning student exploring the intersection of intelligent systems, thoughtful design, and real-world problem solving.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="#contact">Let's connect <ChevronRight size={17} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> Coimbatore, India</span>
              <span className="meta-divider" />
              <span><Sparkles size={15} /> Always learning</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract developer illustration">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-grid" />
            <div className="code-window">
              <div className="window-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>about_nivya.ts</span>
                <Terminal size={14} />
              </div>
              <div className="code-content">
                <p><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</p>
                <p><span className="code-muted">02</span> &nbsp; mindset: <span className="code-green">"curious"</span>,</p>
                <p><span className="code-muted">03</span> &nbsp; focus: <span className="code-green">"AI + ML"</span>,</p>
                <p><span className="code-muted">04</span> &nbsp; learning: <span className="code-green">true</span>,</p>
                <p><span className="code-muted">05</span> &nbsp; build: <span className="code-yellow">"useful things"</span></p>
                <p><span className="code-muted">06</span> {"}"};</p>
              </div>
              <div className="code-footer"><span className="status-dot" /> open to learning & collaboration</div>
            </div>
            <div className="floating-chip chip-ai"><BrainCircuit size={17} /><span>AI / ML</span></div>
            <div className="floating-chip chip-code"><Code2 size={17} /><span>Build · Learn · Repeat</span></div>
            <div className="visual-caption">IDEAS → EXPERIMENTS → IMPACT</div>
          </div>
          <a href="#about" className="scroll-cue"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div className="strip-item"><span className="strip-number">01</span><span>Learn with intention</span></div>
          <div className="strip-item"><span className="strip-number">02</span><span>Build through practice</span></div>
          <div className="strip-item"><span className="strip-number">03</span><span>Grow through collaboration</span></div>
        </section>

        <section className="section-wrap content-section" id="about">
          <div className="section-kicker">01 / A LITTLE ABOUT ME</div>
          <div className="about-layout">
            <div>
              <h2>Technology is more than code.<br /><span className="muted-heading">It's a way to solve problems.</span></h2>
            </div>
            <div className="about-body">
              <p>I'm pursuing a B.E. in Artificial Intelligence and Machine Learning at VSB College of Engineering & Technical Campus. I enjoy learning by building, exploring new technologies, and working with teams to turn ideas into practical prototypes.</p>
              <p>From a Java expense tracker to AirShield's environmental intelligence dashboard, each project helps me strengthen my foundations and discover what I can create next.</p>
              <div className="about-facts">
                <div className="fact"><GraduationCap size={18} /><div><strong>Education</strong><span>B.E. AI & Machine Learning</span></div></div>
                <div className="fact"><MapPin size={18} /><div><strong>Based in</strong><span>Coimbatore, India</span></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="skills">
          <div className="section-kicker">02 / MY TOOLKIT</div>
          <div className="section-heading-row">
            <h2>Skills in progress.<br /><span className="muted-heading">Foundations that grow.</span></h2>
            <p>I'm building strong fundamentals and improving through consistent practice and projects.</p>
          </div>
          <div className="skills-grid">
            <article className="skill-card"><div className="skill-icon purple"><Code2 size={21} /></div><h3>Programming</h3><p>C · Java basics · Python basics</p><div className="skill-line"><span style={{width:"78%"}} /></div><small>Core programming foundations</small></article>
            <article className="skill-card"><div className="skill-icon blue"><Globe2 size={21} /></div><h3>Web Development</h3><p>HTML · CSS · JavaScript</p><div className="skill-line"><span style={{width:"66%"}} /></div><small>Building user interfaces</small></article>
            <article className="skill-card"><div className="skill-icon mint"><BrainCircuit size={21} /></div><h3>AI & Machine Learning</h3><p>Foundational concepts · Ongoing learning</p><div className="skill-line"><span style={{width:"48%"}} /></div><small>Learning through coursework</small></article>
            <article className="skill-card"><div className="skill-icon orange"><Terminal size={21} /></div><h3>Tools & Data</h3><p>Git · GitHub · VS Code · Eclipse · SQL</p><div className="skill-line"><span style={{width:"62%"}} /></div><small>Practicing with real projects</small></article>
          </div>
          <p className="fine-print">Skill bars are illustrative, not formal proficiency ratings. They can be adjusted or removed as your skills develop.</p>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap content-section">
            <div className="section-kicker">03 / SELECTED WORK</div>
            <div className="section-heading-row">
              <h2>Small steps.<br /><span className="muted-heading">Real things built.</span></h2>
              <p>Projects are where concepts become experience. Here are a couple of things I've worked on.</p>
            </div>
            <div className="projects-grid">
              {projects.map(project => (
                <article className={`project-card ${project.featured ? "project-featured" : ""}`} key={project.number}>
                  <div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-symbol">{project.icon}</span></div>
                  <div className="project-category">{project.category}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <a className="project-link" href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {project.linkLabel} <ArrowUpRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="journey">
          <div className="section-kicker">04 / LEARNING & EXPERIENCE</div>
          <div className="section-heading-row">
            <h2>Every experience<br /><span className="muted-heading">adds a new layer.</span></h2>
            <p>Training, teamwork, and hands-on challenges are part of my learning journey.</p>
          </div>
          <div className="journey-grid">
            <div className="journey-column">
              <div className="column-title"><Layers3 size={18} /> EXPERIENCE</div>
              <article className="timeline-item"><span className="timeline-dot" /><div><span className="timeline-date">JUNE 2026</span><h3>Full Stack Development Intern</h3><p className="timeline-org">Infocs · Virtual</p><p>Worked on the frontend interface of an AI chatbot using HTML, CSS, and JavaScript.</p></div></article>
              <article className="timeline-item"><span className="timeline-dot" /><div><span className="timeline-date">MAR – APR 2026</span><h3>Python with Machine Learning Training</h3><p className="timeline-org">Mindenious · Virtual</p><p>Attended training sessions and learned foundational Python and machine learning concepts.</p></div></article>
            </div>
            <div className="journey-column">
              <div className="column-title"><Trophy size={18} /> HACKATHONS</div>
              {hackathons.map(item => <article className="achievement-item" key={item.title}><div className="achievement-icon"><Award size={18} /></div><div><h3>{item.title}</h3><p>{item.note}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="section-wrap content-section cert-section">
          <div className="section-kicker">05 / CONTINUOUS LEARNING</div>
          <div className="section-heading-row">
            <h2>Learning, one<br /><span className="muted-heading">certificate at a time.</span></h2>
            <p>Courses and certifications that support my growing technical foundation.</p>
          </div>
          <div className="cert-list">
            {certifications.map((cert, index) => (
              <div className="cert-row" key={cert.name}>
                <span className="cert-index">0{index + 1}</span>
                <div className="cert-main"><h3>{cert.name}</h3><span>{cert.issuer}</span></div>
                <span className="cert-detail">{cert.detail}</span>
                <Award size={18} className="cert-award" />
              </div>
            ))}
          </div>
          <p className="fine-print">Add certificate links or credential IDs here when available.</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-kicker">06 / LET'S CONNECT</div>
            <h2>Good things start<br />with a <span className="gradient-text">conversation.</span></h2>
            <p>Have an interesting idea, a project to collaborate on, or an opportunity to share? I'd be happy to connect.</p>
            <div className="contact-actions">
              <button className="button button-primary" onClick={copyEmail}><Mail size={17} /> {copied ? "Email copied!" : "Copy email address"}</button>
              <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedin size={17} /> LinkedIn <ArrowUpRight size={15} /></a>
              <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer"><FaGithub size={17} /> GitHub <ArrowUpRight size={15} /></a>
            </div>
            <a className="email-text" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">N<span>.</span></span><span className="brand-name">NIVYA J<span className="brand-dot">/</span></span></a>
        <p>Designed with curiosity. Built one step at a time.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <span className="copyright">© 2026 Nivya J</span>
      </footer>
    </div>
  );
}

export default App;
