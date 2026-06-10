import { useState } from "react";
import { FiPlus, FiMinus, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import "../styles/projects.css";
import { useLang } from "../LanguageContext";
import { t } from "../i18n";

// kbphotography screenshots
import ka1 from "../assets/projects/ka1.png";
import ka2 from "../assets/projects/ka2.png";
import ka3 from "../assets/projects/ka3.png";
import ka4 from "../assets/projects/ka4.png";
import ka5 from "../assets/projects/ka5.png";
import ka6 from "../assets/projects/ka6.png";
import ka7 from "../assets/projects/ka7.png";
import ka8 from "../assets/projects/ka8.png";
import ka9 from "../assets/projects/ka9.png";
import ka10 from "../assets/projects/ka10.png";

// kbphotographer linktress
import engagements from "../assets/projects/engagements.png";
import sports from "../assets/projects/sports.png";
import portraits from "../assets/projects/portraits.png";

// restaurant website screenshots
import pizza1 from "../assets/projects/pizza1.png";
import pizza2 from "../assets/projects/pizza2.png";
import pizza3 from "../assets/projects/pizza3.png";
import pizza4 from "../assets/projects/pizza4.png";
import pizza5 from "../assets/projects/pizza5.png";

// game library screenshots
import gl1 from "../assets/projects/gl1.png";
import gl2 from "../assets/projects/gl2.png";
import gl3 from "../assets/projects/gl3.png";
import gl4 from "../assets/projects/gl4.png";

// seals documentary screenshots
import seals1 from "../assets/projects/seals1.png";
import seals2 from "../assets/projects/seals2.png";
import seals3 from "../assets/projects/seals3.png";
import seals4 from "../assets/projects/seals4.png";
import seals5 from "../assets/projects/seals5.png";
import seals6 from "../assets/projects/seals6.png";

// calculator screenshots
import calc1 from "../assets/projects/calc1.png";
import calc2 from "../assets/projects/calc2.png";
import calc3 from "../assets/projects/calc3.png";
import calc4 from "../assets/projects/calc4.png";

// tic-tac-toe screenshots
import tic1 from "../assets/projects/tic1.png";
import tic2 from "../assets/projects/tic2.png";
import tic3 from "../assets/projects/tic3.png";
import tic4 from "../assets/projects/tic4.png";

// rock-paper-scissors screenshots
import rps1 from "../assets/projects/rps1.png";
import rps2 from "../assets/projects/rps2.png";
import rps3 from "../assets/projects/rps3.png";
import rps4 from "../assets/projects/rps4.png";

// travel agency screenshots
import boot1 from "../assets/projects/boot1.png";
import boot2 from "../assets/projects/boot2.png";
import boot3 from "../assets/projects/boot3.png";
import boot4 from "../assets/projects/boot4.png";
import boot5 from "../assets/projects/boot5.png";

// Images mapped by project id (stays the same regardless of language)
const projectImages = {
  1: [ka1, ka2, ka3, ka4, ka5, ka6, ka7, ka8, ka9, ka10],
  2: [engagements, sports, portraits],
  3: [pizza1, pizza2, pizza3, pizza4, pizza5],
  4: [boot1, boot2, boot3, boot4, boot5],
  5: [seals1, seals2, seals3, seals4, seals5, seals6],
  6: [calc1, calc2, calc3, calc4],
  7: [gl1, gl2, gl3, gl4],
  8: [tic1, tic2, tic3, tic4],
  9: [rps1, rps2, rps3, rps4],
};

function Carousel({ images, projectName }) {
  const [current, setCurrent] = useState(0);
  const placeholders = images.length > 0 ? images : Array(3).fill(null);
  const prev = () => setCurrent((c) => (c === 0 ? placeholders.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === placeholders.length - 1 ? 0 : c + 1));

  return (
    <div className="carousel">
      <button className="carouselBtn left" onClick={prev} aria-label="Previous">
        <FiChevronLeft size={20} />
      </button>
      <div className="carouselTrack">
        {placeholders[current] ? (
          <img src={placeholders[current]} alt={`${projectName} screenshot ${current + 1}`} />
        ) : (
          <div className="carouselPlaceholder">
            <span>screenshot {current + 1}</span>
          </div>
        )}
      </div>
      <button className="carouselBtn right" onClick={next} aria-label="Next">
        <FiChevronRight size={20} />
      </button>
      <div className="carouselDots">
        {placeholders.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectItem({ project, openId, setOpenId, visitLabel }) {
  const isOpen = openId === project.id;
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isOpen]);

  const images = projectImages[project.id] || [];

  return (
    <div className={`projectItem ${isOpen ? "open" : ""}`} ref={ref}>
      <button className="projectToggle" onClick={() => setOpenId(isOpen ? null : project.id)}>
        <div className="projectToggleLeft">
          <span className="projectIndex">0{project.id}</span>
          <span className="projectToggleName">{project.name}</span>
          <div className="projectStack">
            {project.stack.map((s) => (
              <span className="stackTag" key={s}>{s}</span>
            ))}
          </div>
        </div>
        <span className="projectToggleIcon">
          {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </span>
      </button>

      {isOpen && (
        <div className="projectDetails">
          <Carousel images={images} projectName={project.name} />
          <div className="projectContent">
            <p className="projectDescription">{project.description}</p>
            <ul className="featureList">
              {project.features.map((f) => (
                <li key={f}><span className="featureDot">&gt;</span> {f}</li>
              ))}
            </ul>
            {project.links ? (
              <div className="projectLinks">
                {project.links.map(({ label, url }) => (
                  <a key={url} href={url} target="_blank" rel="noreferrer" className="projectLink">
                    {label} <FiExternalLink size={13} />
                  </a>
                ))}
              </div>
            ) : project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer" className="projectLink">
                {visitLabel} <FiExternalLink size={13} />
              </a>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const { state } = useLocation();
  const [openId, setOpenId] = useState(state?.openId || null);
  const { lang } = useLang();
  const p = t.projects;

  const projects = p.data[lang];

  return (
    <main className="projects">
      <div className="projectsHeader">
        <h1 className="projectsTitle">
          <span className="prompt">&gt;</span> {p.title[lang]}
        </h1>
        <p className="projectsSub">{p.sub[lang]}</p>
      </div>

      <div className="projectsList">
        {projects.map((proj) => (
          <ProjectItem
            key={proj.id}
            project={proj}
            openId={openId}
            setOpenId={setOpenId}
            visitLabel={p.visit[lang]}
          />
        ))}
      </div>
    </main>
  );
}