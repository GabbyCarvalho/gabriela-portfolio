import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import TicTacToe from "./projects/TicTacToe";
import Pizzaria from "./projects/Pizzaria";
import GameLibrary from "./projects/GameLibrary";
import InfoLandingPage from "./projects/InfoLandingPage";
import Kbphotographer from "./projects/Kbphotographer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {index: true, element: <Home />},
            {path: "about", element: <About />},
            {path: "contact", element: <Contact />},
            {path: "resume", element: <Resume />},
            {path: "projects", element: <Projects />, children: [
                {path: "tictactoe", element: <TicTacToe />},
                {path: "pizzaria", element: <Pizzaria />},
                {path: "gamelibrary", element: <GameLibrary />},
                {path: "infolandingpage", element: <InfoLandingPage />},
                {path: "kbphotographer", element: <Kbphotographer />},
            ]}
        ]
    }
])

export default router;