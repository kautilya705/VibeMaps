// import React from 'react';
// import { Button } from 'react-native';
// import queryString from 'query-string';
// import * as WebBrowser from 'expo-web-browser'; // Import WebBrowser

// const SpotifyButton = () => {
//     const client_id = 'bc62fd152f654b659bad4bf5b5c3a7fe';

//     const redirect_uri = 'exp://10.66.72.10:8081/--/auth/callback'

//     const generateRandomString = (length) => {
//         const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         let text = '';
//         for (let i = 0; i < length; i++) {
//             text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
//         }
//         return text;
//     }

//     const handleLoginPress = async () => {
//         const state = generateRandomString(16);
//         const scope = 'user-read-private user-read-email';
//         const authUrl = 'https://accounts.spotify.com/authorize?' +
//             queryString.stringify({
//                 response_type: 'code',
//                 client_id: 'bc62fd152f654b659bad4bf5b5c3a7fe',
//                 scope: scope,
//                 redirect_uri: redirect_uri,
//                 state: state
//             });

//         // Use WebBrowser to open the URL inside the app
//         await WebBrowser.openBrowserAsync(authUrl);
//     }
//     //console.long()
//     return <Button title="Login with Spotify" onPress={handleLoginPress} />;
// }

// export default SpotifyButton;

import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};
const v = makeRedirectUri({
    scheme: 'VibeMaps-login://callback',
})
console.log(v);
export default function App() {
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: 'bc62fd152f654b659bad4bf5b5c3a7fe',
            scopes: ['user-read-email', 'playlist-modify-public'],
            // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
            // this must be set to false
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
        }
    }, [response]);

    return (
        <Button
            disabled={!request}
            title="Login"
            onPress={() => {
                promptAsync();
            }}
        />
    );
}