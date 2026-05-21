import "../styles/resume.css";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import { useLang } from "../LanguageContext";
import { t } from "../i18n";

const skills = [
  "JavaScript", "TypeScript", "React",
  "HTML", "CSS", "Git & GitHub",
  "English (Fluent)", "Portuguese (Native)",
];

export default function Resume() {
  const { lang } = useLang();
  const r = t.resume;

  const experience = r.experienceData[lang];
  const projects   = r.projectsData[lang];
  const education  = r.educationData[lang];

  return (
    <main className="resume">

      {/* Header */}
      <section className="resumeHeader">
        <div className="resumeHeaderText">
          <h1 className="resumeName">Gabriela <span>Carvalho</span></h1>
          <p className="resumeSub">{r.sub[lang]}</p>
        </div>
        <a href={lang === "en" ? "/Gabriela_Carvalho_english.pdf" : "/Gabriela_Carvalho_portugues.pdf"}
          download
          className="downloadBtn"
        >
          <FiDownload /> {r.download[lang]}
        </a>
      </section>

      {/* Skills */}
      <section className="resumeSection">
        <h2 className="sectionTitle"><span className="prompt">&gt;</span> {r.skills[lang]}</h2>
        <div className="skillsGrid">
          {skills.map((s) => (
            <span className="skillTag" key={s}>{s}</span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="resumeSection">
        <h2 className="sectionTitle"><span className="prompt">&gt;</span> {r.experience[lang]}</h2>
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
        <h2 className="sectionTitle"><span className="prompt">&gt;</span> {r.projects[lang]}</h2>
        <div className="projectsGrid">
          {projects.map((p) => (
            <div className="projectCard" key={p.name}>
              <h3 className="projectName">{p.name}</h3>
              <p className="projectDesc">{p.description}</p>
              <a href={p.link} target="_blank" rel="noreferrer" className="projectLink">
                {r.viewProject[lang]} <FiExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="resumeSection">
        <h2 className="sectionTitle"><span className="prompt">&gt;</span> {r.education[lang]}</h2>
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