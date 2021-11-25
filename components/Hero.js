import React from "react";
import preview from '../src/images/preview.png'

export default function Hero () {
    return (
        <div className="heroContainer">
            <p className="content">
                A collection of wallpapers cherry picked from 
                <a href="https://reddit.com/r/ImageGoNord"> reddit</a>,
                <a href="https://unsplash.com/t/wallpapers"> unsplash</a>,
                <a href="https://discord.gg/Xb9B4Ny"> Christian Chiarulli's discord server </a>
                and
                <a href="https://github.com/ThePrimeagen/anime"> ThePrimeagen's wallpaper repository </a>.
                Most of 'em "norded" through
                <a href="https://ign.schrodinger-hat.it"> ImageGoNord website from Schrödinger-Hat </a>.
                Visit the repo
                <a href="https://github.com/linuxdotexe/nordic-wallpapers"> here</a>.
            </p>
            <img src={preview} alt="hero" className="previewImg"/>
        </div>
    )
}