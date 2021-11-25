import React from "react";
import { Helmet } from "react-helmet";
import img from '../static/metaimg.png'

export default function Meta () {
    return (
        <Helmet>
            <http lang="en"/>
            <meta http-equiv="Content-Security-Policy" content="script-src 'none'" />
            <title>Nordic Wallpapers</title>
            <meta name="title" content="Nordic Wallpapers" />
            <meta name="description" content="A collection of 'norded' wallpapers that go well with the Nord color scheme." />
            
            <meta http-equiv="Content-Security-Policy" content="script-src 'none'" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://nordicwallpapers.vercel.app/" />
            <meta property="og:title" content="Nordic Wallpapers" />
            <meta property="og:description" content="A collection of 'norded' wallpapers that go well with the Nord color scheme." />
            <meta property="og:image" content={img} />
            
            
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://nordicwallpapers.vercel.app/" />
            <meta property="twitter:title" content="Nordic Wallpapers" />
            <meta property="twitter:description" content="A collection of 'norded' wallpapers that go well with the Nord color scheme." />
            <meta property="twitter:image" content={img} />
        </Helmet>
    )
}