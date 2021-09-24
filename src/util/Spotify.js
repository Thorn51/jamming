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
            const accessUrl = `${endpoint}${clientID}${responseType}${redirectURI}` 

            window.location = accessUrl
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
    }
}
