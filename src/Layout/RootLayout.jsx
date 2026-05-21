import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useLang } from "../LanguageContext";
import { t } from "../i18n";

export default function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, toggleLang } = useLang();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="topbar">
          <nav className="navBar">
            <Link to="/" onClick={closeMenu}>{t.nav.home[lang]}</Link>
            <Link to="/about" onClick={closeMenu}>{t.nav.about[lang]}</Link>
            <Link to="/resume" onClick={closeMenu}>{t.nav.resume[lang]}</Link>
            <Link to="/projects" onClick={closeMenu}>{t.nav.projects[lang]}</Link>
            <Link to="/contact" onClick={closeMenu}>{t.nav.contact[lang]}</Link>
          </nav>

          <div className="logo">
            <span className="bracket">&lt;</span>
            <span className="name">Gabby Carvalho</span>
            <span className="bracket"> /&gt;</span>
          </div>

          <div className="socials">
            {/* Language toggle */}
            <button
              className="langToggle"
              onClick={toggleLang}
              aria-label="Toggle language"
              title={lang === "en" ? "Mudar para Português" : "Switch to English"}
            >
              {lang === "en" ? "🇧🇷" : "🇺🇸"}
            </button>

            <a href="https://github.com/GabbyCarvalho" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/gabriela-carvalho-santos/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="mobileMenu">
            <Link to="/" onClick={closeMenu}>{t.nav.home[lang]}</Link>
            <Link to="/about" onClick={closeMenu}>{t.nav.about[lang]}</Link>
            <Link to="/resume" onClick={closeMenu}>{t.nav.resume[lang]}</Link>
            <Link to="/projects" onClick={closeMenu}>{t.nav.projects[lang]}</Link>
            <Link to="/contact" onClick={closeMenu}>{t.nav.contact[lang]}</Link>
            <div className="mobileSocials">
              {/* Language toggle (mobile) */}
              <button
                className="langToggle"
                onClick={toggleLang}
                aria-label="Toggle language"
                title={lang === "en" ? "Mudar para Português" : "Switch to English"}
              >
                {lang === "en" ? "🇧🇷" : "🇺🇸"}
              </button>
              <a href="https://github.com/GabbyCarvalho" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/gabriela-carvalho-santos/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </nav>
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}