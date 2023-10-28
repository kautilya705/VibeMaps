import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./Screens/Auth";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Auth />
      <Navbar />
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
