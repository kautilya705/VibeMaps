import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import SpotifyButton from './SpotifyButton';  // Ensure the path is correct if your files are in different directories

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
