import React from 'react';
import './PlaylistCollection.css'

const PlaylistCollection = ({playlists, onSelect}) => {
    
    const handleSelect = (e) => {
        onSelect(e.target.value)
    }

    return (
        <div className="Playlist-collection">
            <select name="playlists" id="playlists" onChange={handleSelect}>
                <option value="label" disabled>Select a playlist...</option>
                {playlists.map(list => <option key={list.id} value={list.id}>{list.name} ({list.tracks.total} Tracks)</option>)}
                <option value="newList">Create a new playlist</option>
            </select>
        </div>
    )
}

export default PlaylistCollection