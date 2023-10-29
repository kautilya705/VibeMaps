import React, { useState, useEffect } from "react";
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
import * as AuthSession from "expo-auth-session";
//import express, { Express } from 'express';
import querystring from 'querystring';


// const discovery = {
//   authorizationEndpoint: "https://accounts.spotify.com/authorize",
//   tokenEndpoint: "https://accounts.spotify.com/api/token",
// };

// const Auth: React.FC = () => {
//   const [isHovered, setHovered] = useState(false);
//   const tabScale = new Animated.Value(1);

//   const [request, response, promptAsync] = AuthSession.useAuthRequest(
//     {
//       clientId: "bc62fd152f654b659bad4bf5b5c3a7fe",
//       scopes: ["user-read-private", "user-library-read"],
//       redirectUri: AuthSession.makeRedirectUri(),
//       responseType: "token",
//     },
//     discovery
//   );
//   console.log("Bruh");
// const clientId = 'CLIENT_ID';
// const redirectUri = 'VibeMaps-login://callback';

// const app = express();

useEffect(() => {
  console.log("response val: ", response);
  if (response?.type === "success") {
    console.log("success");
    const { access_token } = response.params;
    console.log(access_token); // Use the access_token as required
  }
  else {
    console.log("failure");
    console.log(AuthSession.makeRedirectUri());
  }
}, [response]);

const handleTabPressIn = () => {
  Animated.timing(tabScale, {
    toValue: 1.2,
    duration: 300,
    easing: Easing.linear,
    useNativeDriver: false,
  }).start();
};

const handleTabPressOut = () => {
  Animated.timing(tabScale, {
    toValue: 1,
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
      >
        <View style={styles.appleMusicContainer}>
          <FontAwesome5 name="music" size={24} color="white" />
        </View>
        <Text style={styles.text}>Apple Music</Text>
      </TouchableOpacity>
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
        onPress={() => promptAsync()}
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

export default Auth;

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
