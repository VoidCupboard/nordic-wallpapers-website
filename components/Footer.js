import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer () {
    return (
        <div className="footer">
            <p className="footerContent">
                Made with <FontAwesomeIcon icon={faHeart} color="#bf616a" /> and 
                <span className="gatsby">
                <a href="https://gatsby.com" target="_blank" rel="noreferrer"> Gatsby </a>
                </span>
                by 
                <a href="https://github.com/linuxdotexe" target="_blank" rel="norefferer"> Sai Nivas Mangu </a>
            </p>
        </div>
    )
}