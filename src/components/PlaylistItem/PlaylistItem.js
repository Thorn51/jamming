import React from 'react'
import './PlaylistItem.css'

const PlaylistItem = (props) => {
    console.log(props)
    return (
        <div className="Playlist-item">
            <div className="Playlist-information">
                <h3 className="Playlist-name">{props.name}</h3>
                <p>Total Tracks - {props.total}</p>
            </div>
        </div>
    )
}

export default PlaylistItem
