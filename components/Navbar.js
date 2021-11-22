import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Navbar () {
    return (
        <div className="container">
            <h2 className="logo">Nordic Wallpapers</h2>
            <nav>
                <ul id="menu" className="elements">
                    <li><a href="#walps">Wallpapers</a></li>
                    <li><a href="https://ign.schrodinger-hat.it/" target="_blank">ImageGoNord</a></li>
                    <li><a href="https://github.com/linuxdotexe/nordic-wallpapers" target="_blank">GitHub Repo</a></li>
                </ul>
                <button aria-controls="menu" aria-expanded="false" >
                    <FontAwesomeIcon icon={faBars} className="ham"/>
                </button>
            </nav>
        </div>
    )
}