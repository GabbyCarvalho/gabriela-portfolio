import "../styles/home.css"  
import Terminal from "../components/Terminal";

export default function Home() {
    return (
        <>
        
        <section className="home">
            <Terminal />
            <div className="homeTextIntro">
                <h1>Designed With Style. <br/>
                Built With Precision.<br/>
                Delivered With Quality.</h1>
            </div>
            
        </section>
        </>
    )
}