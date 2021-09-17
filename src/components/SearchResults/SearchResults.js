import React from 'react'
import { TrackList } from '../TrackList/TrackList'
import './SearchResults.css'

const SearchResult = () => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList />
        </div>
    )
}

export default SearchResult