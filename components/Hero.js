import React from "react";
import preview from '../src/images/preview.png'

export default function Hero () {
    return (
        <div className="heroContainer">
            <p className="content">
                A collection of wallpapers cherry picked from 
                <a href="https://reddit.com/r/ImageGoNord" target="_blank" rel="noreferrer"> reddit</a>,
                <a href="https://unsplash.com/t/wallpapers" target="_blank" rel="noreferrer"> unsplash</a>,
                <a href="https://discord.gg/Xb9B4Ny" target="_blank" rel="noreferrer"> Christian Chiarulli's discord server </a>
                and
                <a href="https://github.com/ThePrimeagen/anime" target="_blank" rel="noreferrer"> ThePrimeagen's wallpaper repository </a>.
                Most of 'em "norded" through
                <a href="https://ign.schrodinger-hat.it" target="_blank" rel="noreferrer"> ImageGoNord website from Schrödinger-Hat </a>.
                Visit the repo
                <a href="https://github.com/linuxdotexe/nordic-wallpapers" target="_blank" rel="noreferrer"> here</a>.
            </p>
            <img src={preview} alt="hero" className="previewImg"/>
        </div>
    )
}