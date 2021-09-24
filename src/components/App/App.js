import { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import { Spotify } from '../../util/Spotify';
import './App.css'

const App = () => {
  const [searchResults, setSearchResults] = useState([])
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [playlistName, setPlaylistName] = useState('Your playlist')

  const addTrack = (track) => {
    if(playlistTracks.includes(track)) {
      console.log('Track already in list')
      return
    } else {
      setPlaylistTracks([...playlistTracks, track])
    } 
  }

  const removeTrack = (track) => {
    let filteredPlayList = playlistTracks.filter(remove => track !== remove)
    setPlaylistTracks(filteredPlayList)
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  }
  
  const savePlaylist = () => {
    let trackURIs = playlistTracks.map(track => track.uri)
  }

  const search = (searchTerm) => {
    Spotify.search(searchTerm).then(data => {
      setSearchResults(data)
    })
    
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist onSave={savePlaylist} playlistName={playlistName} onNameChange={updatePlaylistName} tracks={playlistTracks} onRemove={removeTrack} isRemoval={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
