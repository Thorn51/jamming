import React from 'react'
import { TrackList } from '../TrackList/TrackList'
import './Playlist.css'

const PlayList = () => {
    return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            {/* <TrackList /> */}
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default PlayList