import React from 'react';
import Track from '../Track/Track'
import './TrackList.css'

const TrackList = ({ newList, tracks, onAdd, onRemove, isRemoval }) => {
    
    const render = newList ? tracks.map(track => <Track key={track.id}  track={track} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval} />) : tracks.map(item => <Track key={item.track.id} track={item.track} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval} />)

    return (
        <div className="TrackList">
            {render}
        </div>
    )
}

export default TrackList