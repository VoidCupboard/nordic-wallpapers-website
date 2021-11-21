import React from "react";

export default function Navbar () {
    return (
        <div className="container">
            <h2 className="logo">Nordic Wallpapers</h2>
            <nav>
                <ul className="elements">
                    <li><a href="#walps">Wallpapers</a></li>
                    <li><a href="https://ign.schrodinger-hat.it/">ImageGoNord</a></li>
                    <li><a href="https://github.com/linuxdotexe/nordic-wallpapers">GitHub Repo</a></li>
                </ul>
            </nav>
        </div>
    )
}