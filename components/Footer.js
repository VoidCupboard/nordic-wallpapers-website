import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import GatsbyMonogram from "../src/images/Gatsby-Monogram.svg"

export default function Footer () {
    return (
        <div className="footer">
            <p className="footerContent">
<<<<<<< HEAD
                Made with <FontAwesomeIcon icon={faHeart} color="#bf616a" /> and 
                <span className="gatsby">
                <a href="https://gatsby.com" target="_blank" rel="noreferrer">
                    <img src={ GatsbyMonogram} alt="gatsby logo"/>
                </a>
                </span>
                by 
                <a href="https://github.com/linuxdotexe" target="_blank" rel="noreferrer"> Sai Nivas Mangu </a>
=======
                Made with <FontAwesomeIcon icon={faHeart} color="#bf616a" /> by <a href="https://github.com/linuxdotexe">Sai Nivas Mangu</a>
>>>>>>> parent of 0f806f2 (minor changes, plugin updates and noreferrer)
            </p>
        </div>
    )
}