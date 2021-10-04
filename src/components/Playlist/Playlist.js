import React from 'react'
import TrackList from '../TrackList/TrackList'
import './Playlist.css'

const Playlist = (props) => {

    const handleNameChange = (e) => {
        e.preventDefault()
        props.onNameChange(e.target.value)
    }

    return (
        <div className="Playlist">
            <input onChange={handleNameChange} value={props.playlistName}/>
            {props.tracks && <TrackList tracks={props.tracks} onRemove={props.onRemove} isRemoval={props.isRemoval} />}
            <button onClick={props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist