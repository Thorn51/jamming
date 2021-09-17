import React from "react";
import './Track.css'

const Track = () => {

    renderAction = () => {
        const action = isRemoval ? '-' : '+'
        return <button className="Track-action">{action}</button>
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>Track Name</h3>
                <p>Track Artist | Album</p>
            </div>
            <button className="Track-action">-- + or - will go here</button>
        </div>
    )
}

export default Track