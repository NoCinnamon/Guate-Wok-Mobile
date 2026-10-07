import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import MenuCard from "../../components/MenuCard";
import { useState } from "react";
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Menu() {
  const [menuItem, setMenuItem] = useState([
    { id: "1", name: "Taco", image: require("../../../assets/images/taco.jpg") },
    { id: "2", name: "Kimbap", image: require("../../../assets/images/kimbap.jpg") },
    { id: "3", name: "Mango Drink", image: require("../../../assets/images/mangoDrink.jpg") },
    { id: "4", name: "Lime Drink", image: require("../../../assets/images/limeDrink.jpg") },
  ]);

    return (
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          contentContainerStyle={styles.list}
          keyExtractor={(item) => item.id}
          data={menuItem}
          renderItem={({item}) => (
            <MenuCard name={item.name} image={item.image} />
          )}
        />



      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EFE6",
  },
  list: {
    paddingTop: 110,
  },
  addButton: {

  }

});
