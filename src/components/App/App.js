import { useState, useEffect } from 'react';

//Components 
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import PlaylistCollection from '../PlaylistCollection/PlaylistCollection'

//Api
import { Spotify } from '../../util/Spotify';

//Styles
import './App.css';

//Test data
import { STORE } from '../../STORE';

const App = () => {
  const [searchResults, setSearchResults] = useState([])
  const [playlistTracks, setPlaylistTracks] = useState([])
  const [playlistName, setPlaylistName] = useState('Your playlist')
  const [playlistCollection, setPlaylistCollection] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    Spotify.getAccessToken()
    Spotify.getUserId().then(data => setUser(data))
    Spotify.getPlaylists().then(data => setPlaylistCollection(data))
  }, []) 

  console.log('Playlists => ', playlistCollection.items, 'User => ', user)

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

  // This needs to be researched for updating playlist instead of saving a new one
  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  }
  
  const savePlaylist = () => {
    let trackURIs = playlistTracks.map(track => track.uri)
    Spotify.savePlaylist(playlistName, trackURIs)
  }

  const search = (searchTerm) => {
    Spotify.search(searchTerm).then(data => {
      setSearchResults(data)
    })
    
  }

  const selectPlaylist = (spotifyId) => {
    console.log(spotifyId)
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      {playlistCollection.items && <PlaylistCollection playlists={playlistCollection.items} onSelect={selectPlaylist} /> }
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
