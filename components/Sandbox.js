import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

// everything in a flex container will by default become a flex item
const styles = StyleSheet.create({
  container: {
    // flex: 1, // takes that takes up the whole view - takes up all the avaialble room

    paddingTop: 40,
    backgroundColor: "#333",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    // default is flexDirection: "container",
  },
  boxOne: {
    flex: 5, 
    backgroundColor: "violet",
    padding: 20,
  },
  boxTwo: {
    flex: 1, 
    backgroundColor: "gold",
    padding: 30,
  },
  boxThree: {
    flex: 1, 
    backgroundColor: "red",
    padding: 40,
  },
  boxFour: {
    flex: 1, 
    backgroundColor: "skyblue",
    padding: 10,
  },
});
