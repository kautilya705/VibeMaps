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

type Props = {
    onLoginSuccess: () => void;
};

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
    console.log(v);
    // export default function App() {
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
            console.log("good shit");
            onLoginSuccess();
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
            style={styles.authContainer}
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