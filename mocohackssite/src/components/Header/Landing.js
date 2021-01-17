import "./Landing.css";
import React from "react";
//import About from "./About";
import Logo from "../../assets/images/logo.png"

const Landing = ({ element }) => {
    return (
        <main>
            <section className="landing">
                <div ref={element}>
                    <img src={Logo} alt="logo" className="logo" />
                    <p>MoCoHacks</p>
                    <button className="landing__cta-primary">Apply</button>
                </div>
            </section>
        </main>
    );
}

export default Landing;