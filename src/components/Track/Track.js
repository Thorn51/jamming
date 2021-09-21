import React from "react";
import './Track.css'

const Track = (props) => {

    const addTrack = () => {
        console.log('Add clicked')
        props.onAdd(props.track)
    }

    const renderAction = () => {
        let isRemoval = false
        const action = isRemoval ? <button className="Track-action"> - </button> : <button onClick={addTrack} className="Track-action"> + </button>
        return action
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track