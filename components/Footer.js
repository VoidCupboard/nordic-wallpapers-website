import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer () {
    return (
        <div className="footer">
            <p className="footerContent">
                Made with <FontAwesomeIcon icon={faHeart} color="#bf616a" /> by <a href="https://github.com/linuxdotexe">Sai Nivas Mangu</a>
            </p>
        </div>
    )
}