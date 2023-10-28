import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./Screens/Auth";
import Navbar from "./Components/Navbar";
import SpotifyButton from './Screens/SpotifyButton';
import Home from "./Screens/Home";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Create state to track if user is logged in

  return (
    <View style={styles.container}>
      {isLoggedIn ? <Navbar /> : <Auth onLoginSuccess={() => setIsLoggedIn(true)} />}
      {isLoggedIn && <Home />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});