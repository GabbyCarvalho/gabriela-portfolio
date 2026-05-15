import gabriela from "../assets/about/Gabriela.jpg"
import "../styles/about.css"
import { Link } from "react-router-dom";

export default function About() {
    return (
        <section className="about">
            <div className="aboutDisplay">
                <div className="aboutImg">
                    <img src={gabriela} alt="Gabriela" />
                </div>
                <div className="aboutText">
                    <h2 className="titles">Hi there, nice to meet you!</h2>
                    <p>
                        My name is Gabriela, and I’m a Front-End Developer passionate about creating responsive and meaningful web experiences. <br/>
                        
                        My background in design sparked my passion for building creative and visually engaging websites, combining aesthetics with functionality to create experiences people genuinely enjoy using.<br/>

                        Over the years, I’ve had the opportunity to live, study, and work in both the United States and Canada, an experience that shaped not only my fluency in English but also my adaptability, communication skills, and global perspective.<br/>

                        Today, I specialize in React and JavaScript, with hands-on experience in TypeScript, API integrations, testing, debugging, and responsive development. I enjoy transforming ideas into intuitive interfaces, writing clean and maintainable code, and continuously learning new technologies to grow as a developer.<br/>

                        I’m passionate about problem-solving, creativity, and building digital experiences that are not only functional, but memorable.

                    </p>
                    <Link to="/projects">
                        <button className="btn">Check some of my work</button>
                    </Link>
                </div>
            

            </div>
        </section>

    );
}