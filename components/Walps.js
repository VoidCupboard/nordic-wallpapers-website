import React from "react";
import { walps } from "../data";

export default function Walps () {
    return (
        <div className="walpPageContainer" id="walps">
            <h2>Wallpapers in this collection</h2>
            <p>
                Here are all the wallpapers in this repository.
                Click on one to redirect to the wallpaper and
                right-click on the wallpaper to download it. If you want
                to download the entire collection,
                <a href="https://github.com/linuxdotexe/nordic-wallpapers"> here </a>
                is a link
                to the repository.
            </p>

            <div className="wallpaper">
                {walps.map((walp) => (
                    <a href={walp} target="_blank" className="walpContainer">
                        <div key={walp}>
                            <img
                            src={walp}
                            alt="wallpaper"
                            />
                        </div>
                    </a>
                ))}
            </div>

        </div>
    )
}