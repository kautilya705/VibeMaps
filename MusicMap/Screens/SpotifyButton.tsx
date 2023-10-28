import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button, Text } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function App() {
    const [userEmail, setUserEmail] = React.useState(null);

    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: 'bc62fd152f654b659bad4bf5b5c3a7fe',
            clientSecret: '1afd68b453994691975adc300e63ea2a', // Ideally, this should be on a backend server
            scopes: ['user-read-email'],
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
    
            // Exchange code for an access token
            fetch(discovery.tokenEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `client_id=bc62fd152f654b659bad4bf5b5c3a7fe&client_secret=1afd68b453994691975adc300e63ea2a&grant_type=authorization_code&code=${code}&redirect_uri=${makeRedirectUri({ scheme: 'VibeMaps-login://callback' })}`,
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch access token');
                }
                return res.json();
            })
            .then(data => {
                const accessToken = data.access_token;
                console.log('Access Token:', accessToken);
    
                // Fetch user profile
                return fetch('https://api.spotify.com/v1/me', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch user profile');
                }
                return res.json();
            })
            .then(profileData => {
                console.log('Profile Data:', profileData);
                setUserEmail(profileData.email);
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
        }
    }, [response]);
    
    console.log("h")
    console.log(userEmail)
    return (
        <>
            <Button
                disabled={!request}
                title="Login"
                onPress={() => {
                    promptAsync();
                }}
            />
            {userEmail && <Text>User Email: {userEmail}</Text>}
        </>
    );
}