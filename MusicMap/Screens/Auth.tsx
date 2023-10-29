import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { SpotifyButton } from './SpotifyButton';

type Props = {
  onLoginSuccess: () => void;
};

const Auth: React.FC<Props> = ({ onLoginSuccess }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SpotifyButton onLoginSuccess={onLoginSuccess} />
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
