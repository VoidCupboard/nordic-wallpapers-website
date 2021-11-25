import React, { useState, useEffect } from "react";
const Axios = require('axios').default;

function Walps () {            
    const [walps, setWalps] = useState([])
    useEffect(() => {
        Axios.get("https://api.github.com/repos/linuxdotexe/nordic-wallpapers/contents/wallpapers")
            .then((response) => {
                setWalps(response.data)
            })
    })
    return (
        <div className="walpPageContainer" id="walps">
            <h2>Wallpapers in this collection</h2>
            <p>
                Here are all the wallpapers in this repository.
                Click on one to redirect to the wallpaper and
                right-click on the wallpaper to download it. If you want
                to download the entire collection,
                <a href="https://github.com/linuxdotexe/nordic-wallpapers" target="_blank" rel="noreferrer"> here </a>
                is a link
                to the repository.
            </p>

            <div className="wallpaper">
                {walps.map((item) => (
                    <a href={item.download_url} target="_blank" rel="noreferrer" className="walpContainer">
                        <div key={item.name}>
                            <img
                            src={item.download_url}
                            alt="wallpaper"
                            />
                        </div>
                    </a>
                ))}
            </div>

        </div>
    )
}

export default Walps;