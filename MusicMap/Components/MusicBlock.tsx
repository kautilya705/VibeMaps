import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const MusicBlock = () => {
  return (
    <View style={styles.musicBlockContainer}>
      <Image
        source={require("../assets/drakeAlbum.jpeg")}
        style={styles.musicImage}
      />
      <Text style={styles.text}>First Person Shooter</Text>
      <Text style={styles.textSub}>Drake, J. Cole</Text>
    </View>
  );
};

export default MusicBlock;

const styles = StyleSheet.create({
  musicBlockContainer: {
    width: 150,
    height: "auto",
    borderRadius: 12,
    margin: 10,
    marginRight: 0,
    marginLeft: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
  musicImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
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
