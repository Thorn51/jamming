import React from 'react'
import './PlaylistItem.css'

const PlaylistItem = (props) => {
    return (
        <div>
            <div className="Playlist-information">
                <h3 className="Playlist-name">{props.name}</h3>
                <p>Total Tracks - {props.tracks.total}</p>
            </div>
        </div>
    )
}

