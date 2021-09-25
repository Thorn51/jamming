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
        const action = props.isRemoval ? <button onClick={removeTrack} className="Track-action"> - </button> : <button onClick={addTrack} className="Track-action"> + </button>
        return action
    }

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artists[0].name} | {props.track.album.name}</p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track