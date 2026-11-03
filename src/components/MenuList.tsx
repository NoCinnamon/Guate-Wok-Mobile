import { router } from "expo-router";
import { FlatList, StyleSheet } from "react-native";
import { menuItems } from "../data/menu";
import MenuCard from "./MenuCard";

export default function MenuList() {
  return (
    <FlatList
      numColumns={2}
      contentContainerStyle={styles.list}
      keyExtractor={(item) => item.id}
      data={menuItems}
      renderItem={({ item }) => (
        <MenuCard
          name={item.name}
          price={item.price}
          image={item.image}
          onPress={() =>
            router.push({
              pathname: "/detail",
              params: { id: item.id },
            })
          }
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 110,
  },
});
