// import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    View,
    TouchableOpacity,
    Animated,
    Easing,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as FileSystem from 'expo-file-system';
WebBrowser.maybeCompleteAuthSession();

type Props = {
    onLoginSuccess: () => void;
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
const fileURI = FileSystem.documentDirectory + 'data.jsonl';

const SpotifyButton: React.FC<Props> = ({ onLoginSuccess }) => {
    const [isHovered, setHovered] = useState(false);
    const tabScale = new Animated.Value(1);
    WebBrowser.maybeCompleteAuthSession();

    // Endpoint
    const discovery = {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint: 'https://accounts.spotify.com/api/token',
    };
    const v = makeRedirectUri({
        scheme: 'VibeMaps-login://callback',
    })

    const [recentlyPlayed, setRecentlyPlayed] = React.useState<RecentlyPlayedItem[]>([]);

    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: 'bc62fd152f654b659bad4bf5b5c3a7fe',
            clientSecret: '1afd68b453994691975adc300e63ea2a',
            scopes: ['user-read-email', 'user-read-recently-played'],
            usePKCE: false,
            redirectUri: makeRedirectUri({
                scheme: 'VibeMaps-login://callback',
            }),
        },
        discovery
    );
    const [userEmail, setUserEmail] = React.useState(null);
    // React.useEffect(() => {
    //     if (response?.type === 'success') {
    //         const { code } = response.params;
    //         onLoginSuccess();

    //     }
    // }, [response]);
    React.useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
            onLoginSuccess();
            console.log("Hits if statement");

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
                            setUserEmail(email);
                            return { accessToken, email };
                        })
                })
                .then(({ accessToken, userEmail }) => {
                    // Use both accessToken and userEmail in this block

                    // Fetch user's recently played tracks
                    return fetch('https://api.spotify.com/v1/me/player/recently-played', {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    })
                        .then(res => res.json())
                        .then(recentlyPlayedData => {
                            setRecentlyPlayed(recentlyPlayedData.items);

                            // Append user's email and recently played tracks to the file
                            const songs = recentlyPlayedData.items.map(item => item.track.name);
                            // appendDataToFile(userEmail, songs);
                            console.log("user email", userEmail);
                            console.log("songs", songs);
                        });
                })
                .catch(error => {
                    console.error('Error:', error.message);
                });
        }
    }, [response]);

    const handleTabPressIn = () => {
        Animated.timing(tabScale, {
            toValue: 1.2, // Increase the size to 1.2 times
            duration: 300, // Animation duration in milliseconds
            easing: Easing.linear, // You can adjust the easing function as needed
            useNativeDriver: false, // Required for some animations
        }).start();
    };

    const handleTabPressOut = () => {
        Animated.timing(tabScale, {
            toValue: 1, // Return to the original size
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    };
    return (
        <ImageBackground
            source={require("../assets/D07CCB56-715C-475A-AA17-45EB9BCC2323.jpeg")}
            style={{ ...styles.authContainer, backgroundColor: "#000000" }} // apply backgroundColor here
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>SIGN IN WITH</Text>
                <TouchableOpacity
                    style={[
                        styles.tab,
                        { transform: [{ scale: isHovered ? tabScale : 1 }] },
                    ]}
                    onPressIn={() => {
                        setHovered(true);
                        handleTabPressIn();
                    }}
                    onPressOut={() => {
                        setHovered(false);
                        handleTabPressOut();
                    }}
                    onPress={() => {
                        if (request) {
                            promptAsync();
                        }
                    }}
                >
                    <View style={styles.spotifyContainer}>
                        <Entypo name="spotify" size={24} color="black" />
                    </View>
                    <Text style={styles.text}>Spotify</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default SpotifyButton;

const styles = StyleSheet.create({
    authContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    overlay: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(34, 34, 23, 0.6)", // Overlay with 30% opacity
    },
    title: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    tab: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        width: 320,
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "white",
        zIndex: 2,
        margin: 20,
        padding: 4,
    },
    appleMusicContainer: {
        backgroundColor: "#fc3c44",
        padding: 7,
        borderRadius: 6,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    spotifyContainer: {
        backgroundColor: "#1ed760",
        padding: 7,
        borderRadius: 6,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
});