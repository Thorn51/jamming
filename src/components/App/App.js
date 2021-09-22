import { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import './App.css'

const testData = [
  {
    id: 1,
    name: 'Test Song 1',
    artist: 'Test Artist 1',
    album: 'Test Album 1',
    uri: 'Test URI 1'
  },
  {
    id: 2,
    name: 'Test Song 2',
    artist: 'Test Artist 2',
    album: 'Test Album 2',
    uri: 'Test URI 2'
  },
  {
    id: 3,
    name: 'Test Song 3',
    artist: 'Test Artist 3',
    album: 'Test Album 3',
    uri: 'Test URI 2'
  }
]

const App = () => {
  const [searchResults, setSearchResults] = useState(testData)
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
    console.log(searchTerm)
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
