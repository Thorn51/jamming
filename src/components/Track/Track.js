import React from "react";
import './Track.css'

const Track = (props) => {

    const addTrack = () => {
        props.onAdd(props.track)
    }

    const removeTrack = () => {
        props.onRemove(props.track)
    }

    const renderAction = () => {
        const action = props.isRemoval ? <button onClick={removeTrack} className="Track-action"> Remove Track </button> : <button onClick={addTrack} className="Track-action"> Add Track </button>
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