import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Animated,
    ScrollView,
} from "react-native";
import React, { useState } from "react";
import VibePopUp from "../Components/VibePopUp";
import Navbar from "../Components/Navbar";
import { AntDesign } from "@expo/vector-icons";
import MusicBlock from "../Components/MusicBlock";
import PlaylistBlock from "../Components/PlaylistBlock";
import Title from "../Components/Title";

const Home = () => {
    const user = "John Doe";

    const [showVibe, setShowVibe] = useState(true);
    const animatedValue = new Animated.Value(1); // Initialize the animated value

    const handleCloseVibePopUp = () => {
        setShowVibe(!showVibe);
    };
    const handleVibeContainerPress = () => {
        // Add your animation here, e.g., fade out the vibeContainer
        Animated.timing(animatedValue, {
            toValue: 0.5, // Set opacity to 0
            duration: 500, // Animation duration in milliseconds
            useNativeDriver: true, // Set to true for better performance
        }).start();
        handleCloseVibePopUp();
    };

    return (
        <ImageBackground
            source={require("../assets/D07CCB56-715C-475A-AA17-45EB9BCC2323.jpeg")}
            style={{ flex: 1, width: '100%', height: '100%' }}
        >
            {showVibe && (
                <View style={styles.popupContainer}>
                    <AntDesign
                        name="close"
                        size={24}
                        color="white"
                        style={styles.close}
                        onPress={handleCloseVibePopUp}
                    />
                    <VibePopUp />
                </View>
            )}
            {!showVibe && (
                <View style={styles.homeContainer}>
                    <ScrollView style={styles.overlay} horizontal={false}>
                        <Title word="Home" userName="JD" />
                        <View style={styles.musicBlock}>
                            <Text style={styles.vibeText}>Recently Listened</Text>
                            <ScrollView horizontal={true}>
                                <MusicBlock />
                                <MusicBlock />
                                <MusicBlock />
                                <MusicBlock />
                                <MusicBlock />
                                <MusicBlock />
                                <MusicBlock />
                                <MusicBlock />
                            </ScrollView>
                        </View>

                        <View style={styles.PlaylistBlock}>
                            <Text style={styles.vibeText}>Recently Listened</Text>
                            <ScrollView horizontal={true}>
                                <PlaylistBlock
                                    image={require("../assets/red.gif")}
                                    vibe={"Acoustic"}
                                    description={
                                        "Acoutstic guitar, and folk that bring a sooting vibe"
                                    }
                                />
                                <PlaylistBlock
                                    image={require("../assets/green.gif")}
                                    vibe={"Acoustic"}
                                    description={
                                        "Acoutstic guitar, and folk that bring a sooting vibe"
                                    }
                                />
                                <PlaylistBlock
                                    image={require("../assets/lightred.gif")}
                                    vibe={"Acoustic"}
                                    description={
                                        "Acoutstic guitar, and folk that bring a sooting vibe"
                                    }
                                />
                                <PlaylistBlock
                                    image={require("../assets/Orange.jpeg")}
                                    vibe={"Acoustic"}
                                    description={
                                        "Acoutstic guitar, and folk that bring a sooting vibe"
                                    }
                                />
                                <PlaylistBlock
                                    image={require("../assets/black.gif")}
                                    vibe={"Acoustic"}
                                    description={
                                        "Acoutstic guitar, and folk that bring a sooting vibe"
                                    }
                                />
                                <PlaylistBlock
                                    image={require("../assets/purple.gif")}
                                    vibe={"Acoustic"}
                                    description={
                                        "Acoutstic guitar, and folk that bring a sooting vibe"
                                    }
                                />
                                <PlaylistBlock
                                    image={require("../assets/blue.gif")}
                                    vibe={"Acoustic"}
                                    description={
                                        "Acoutstic guitar, and folk that bring a sooting vibe"
                                    }
                                />
                                <PlaylistBlock
                                    image={require("../assets/white.gif")}
                                    vibe={"Acoustic"}
                                    description={
                                        "Acoutstic guitar, and folk that bring a sooting vibe"
                                    }
                                />
                                <PlaylistBlock
                                    image={require("../assets/sepia.gif")}
                                    vibe={"Acoustic"}
                                    description={
                                        "Acoutstic guitar, and folk that bring a sooting vibe"
                                    }
                                />
                                <PlaylistBlock
                                    image={require("../assets/yellow.gif")}
                                    vibe={"Acoustic"}
                                    description={
                                        "Acoutstic guitar, and folk that bring a sooting vibe"
                                    }
                                />
                            </ScrollView>
                        </View>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={handleVibeContainerPress}
                        >
                            <Animated.View
                                style={[styles.vibeContainer, { opacity: animatedValue }]}
                            >
                                <Text style={styles.vibeText}>Today's Vibe</Text>
                                <AntDesign name="up" size={24} color="white" />
                            </Animated.View>
                        </TouchableOpacity>
                    </ScrollView>
                    <Navbar />
                </View>
            )}
        </ImageBackground>
    );
};

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    authContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    overlay: {
        marginTop: 50,
        flex: 1,
        padding: 10,
        width: "100%",
        height: "100%",

        // backgroundColor: "rgba(34, 34, 23, 0.6)", // Overlay with 30% opacity
    },
    musicBlock: {
        backgroundColor: "rgba(130, 140, 120, 0.8)",
        width: "100%",
        height: 220,
        borderRadius: 12,
        padding: 10,
        marginBottom: 20,
    },
    PlaylistBlock: {
        backgroundColor: "rgba(130, 140, 120, 0.8)",
        width: "100%",
        height: "auto",
        borderRadius: 12,
        padding: 10,
        marginBottom: 20,
    },
    popupContainer: {
        position: "relative",
    },
    close: {
        position: "absolute",
        top: 100,
        right: 20,
        zIndex: 100,
    },
    vibeContainer: {
        height: "auto",
        minHeight: 40,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 12,
        backgroundColor: "rgba(0, 140, 120, 0.8)",
    },
    vibeText: {
        color: "white",
        fontSize: 20,
    },
});