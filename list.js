import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  //view is like a div
  //text needs to be rendered in text tag
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "Amir", id: "2" },
    { name: "Tom", id: "3" },
    { name: "John", id: "4" },
    { name: "mario", id: "5" },
    { name: "bowser", id: "6" },
    { name: "Jerry", id: "7" },
    { name: "Ron", id: "8" },
  ]);

  //flatList it only render the items in the view where as the map functions renders evrythign at once
  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id} // use this if there is no "key" but instead now it is "id"
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}> {item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

//react native does not use css ios does not render css
//CSS is not inherited for components unless it is a text component within a text componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // justifyContent: "center",
  },

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});
