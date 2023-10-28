import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import requests

# Spotify credentials
cid = 'b1bdb7c6d13b45f89ac50153b26e6b8d'
secret = '13a8da02c61f4fc99377356f3d87eaa8'

client_credentials_manager = SpotifyClientCredentials(client_id=cid, client_secret=secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# Function to get lyrics using Musixmatch API
def get_lyrics(track_id, api_key):
    url = f'https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id={track_id}&apikey={api_key}'
    response = requests.get(url)
    lyrics_data = response.json()

    # Check if lyrics were found
    if lyrics_data['message']['header']['status_code'] == 200:
        return lyrics_data['message']['body']['lyrics']['lyrics_body']
    else:
        return None

# Musixmatch API key
api_key = '8745475dda5f2b686665500744dfd529'

# Playlist link
playlist_link = "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=d8cf7b3c39f74c01"

# Get playlist ID from the link
playlist_id = playlist_link.split("/")[-1].split("?")[0]

# Get tracks from the playlist
results = sp.playlist_tracks(playlist_id)
#print(results)

# Loop through tracks
for track in results["items"]:
    #URI
    track_uri = track["track"]["uri"]
    
    # Track name
    track_name = track["track"]["name"]
    
    # Main Artist
    artist_name = track["track"]["artists"][0]["name"]
    
    # Album
    album = track["track"]["album"]["name"]
    
    # Popularity of the track
    track_pop = track["track"]["popularity"]
    
    # Get Musixmatch track ID (you need to obtain this from Musixmatch)
    musixmatch_track_id = "MUSIXMATCH TRACK ID"
    
    # Get lyrics
    lyrics = get_lyrics(musixmatch_track_id, api_key)
    
    print(f'Track Name: {track_name}')
    print(f'Artist: {artist_name}')
    print(f'Album: {album}')
    print(f'Popularity: {track_pop}')
    print(f'Lyrics: {lyrics}')
    print('---')