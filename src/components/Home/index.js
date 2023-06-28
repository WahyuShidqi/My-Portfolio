import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png"
import './index.scss';
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['h', 'i', 'd', 'q', 'i'];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];



    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>               
                <img src={LogoTitle} alt="S-logo"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} 
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray} 
                idx={22} />
                </h1>
                <h2>Skill: Html, Css, Tailwind, Bootstrap, Js, React.</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home;