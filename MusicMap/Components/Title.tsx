import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface TitleProps {
  word: string;
  userName: string;
}

const Title: React.FC<TitleProps> = ({ word, userName }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{word}</Text>
      <View style={styles.userButtonContainer}>
        <Text style={styles.userButtonText}>{userName}</Text>
      </View>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  userButtonContainer: {
    backgroundColor: "white",
    fontWeight: "700",
    padding: 7,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userButtonText: {
    color: "black",
    fontWeight: "600",
    fontSize: 20,
  },
});
