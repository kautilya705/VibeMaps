import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

const VibePopUp = () => {
  const [showVibePopUp, setShowVibePopUp] = useState(false);

  const handleCloseVibePopUp = () => {
    setShowVibePopUp(!showVibePopUp);
  };

  return (
    <View style={styles.container}>
      {/* Green  Component*/}
      <View style={styles.containerMain}>
        {/* Close Button */}

        <View style={styles.heading}>
          <Text style={styles.title}>Today's Vibez</Text>
          <Image source={require("../assets/healing-img.png")} style={styles.Image} />

          <View style={styles.vibingContainer}>
            <ScrollView style={{ width: '100%' }}>
              <Text style={styles.vibingText}>
                You're vibing to some catchy and upbeat tunes that'll get you moving and grooving🦍🦍...safasfasfasfsafasfasdfasdfasfsadfsfasfs
              </Text>
            </ScrollView>
          </View>
          {/* <Text style={styles.subtitle}>Keep your vibe going</Text> */}
        </View>
        {/* This is the music list component, once we get the data we can create a different component and send the image, name and artist as props */}
        <View style={styles.musicCardContainer}>
          <View>
            <Text style={styles.playText}>Keep your vibe going</Text>
          </View>
          <ScrollView style={styles.scrollView}>
            <View style={styles.musicCard}>
              <View style={styles.leftCard}>
                <Text style={styles.musicText}>1</Text>
                <Image
                  source={require("../assets/drakeAlbum.jpeg")}
                  style={styles.musicImage}
                />
                <View>
                  <Text style={styles.musicText}>First Person Shooter</Text>
                  <Text style={styles.musicTextsub}>Drake, J. Cole</Text>
                </View>
              </View>
              <View style={styles.musicText}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={14}
                  color="white"
                />
              </View>
            </View>
            <View style={styles.musicCard}>
              <View style={styles.leftCard}>
                <Text style={styles.musicText}>2</Text>
                <Image
                  source={require("../assets/drakeAlbum.jpeg")}
                  style={styles.musicImage}
                />
                <View>
                  <Text style={styles.musicText}>First Person Shooter</Text>
                  <Text style={styles.musicTextsub}>Drake, J. Cole</Text>
                </View>
              </View>
              <View style={styles.musicText}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={14}
                  color="white"
                />
              </View>
            </View>
            <View style={styles.musicCard}>
              <View style={styles.leftCard}>
                <Text style={styles.musicText}>3</Text>
                <Image
                  source={require("../assets/drakeAlbum.jpeg")}
                  style={styles.musicImage}
                />
                <View>
                  <Text style={styles.musicText}>First Person Shooter</Text>
                  <Text style={styles.musicTextsub}>Drake, J. Cole</Text>
                </View>
              </View>
              <View style={styles.musicText}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={14}
                  color="white"
                />
              </View>
            </View>
            <View style={styles.musicCard}>
              <View style={styles.leftCard}>
                <Text style={styles.musicText}>4</Text>
                <Image
                  source={require("../assets/drakeAlbum.jpeg")}
                  style={styles.musicImage}
                />
                <View>
                  <Text style={styles.musicText}>First Person Shooter</Text>
                  <Text style={styles.musicTextsub}>Drake, J. Cole</Text>
                </View>
              </View>
              <View style={styles.musicText}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={14}
                  color="white"
                />
              </View>
            </View>
            <View style={styles.musicCard}>
              <View style={styles.leftCard}>
                <Text style={styles.musicText}>5</Text>
                <Image
                  source={require("../assets/drakeAlbum.jpeg")}
                  style={styles.musicImage}
                />
                <View>
                  <Text style={styles.musicText}>First Person Shooter</Text>
                  <Text style={styles.musicTextsub}>Drake, J. Cole</Text>
                </View>
              </View>
              <View style={styles.musicText}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={14}
                  color="white"
                />
              </View>
            </View>
            <View style={styles.musicCard}>
              <View style={styles.leftCard}>
                <Text style={styles.musicText}>6</Text>
                <Image
                  source={require("../assets/drakeAlbum.jpeg")}
                  style={styles.musicImage}
                />
                <View>
                  <Text style={styles.musicText}>First Person Shooter</Text>
                  <Text style={styles.musicTextsub}>Drake, J. Cole</Text>
                </View>
              </View>
              <View style={styles.musicText}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={14}
                  color="white"
                />
              </View>
            </View>
            <View style={styles.musicCard}>
              <View style={styles.leftCard}>
                <Text style={styles.musicText}>7</Text>
                <Image
                  source={require("../assets/drakeAlbum.jpeg")}
                  style={styles.musicImage}
                />
                <View>
                  <Text style={styles.musicText}>First Person Shooter</Text>
                  <Text style={styles.musicTextsub}>Drake, J. Cole</Text>
                </View>
              </View>
              <View style={styles.musicText}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={14}
                  color="white"
                />
              </View>
            </View>
            <View style={styles.musicCard}>
              <View style={styles.leftCard}>
                <Text style={styles.musicText}>8</Text>
                <Image
                  source={require("../assets/drakeAlbum.jpeg")}
                  style={styles.musicImage}
                />
                <View>
                  <Text style={styles.musicText}>First Person Shooter</Text>
                  <Text style={styles.musicTextsub}>Drake, J. Cole</Text>
                </View>
              </View>
              <View style={styles.musicText}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={14}
                  color="white"
                />
              </View>
            </View>
            <View style={styles.musicCard}>
              <View style={styles.leftCard}>
                <Text style={styles.musicText}>9</Text>
                <Image
                  source={require("../assets/drakeAlbum.jpeg")}
                  style={styles.musicImage}
                />
                <View>
                  <Text style={styles.musicText}>First Person Shooter</Text>
                  <Text style={styles.musicTextsub}>Drake, J. Cole</Text>
                </View>
              </View>
              <View style={styles.musicText}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={14}
                  color="white"
                />
              </View>
            </View>
            <View style={styles.musicCard}>
              <View style={styles.leftCard}>
                <Text style={styles.musicText}>10</Text>
                <Image
                  source={require("../assets/drakeAlbum.jpeg")}
                  style={styles.musicImage}
                />
                <View>
                  <Text style={styles.musicText}>First Person Shooter</Text>
                  <Text style={styles.musicTextsub}>Drake, J. Cole</Text>
                </View>
              </View>
              <View style={styles.musicText}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={14}
                  color="white"
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default VibePopUp;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "transparent",
    position: "relative",
    height: "100%",
    width: "100%",
  },
  close: {
    color: "white",
    fontSize: 25,
    position: "absolute",
    top: 20,
    right: 20,
  },
  containerMain: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "rgba(0, 140, 120, 0.9)",
    height: "90%",
    width: "95%",
    borderRadius: 12,
    position: "relative",
    zIndex: 100,
    padding: 20,
    gap: 40,
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "25%",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  Image: {
    height: 100,
    width: 150,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  playText: {
    textAlign: "left",
    width: 300,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  musicCardContainer: {
    margin: 20,
    height: "60%",
    width: "100%",
  },
  musicCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  leftCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  musicImage: {
    height: 50,
    width: 50,
  },
  musicText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  musicTextsub: {
    color: "white",
    fontSize: 12,
  },
  vibingContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    maxHeight: 100, // Adjust this to the height you want
    alignItems: 'center',
    justifyContent: 'center',
  },

  vibingText: {
    textAlign: 'center',
    // Add any other styling you want for the text here
  },
});
