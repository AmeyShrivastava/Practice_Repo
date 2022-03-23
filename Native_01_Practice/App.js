import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: "Milk",
    },
    {
      id: uuidv4(),
      text: "Eggs",
    },
    {
      id: uuidv4(),
      text: "Bread",
    },
    {
      id: uuidv4(),
      text: "Juice",
    },
  ]);

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        "No item entered",
        "Please enter an item when adding to your shopping list",
        [
          {
            text: "Understood",
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
      // Alert System looks ok but is not working on Web Version with Expo CLI
    } else {
      setItems((prevItems) => {
        return [{ id: uuidv4(), text }, ...prevItems];
      });
    }
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Native Practice" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
