import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 10,
    backgroundColor: "darkgreen",
  },
  text: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
});

export default Header;
