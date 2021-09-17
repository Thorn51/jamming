import React from 'react'
import { TrackList } from '../TrackList/TrackList'

const PlayList = () => {
    return (
        <div class="Playlist">
            <input value="New Playlist"/>
            <TrackList />
            <button class="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default PlayList