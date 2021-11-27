import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useEffect, useState} from 'react';

const Axios = require('axios').default;

const downloadFile =
    (url) => {
        const options = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        const fileName = url.split("/").at(-1)

        fetch(url, options).then(response => {
            response.blob().then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                a.click();
            });
        });
    }

function
Walps() {            
    const [walps, setWalps] = useState([])
    useEffect(() => {
        Axios.get('https://api.github.com/repos/linuxdotexe/nordic-wallpapers/contents/wallpapers')
            .then((response) => {
                setWalps(response.data)
            })
    })
    const walpLength = walps.length
    return (
        <div className='walpPageContainer' id='walps'>
            <h2>Wallpapers in this collection</h2>
            <p>
                Here are all the wallpapers in this repository.
                There are a total of <span className="walplength">{walpLength}</span> wallpapers in this repository.
                Click on one to redirect to the wallpaper and
                right-click on the wallpaper to download it. If you want
                to download the entire collection,
                <a href='https://github.com/linuxdotexe/nordic-wallpapers' target='_blank' rel='noreferrer'> here </a>
                is a link
                to the repository.
            </p>

            <div className='wallpaper'>
                {walps.map((item) => (
                    <a href={item.download_url} target='_blank' rel='noreferrer' className='walpContainer'>
                        <div key={item.name} className='wallpaper-item'>
                            <img
                            src={item.download_url}
                            alt={item.name}
                            title={item.name}
                            width="400px"
                            height="200px"
                            />
                            <div className="download" onClick={() => downloadFile(item.download_url)}>
                                <FontAwesomeIcon icon={faDownload} color="#88C0D0" />
                            </div>                        
                        </div>
                    </a>
                ))}
            </div>

        </div>
    )
}

export default Walps;