import React from 'react'
import fullyCustomizable from "../../assets/icon-fully-customizable.svg"
import detailedRecords from "../../assets/icon-detailed-records.svg"
import brandRecognition from "../../assets/icon-brand-recognition.svg"

function Details() {
    return (
        <div className="details">
            <h3>Advanced Statistics</h3>
            <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
            <div className="details--box">
                <img src={brandRecognition} alt="brand-recognition-icon" />
                <h4>Brand Recognition</h4>
                <p>
                    Boost your brand recognition with each click. Generic links don't
                    mean a thing. Branded links help instil confidence in your content.
                </p>
            </div>
            <div className="details--box">
                <img src={detailedRecords} alt="detailed-records-icon" />
                <h4>Detailed Records</h4>
                <p>
                    Gain insights into who is clicking your links. Knowing when and
                    where people engage with your content helps inform better decisions.
                </p>
            </div>
            <div className="details--box">
                <img src={fullyCustomizable} alt="fully-customizable-icon" />
                <h4>Fully Customizable</h4>
                <p>
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                </p>
            </div>
        </div>
    )
}

export default Details