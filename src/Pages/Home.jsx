import "../styles/home.css";
import Terminal from "../components/Terminal";
import { useLang } from "../LanguageContext";
import { t } from "../i18n";

export default function Home() {
  const { lang } = useLang();

  return (
    <>
      <section className="home">
        <Terminal />
        <div className="homeTextIntro">
          <h1>
            {t.home.headline[lang].split("\n").map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
        </div>
      </section>
    </>
  );
}