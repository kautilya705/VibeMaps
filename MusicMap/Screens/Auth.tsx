import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import SpotifyButton from './SpotifyButton';  // Ensure the path is correct if your files are in different directories
import { ConvexProvider, ConvexReactClient } from "convex/react";
import "react-native-get-random-values";
// import { CONVEX_URL } from "@env";
// import Tasks from "./Tasks";

// const convex = new ConvexReactClient(CONVEX_URL, {
//   unsavedChangesWarning: false,
// });

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SpotifyButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
