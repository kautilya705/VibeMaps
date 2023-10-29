import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SpotifyButton } from './SpotifyButton';

type Props = {
  setUserEmail: (email: string | null) => void;
};

const Auth: React.FC<Props> = ({ setUserEmail }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SpotifyButton setUserEmail={setUserEmail} />
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

export default Auth;
