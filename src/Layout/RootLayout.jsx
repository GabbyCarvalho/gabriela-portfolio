import { Outlet, Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function RootLayout() {
    return(
        <>
        <header className="header">
            <div className="topbar">
                <nav className="navBar">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
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
            </div>
        </header>
        <main>
            <Outlet />
        </main>
        </>
    )
}