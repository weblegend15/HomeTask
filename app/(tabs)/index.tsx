import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={() => setBackgroundColor(getRandomColor())}
    >
      <Text style={styles.text}>Hello there</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
