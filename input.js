import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  //view is like a div
  //text needs to be rendered in text tag
  const [name, setName] = useState("Amir");
  const [age, setAge] = useState(25);

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="What is your name"
        onChangeText={(val) => setName(val)}
      />
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="What is your age"
        onChangeText={(val) => setAge(val)}
      />
      <Text style={styles.boldText}>
        name: {name} age: {age}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

//react native does not use css ios does not render css
//CSS is not inherited for components unless it is a text component within a text componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
