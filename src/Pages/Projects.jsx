import { useState } from "react";
import { FiPlus, FiMinus, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import "../styles/projects.css";


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

//restaurant website screenshots
import pizza1 from "../assets/projects/pizza1.png";
import pizza2 from "../assets/projects/pizza2.png";
import pizza3 from "../assets/projects/pizza3.png";
import pizza4 from "../assets/projects/pizza4.png";
import pizza5 from "../assets/projects/pizza5.png";

//game library screenshots
import gl1 from "../assets/projects/gl1.png";
import gl2 from "../assets/projects/gl2.png";
import gl3 from "../assets/projects/gl3.png";
import gl4 from "../assets/projects/gl4.png";

//seals documentary screenshots
import seals1 from "../assets/projects/seals1.png";
import seals2 from "../assets/projects/seals2.png";
import seals3 from "../assets/projects/seals3.png";
import seals4 from "../assets/projects/seals4.png";
import seals5 from "../assets/projects/seals5.png";
import seals6 from "../assets/projects/seals6.png";

//calculator screenshots
import calc1 from "../assets/projects/calc1.png";
import calc2 from "../assets/projects/calc2.png";
import calc3 from "../assets/projects/calc3.png";
import calc4 from "../assets/projects/calc4.png";

//tic-tac-toe screenshots
import tic1 from "../assets/projects/tic1.png";
import tic2 from "../assets/projects/tic2.png";
import tic3 from "../assets/projects/tic3.png";
import tic4 from "../assets/projects/tic4.png";

//rock-paper-scissors screenshots
import rps1 from "../assets/projects/rps1.png";
import rps2 from "../assets/projects/rps2.png";
import rps3 from "../assets/projects/rps3.png";
import rps4 from "../assets/projects/rps4.png";

//travel agency screenshots
import boot1 from "../assets/projects/boot1.png";
import boot2 from "../assets/projects/boot2.png";
import boot3 from "../assets/projects/boot3.png";
import boot4 from "../assets/projects/boot4.png";
import boot5 from "../assets/projects/boot5.png";



const projects = [
  {
    id: 1,
    name: "KBPhotograph",
    stack: ["React", "JavaScript", "CSS"],
    link: "https://kbphotographer.com/",
    linkLabel: "Visit website",
    description:
      "A bilingual (EN/PT) photography portfolio focused on professional presentation of photography services, structuring an online portfolio, and streamlining client contact. Built with React and integrated with third-party services like HoneyBook and Pic-Time.",
    features: [
      "Bilingual interface (EN/PT)",
      "Third-party service integration (HoneyBook, Pic-Time)",
      "Responsive and performance-optimized",
      "Component-based architecture",
    ],
    images: [ka1, ka2, ka3, ka4, ka5, ka6, ka7, ka8, ka9, ka10], 
  },
  {
    id: 2,
    name: "Restaurant Website",
    stack: ["HTML", "CSS"],
    link: "https://gabbycarvalho.github.io/pizza-place/",
    linkLabel: "Visit website",
    description:
      "A visually appealing pizzeria website designed to create an engaging and welcoming digital experience. The main focus was presenting the restaurant's menu and brand identity through a clean layout and visually cohesive design, with attention to spacing, visual hierarchy, and responsiveness.",
    features: [
      "Responsive layout",
      "Visual hierarchy and spacing",
      "Menu presentation",
      "User-centered design",
    ],
    images: [pizza1, pizza2, pizza3, pizza4, pizza5],
  },
      {
    id: 3,
    name: "Travel Agency Website",
    stack: ["HTML", "CSS", "Bootstrap"],
    link: "https://gabbycarvalho.github.io/travel-agency/",
    linkLabel: "Visit website",
    description:
      "A travel agency website built with HTML and Bootstrap, designed to deliver a visually engaging and user-friendly browsing experience. Focused on presenting travel destinations, services, and promotional content in an organized and responsive layout.",
    features: [
      "Dynamic carousel for featured destinations",
      "Dropdown navigation menus",
      "Bootstrap grid system and utility classes",
      "Responsive across desktop and mobile",
    ],
    images: [boot1, boot2, boot3, boot4, boot5],
  },

    {
    id: 4,
    name: "Seals Informative Website",
    stack: ["HTML", "CSS"],
    link: "https://gabbycarvalho.github.io/seals/",
    linkLabel: "Visit website",
    description:
      "A creative and visually engaging website about seals, built with a strong focus on layout design and visual presentation. The goal was to create an informative yet aesthetically appealing experience, combining clean structure with engaging styling techniques and a focus on accessibility.",
    features: [
      "Semantic HTML structure",
      "CSS layout and visual hierarchy",
      "Responsive design",
      "Clean and accessible interface",
    ],
    images: [seals1, seals2, seals3, seals4, seals5, seals6],
  },

    {
    id: 5,
    name: "Calculator",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://gabbycarvalho.github.io/calculator/",
    linkLabel: "Visit website",
    description:
      "An interactive calculator built to deliver a smooth and intuitive user experience across different devices. Supports multiple mathematical operations and includes dynamic style customization, allowing users to personalize the interface in real time.",
    features: [
      "Multiple mathematical operations",
      "Dynamic style customization",
      "Responsive interface",
      "DOM manipulation and JS fundamentals",
    ],
    images: [calc1, calc2, calc3, calc4],
  },

  {
    id: 6,
    name: "Game Library",
    stack: ["React", "JavaScript", "CSS"],
    link: "https://gabbycarvalho.github.io/game-library/",
    linkLabel: "Visit website",
    description:
      "A dynamic game library application built with React that allows users to manage a personalized collection of games. Users can add games with a title and cover image, view them as cards, and remove them at any time — with real-time UI updates throughout.",
    features: [
      "Add games with title and cover image",
      "Display games in a structured card layout",
      "Remove games from the list",
      "Real-time UI updates with React state",
    ],
    images: [gl1, gl2, gl3, gl4],
  },


  {
    id: 7,
    name: "Tic-Tac-Toe",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://gabbycarvalho.github.io/tic-tac-toe/",
    linkLabel: "Visit website",
    description:
      "An interactive Tic-Tac-Toe game focused on creating an engaging and dynamic user experience. Combines game logic with an intuitive interface, featuring a real-time scoreboard, current player indicator, and winner notifications after each round.",
    features: [
      "Real-time scoreboard",
      "Current player indicator",
      "Winner notifications",
      "Responsive and clean interface",
    ],
    images: [tic1, tic2, tic3, tic4],
  },
  {
    id: 8,
    name: "Rock, Paper, Scissors",
    stack: ["React", "JavaScript", "CSS"],
    link: "https://gabbycarvalho.github.io/rock-paper-scissors/",
    linkLabel: "Visit website",
    description:
      "A responsive and interactive Rock, Paper, Scissors game built with React. Manages game logic through useState, handling player and computer choices, scores, and match results in real time. Includes randomized computer choices, instant visual feedback, and a live scoreboard.",
    features: [
      "Randomized computer choices",
      "Live scoreboard",
      "Instant visual feedback",
      "Reset feature to restart game and scores",
    ],
    images: [rps1, rps2, rps3, rps4],
  },


];

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

function ProjectItem({ project, openId, setOpenId }) {
  const isOpen = openId === project.id;
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isOpen]);

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
          <Carousel images={project.images} projectName={project.name} />

          <div className="projectContent">
            <p className="projectDescription">{project.description}</p>

            <ul className="featureList">
              {project.features.map((f) => (
                <li key={f}><span className="featureDot">&gt;</span> {f}</li>
              ))}
            </ul>

            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="projectLink">
                {project.linkLabel} <FiExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


export default function Projects() {

  const { state } = useLocation();
  const [openId, setOpenId] = useState(state?.openId || null);
  return (
    <main className="projects">
      <div className="projectsHeader">
        <h1 className="projectsTitle">
          <span className="prompt">&gt;</span> Projects
        </h1>
        <p className="projectsSub">A collection of work built with curiosity and care.</p>
      </div>

      <div className="projectsList">
        {projects.map((p) => (
          <ProjectItem key={p.id} project={p} openId={openId} setOpenId={setOpenId} />
        ))}
      </div>
    </main>
  );
}
