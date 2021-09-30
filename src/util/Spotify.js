let accessToken;

export const Spotify = {
    
    getAccessToken () {

        if(accessToken) {
            return accessToken
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)


        if(accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            
            //Clears the parameters
            window.setTimeout(() => accessToken = '', expiresIn * 1000)
            window.history.pushState('Access Token', null, '/')
            
            return accessToken

        } else {
            const endpoint = 'https://accounts.spotify.com/authorize?'
            const clientID = `client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`
            const responseType = '&response_type=token'
            const redirectURI = '&redirect_uri=http://localhost:3000/'
            const scope = `&scope=playlist-modify-public`
            const accessUrl = `${endpoint}${clientID}${scope}${responseType}${redirectURI}` 

            window.location = accessUrl
        }
    }, 

    async getUserId () {

        const accessToken = Spotify.getAccessToken()

        try {
            let response = await fetch(`https://api.spotify.com/v1/me`, { headers: {'Authorization': `Bearer ${accessToken}`}})

            let user = await response.json()

            return user

        } catch (error) {
            console.log(error)
        }
    },

    async search(searchTerm) {

        accessToken = Spotify.getAccessToken()

        try {
            
            const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, { headers: {
                'Authorization': `Bearer ${accessToken}`
            }})

            const data = await response.json()

            let tracks = data.tracks.items

            return tracks
            
        } catch (error) {
            console.log(error)
        }
    },

    async savePlaylist(playlistName, uriArray) {
        
        let accessToken = Spotify.getAccessToken()
        let userId = await Spotify.getUserId()

        if(!playlistName || !uriArray.length) {
            return
        }

        try {

            //POST playlist name
            let postPlaylistName = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( { name: playlistName })
            })

            let playlist = await postPlaylistName.json()

            let playlistId = playlist.id

        // //POST tracks to playlist
            let postTracks = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(uriArray)
            })

            let trackPostResult = await postTracks.json()
            
        } catch (error) {
            console.log(error)
        } 
    },

    async getPlaylists() {

        let accessToken = await Spotify.getAccessToken()
        let userId = await Spotify.getUserId().then(user => user.id)
        
        try {
            const result = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {headers: {
                'Authorization': `Bearer ${accessToken}`
            }})
            
            const playlists = await result.json()

            return playlists

        } catch (error) {
            console.log(error)
        }
        
    }
}
