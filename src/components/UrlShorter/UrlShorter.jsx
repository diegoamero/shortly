import React from 'react'
import './UrlShorter.scss'

function UrlShorter() {
    return (
        <div className="url-shorter--container">
            <form className="url-shorter--form">
                <input className="form--url" type="text" placeholder="Shorten a link here..." />
                <input className="form--button" type="submit" value="Shorten It!" />
            </form>
            <div className="urls--container"></div>
        </div>
    )
}

export default UrlShorter