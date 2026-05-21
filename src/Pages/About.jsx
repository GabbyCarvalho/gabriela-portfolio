import gabriela from "../assets/about/Gabriela.jpg";
import "../styles/about.css";
import { Link } from "react-router-dom";
import { useLang } from "../LanguageContext";
import { t } from "../i18n";

export default function About() {
  const { lang } = useLang();
  const a = t.about;

  return (
    <section className="about">
      <div className="aboutDisplay">
        <div className="aboutImg">
          <img src={gabriela} alt="Gabriela" />
        </div>
        <div className="aboutText">
          <h2 className="titles">{a.greeting[lang]}</h2>
          <p>
            {a.p1[lang]}<br />
            {a.p2[lang]}<br />
            {a.p3[lang]}<br />
            {a.p4[lang]}<br />
            {a.p5[lang]}
          </p>
          <Link to="/projects">
            <button className="btn">{a.cta[lang]}</button>
          </Link>
        </div>
      </div>
    </section>
  );
}