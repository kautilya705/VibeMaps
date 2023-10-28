import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./Screens/Auth";
import Navbar from "./Components/Navbar";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import "react-native-get-random-values";
import { CONVEX_URL } from "@env";
import Tasks from "./Tasks";

const convex = new ConvexReactClient(CONVEX_URL, {
  unsavedChangesWarning: false,
});

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Auth />
        <Navbar />
      </View>

      <ConvexProvider client={convex}>
        <Tasks />
      </ConvexProvider>
    </>
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
