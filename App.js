import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import AddTodo from "./components/AddTodo";
import Sandbox from "./components/Sandbox";

export default function App() {
  const [toDos, setToDos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "buy hat", key: "2" },
    { text: "buy airplane", key: "3" },
  ]);

  const pressHandler = (key) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((toDo) => toDo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setToDos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOOOPS", "todos must be longer", [
        { text: "understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };
  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dissmissed feedback ");
      }}
    >
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={toDos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    // paddingHorizontal: 20,
    // justifyContent: "center",
  },
  content: {
    padding: 40,
    backgroundColor: "white",
    flex: 1,
  },
  list: {
    marginTop: 20,
  },
});
