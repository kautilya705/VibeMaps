import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import requests
import json

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
#api_key = '8745475dda5f2b686665500744dfd529'
#playlist_link = "https://open.spotify.com/playlist/4GZT3MbZ4IwjtIxKuYerfu?si=e5256b6a87374b1d"
#playlist_id = playlist_link.split("/")[-1].split("?")[0]

#results = sp.playlist_tracks(playlist_id)

# Function to get Musixmatch track ID
def get_musixmatch_track_id(track_name, artist_name, api_key):
    url = f'https://api.musixmatch.com/ws/1.1/track.search?q_track={track_name}&q_artist={artist_name}&apikey={api_key}'
    response = requests.get(url)
    search_results = response.json()

    # Check if results were found
    if search_results['message']['header']['status_code'] == 200:
        track_list = search_results['message']['body']['track_list']

        # Check if there are any tracks in the list
        if len(track_list) > 0:
            return track_list[0]['track']['track_id']
    return None

track_list = []
file_name = "track_data2.jsonl"

# Loop through tracks
def process_playlist(playlist_link, api_key, file_name):
    playlist_id = playlist_link.split("/")[-1].split("?")[0]
    results = sp.playlist_tracks(playlist_id)
    
    with open(file_name, "a") as jsonl_file:
        for track in results["items"]:
            track_uri = track["track"]["uri"]
            track_name = track["track"]["name"]
            artist_name = track["track"]["artists"][0]["name"]
            album = track["track"]["album"]["name"] 
            track_pop = track["track"]["popularity"]
            musixmatch_track_id = get_musixmatch_track_id(track_name, artist_name, api_key)
            lyrics = get_lyrics(musixmatch_track_id, api_key)

            track_info = {
                "text": f"Track Name: {track_name}, Artist: {artist_name}, Album: {album}, Popularity: {track_pop}, Lyrics: {lyrics}"#,
                #"Audio Features": sp.audio_features(track_uri)[0]
            }

            if musixmatch_track_id:
                jsonl_file.write(json.dumps(track_info) + "\n")
            else:
                print(f'Could not find Musixmatch track ID for {track_name} by {artist_name}')

# Example usage:
api_key = '24c01d9f4d0dd7e84ee45dadb24876f1'
playlist_links = [
    "https://open.spotify.com/playlist/37i9dQZF1DXbQm6Guuzt5a?si=23083adb62364ebd",
    "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP?si=f6be8a017d4c4469",
    "https://open.spotify.com/playlist/37i9dQZF1DWTLSN7iG21yC?si=64014ea3e3fe4c6f",
    "https://open.spotify.com/playlist/37i9dQZF1DWSVpJBtEkFud?si=e4c4b25c5afe41f7",
    "https://open.spotify.com/playlist/37i9dQZF1DX1lVhptIYRda?si=80486f36d4154f35",
    "https://open.spotify.com/playlist/37i9dQZF1DX8C9xQcOrE6T?si=ce2633380a9747dd"
]

file_name = "track_data2.jsonl"

for playlist_link in playlist_links:
    process_playlist(playlist_link, api_key, file_name)