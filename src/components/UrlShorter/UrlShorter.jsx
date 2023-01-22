import React from 'react'

function UrlShorter() {
    return (
        <div className="url-shorter--container">
            <form className="url-shorter--form">
                <input type="text" placeholder="Shorten a link here..." />
                <input type="submit" value="Shorten It!" />
            </form>
            <div className="urls--container"></div>
        </div>
    )
}

export default UrlShorter