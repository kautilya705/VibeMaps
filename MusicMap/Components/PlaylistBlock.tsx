import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

interface PlaylistBlockProps {
  image: any; // Change 'any' to the actual type of your image prop
  vibe: string; // Assuming vibe is a string
  description: string; // Assuming description is a string
}

const PlaylistBlock: React.FC<PlaylistBlockProps> = ({
  image,
  vibe,
  description,
}) => {
  return (
    <ImageBackground source={image} style={styles.musicBlockContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{vibe}</Text>
        <Text style={styles.textSub}>{description}</Text>
      </View>
    </ImageBackground>
  );
};

export default PlaylistBlock;

const styles = StyleSheet.create({
  musicBlockContainer: {
    width: 250,
    height: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12, // Set border radius to 12
    margin: 10,

    position: "relative",
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "auto",
  },
  text: {
    marginTop: 3,
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  textSub: {
    color: "white",
    fontSize: 12,
  },
});
