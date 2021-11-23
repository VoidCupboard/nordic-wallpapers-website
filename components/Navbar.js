import React from "react";
import logo from '../src/images/logo.svg'

export default function Navbar () {
    return (
        <div className="container">
            <h2 className="logo">
                <span className="colorN">N</span>
                <span className="colorO">o</span>
                <span className="colorR">r</span>
                <span className="colorD">d</span>
                <span className="colorI">i</span>
                <span className="colorC">c</span>
                <span className="colorW">W</span>
                <span className="colorW">a</span>
                <span className="colorL">l</span>
                <span className="colorL">l</span>
                <span className="colorP">p</span>
                <span className="colorP">a</span>
                <span className="colorE">p</span>
                <span className="colorE">e</span>
                <span className="colorS">r</span>
                <span className="colorS">s</span>
                </h2>
            <img src={logo} alt="logo" className="logoIcon"/>
            <nav>
                <ul id="menu" className="elements">
                    <li><a href="https://ign.schrodinger-hat.it/" target="_blank" rel="noreferrer">ImageGoNord</a></li>
                </ul>
            </nav>
        </div>
    )
}