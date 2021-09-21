import React from 'react';
import Track from '../Track/Track'
import './TrackList.css'

const TrackList = (props) => {
    return (
        <div className="TrackList">
            {props.tracks.map(track => {
                return <Track key={track.id} track={track} onAdd={props.onAdd} />
            })}
        </div>
    )
}

export default TrackList