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
    const walpLength = walps.length
    return (
        <div className="walpPageContainer" id="walps">
            <h2>Wallpapers in this collection</h2>
            <p>
                Here are all the wallpapers in this repository.
                There are a total of <span className="walplength">{walpLength}</span> wallpapers in this repository.
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
                            alt={item.name}
                            title={item.name}
                            />
                        </div>
                    </a>
                ))}
            </div>

        </div>
    )
}

export default Walps;