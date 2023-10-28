import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const isIconActive = (iconName) => {
    return iconName === activeIcon;
  };

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbarItem} key="home">
        <Entypo
          name="home"
          size={24}
          color={isIconActive("home") ? "white" : "gray"}
          onPress={() => handleIconClick("home")}
        />
        {isIconActive("home") && <View style={styles.underline}></View>}
      </View>
      <View style={styles.navbarItem} key="playlist">
        <SimpleLineIcons
          name="playlist"
          size={20}
          color={isIconActive("playlist") ? "white" : "gray"}
          onPress={() => handleIconClick("playlist")}
        />
        {isIconActive("playlist") && <View style={styles.underline}></View>}
      </View>
      <View style={styles.navbarItem} key="map-pin">
        <Feather
          name="map-pin"
          size={24}
          color={isIconActive("map-pin") ? "white" : "gray"}
          onPress={() => handleIconClick("map-pin")}
        />
        {isIconActive("map-pin") && <View style={styles.underline}></View>}
      </View>
      <View style={styles.navbarItem} key="settings-outline">
        <Ionicons
          name="settings-outline"
          size={24}
          color={isIconActive("settings-outline") ? "white" : "gray"}
          onPress={() => handleIconClick("settings-outline")}
        />
        {isIconActive("settings-outline") && (
          <View style={styles.underline}></View>
        )}
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    position: "absolute",
    bottom: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    height: 50,
    zIndex: 10,
  },
  navbarItem: {
    alignItems: "center",
  },
  underline: {
    width: 24,
    height: 4,
    marginTop: 5,
    backgroundColor: "white",
  },
});