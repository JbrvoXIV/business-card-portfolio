import React from "react"
import webDev from "../images/web-dev.png"

const Info = () => {
    return (
        <div className="info-container">
            <img src={webDev} alt="Web Developer" className="dev-logo" />
            <h1>Jordan Bravo</h1>
            <h2>Front End Developer</h2>
            <h3>github.com/JbrvoXIV</h3>
            <div className="email-button">
                <i class="fas fa-envelope"></i>
                <a href="mailto: jbravo0423@gmail.com">Email</a>
            </div>
        </div>
    )
}

export default Info