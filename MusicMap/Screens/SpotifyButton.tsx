import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button, Text } from 'react-native';
import * as FileSystem from 'expo-file-system';
// import tasks from './convex/tasks';
// import { uploadNewUser } from '../convex/tasks';
// import { useMutation } from 'convex/react';
// import { api } from '../convex/_generated/api';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

// Declaring the interfaces here
interface Artist {
    name: string;
}

interface Track {
    name: string;
    artists: Artist[];
}

interface RecentlyPlayedItem {
    track: Track;
}



type Props = {
    setUserEmail: (email: string | null) => void;
};

const fileURI = FileSystem.documentDirectory + 'data.jsonl';

export const SpotifyButton: React.FC<Props> = ({ setUserEmail }) => {
    const [recentlyPlayed, setRecentlyPlayed] = React.useState<RecentlyPlayedItem[]>([]);

    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: 'bc62fd152f654b659bad4bf5b5c3a7fe',
            clientSecret: '1afd68b453994691975adc300e63ea2a', // Move this to the backend!
            scopes: ['user-read-email', 'user-read-recently-played'], // Added the new scope
            usePKCE: false,
            redirectUri: makeRedirectUri({
                scheme: 'VibeMaps-login://callback',
            }),
        },
        discovery
    );


    React.useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
            fetch(discovery.tokenEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `client_id=bc62fd152f654b659bad4bf5b5c3a7fe&client_secret=1afd68b453994691975adc300e63ea2a&grant_type=authorization_code&code=${code}&redirect_uri=${makeRedirectUri({ scheme: 'VibeMaps-login://callback' })}`,
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.access_token;

                    // Fetch user's email
                    return fetch('https://api.spotify.com/v1/me', {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    })
                        .then(res => res.json())
                        .then(userData => {
                            const email = userData.email;
                            debugger;
                            setUserEmail(email);
                            return { accessToken, email };
                        })
                })
                // .then(({ accessToken, userEmail }) => {
                //     // Use both accessToken and userEmail in this block

                //     // Fetch user's recently played tracks
                //     return fetch('https://api.spotify.com/v1/me/player/recently-played', {
                //         headers: {
                //             Authorization: `Bearer ${accessToken}`,
                //         },
                //     })
                //         .then(res => res.json())
                //         .then(recentlyPlayedData => {
                //             setRecentlyPlayed(recentlyPlayedData.items);

                //             // Append user's email and recently played tracks to the file
                //             const songs = recentlyPlayedData.items.map(item => item.track.name);
                //             // appendDataToFile(userEmail, songs);
                //         });
                // })
                .catch(error => {
                    console.error('Error:', error.message);
                });
        }
    }, [response]);

    // React.useEffect(() => {
    //     console.log('bruh', userEmail);
    // }, [userEmail]);

    // CALL CONVEX TO UPLOAD DATA (username + list of songs)
    const songsList = recentlyPlayed.map(item => {
        return `${item.track.name} by ${item.track.artists.map(artist => artist.name).join(', ')}`;
    });
    // console.log("yo yo", userEmail, songsList)
    // const userData = {
    //     email: userEmail,
    //     songs: songsList
    // };
    //if (userEmail && userEmail.trim() !== "" && songsList && songsList.length > 0) {
    // const mutateSomething = useMutation(api.tasks.uploadNewUser);
    // mutateSomething(userData)
    //}
    return (
        <>
            <Button
                disabled={!request}
                title="Login"
                onPress={() => {
                    promptAsync();
                }}
            />
            {/* {getSpotifyEmail = testEmail} */}
            {/* {console.log("yo yo", userEmail, testEmail)}
            {userEmail && <Text>Email: {userEmail}</Text>}
            {testEmail && <Text>Email: {testEmail}</Text>} */}
            {recentlyPlayed.length > 0 && (
                <>
                    <Text>Recently Played Tracks:</Text>
                    {recentlyPlayed.map((item, index) => (
                        <Text key={index}>
                            {item.track.name} by {item.track.artists.map(artist => artist.name).join(', ')}
                        </Text>
                    ))}
                </>
            )}
        </>
    );
}