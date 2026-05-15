import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function RootLayout() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
        <header className="header">
            <div className="topbar">
                <nav className="navBar">
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                    <Link to="/resume" onClick={closeMenu}>Resume</Link>
                    <Link to="/projects" onClick={closeMenu}>Projects</Link>
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                </nav>

                <div className="logo">
                    <span className="bracket">&lt;</span>
                    <span className="name">Gabby Carvalho</span>
                    <span className="bracket"> /&gt;</span>
                </div>

                <div className="socials">
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
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                    <Link to="/resume" onClick={closeMenu}>Resume</Link>
                    <Link to="/projects" onClick={closeMenu}>Projects</Link>
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                    <div className="mobileSocials">
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
