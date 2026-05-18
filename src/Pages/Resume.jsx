import "../styles/resume.css";
import { FiDownload, FiExternalLink } from "react-icons/fi";


const skills = [
  "JavaScript", "TypeScript", "React",
  "HTML", "CSS", "Git & GitHub",
  "English (Fluent)", "Portuguese (Native)",
];

const experience = [
  {
    role: "Front-End Developer (Freelance)",
    company: "KBPhotographer",
    link: "https://kbphotographer.com/",
    period: "Jan 2026 – Apr 2026",
    bullets: [
      "Designed and developed a high-performance, responsive web application.",
      "Implemented a multi-language (EN/PT) interface for a global user base.",
      "Built the front-end using React, JavaScript (ES6+), HTML5, and CSS3.",
      "Integrated third-party services (HoneyBook, Pic-Time) into a React-based application.",
      "Applied component-based architecture and optimized UX, performance, and accessibility.",
    ],
  },
];

const projects = [
  {
    name: "KBPhotograph",
    description: "Bilingual (EN/PT) photography portfolio focused on professional presentation, online portfolio structure, and streamlined client contact.",
    link: "https://kbphotographer.com/",
  },
  {
    name: "Travel Agency",
    description: "Travel agency landing page built with HTML, CSS, and Bootstrap, designed to showcase destinations, services, and provide a clean, responsive user experience with easy contact access.",
    link: "https://gabbycarvalho.github.io/travel-agency/",
  },
  {
    name: "Restaurant Website",
    description: "Online pizzeria application with user interface design and interactive ordering features.",
    link: "https://gabbycarvalho.github.io/pizza-place/",
  },
  {
    name: "Informative Website",
    description:"A creative and visually engaging website about seals, built with a strong focus on layout design and visual presentation. The goal was to create an informative yet aesthetically appealing experience, combining clean structure with engaging styling techniques and a focus on accessibility.",
    link: "https://gabbycarvalho.github.io/seals/",
  },
];
const education = [
  {
    degree: "Associate Degree in Systems Analysis and Development",
    institution: "Faculdade Metropolitanas Unidas (FMU)",
    period: "Aug 2023 – Dec 2025",
  },
  {
    degree: "Fullstack JavaScript Program",
    institution: "OneBitCode",
    period: null,
  },
  {
    degree: "Essential HTML & CSS – Complete Front-End Course",
    institution: "Udemy",
    period: null,
  },
];

export default function Resume() {
  return (
    <main className="resume">

      {/* Header */}
      <section className="resumeHeader">
        <div className="resumeHeaderText">
          <h1 className="resumeName">Gabriela <span>Carvalho</span></h1>
          <p className="resumeSub">Front-End Developer · São Paulo, Brazil · Open to Remote</p>
        </div>
        <a
          href="/Gabriela_Carvalho_english.pdf"
          download
          className="downloadBtn"
        >
          <FiDownload /> Download CV
        </a>
      </section>

      {/* Skills */}
      <section className="resumeSection">
        <h2 className="sectionTitle"><span className="prompt">&gt;</span> Technical Skills</h2>
        <div className="skillsGrid">
          {skills.map((s) => (
            <span className="skillTag" key={s}>{s}</span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="resumeSection">
        <h2 className="sectionTitle"><span className="prompt">&gt;</span> Work Experience</h2>
        {experience.map((exp) => (
          <div className="expCard" key={exp.company}>
            <div className="expHeader">
              <div>
                <h3 className="expRole">{exp.role}</h3>
                <a href={exp.link} target="_blank" rel="noreferrer" className="expCompany">
                  {exp.company} <FiExternalLink size={12} />
                </a>
              </div>
              <span className="expPeriod">{exp.period}</span>
            </div>
            <ul className="expList">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="resumeSection">
        <h2 className="sectionTitle"><span className="prompt">&gt;</span> Projects</h2>
        <div className="projectsGrid">
          {projects.map((p) => (
            <div className="projectCard" key={p.name}>
              <h3 className="projectName">{p.name}</h3>
              <p className="projectDesc">{p.description}</p>
              <a href={p.link} target="_blank" rel="noreferrer" className="projectLink">
                View project <FiExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="resumeSection">
        <h2 className="sectionTitle"><span className="prompt">&gt;</span> Education</h2>
        <div className="eduList">
          {education.map((e) => (
            <div className="eduItem" key={e.degree}>
              <div>
                <h3 className="eduDegree">{e.degree}</h3>
                <p className="eduInstitution">{e.institution}</p>
              </div>
              {e.period && <span className="eduPeriod">{e.period}</span>}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
