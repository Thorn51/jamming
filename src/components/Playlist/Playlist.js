import React from 'react'
import TrackList from '../TrackList/TrackList'
import './Playlist.css'

const Playlist = (props) => {
    return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            {props.tracks && <TrackList tracks={props.tracks} onRemove={props.onRemove} isRemoval={props.isRemoval} />}
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist