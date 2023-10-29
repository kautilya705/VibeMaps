import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./Screens/Auth";
import Navbar from "./Components/Navbar";
import { SpotifyButton } from './Screens/SpotifyButton';
import Home from "./Screens/Home";

export default function App() {
  // const isLoggedIn = false;
  // const setIsLoggedIn = false;
  // console.log(setIsLoggedIn);

  const [userEmail, setUserEmail] = useState<string | null>(null);


  const showUserStuff = () => {
    if (userEmail === null) {
      return (
        <Auth setUserEmail={setUserEmail} />
      )
    } else {
      return (
        <>
          <Home />
          <Navbar />
        </>
      )
    }
  }

  return (
    <View style={styles.container}>
      {/* <Navbar /> */}

      {userEmail}

      {showUserStuff()}

      {/* {isLoggedIn ? <Navbar /> : <Auth onLoginSuccess={() => setIsLoggedIn(true)} />} */}
      {/* {isLoggedIn && <Home />} */}
      {/* <SpotifyButton setIsLoggedIn={setIsLoggedIn} /> */}
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