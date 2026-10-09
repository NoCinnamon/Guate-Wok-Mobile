import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import { menuItems } from "../../data/menu";
import MenuCard from "../../components/MenuCard";
import { router } from "expo-router";


export default function Menu() {

    return (
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          contentContainerStyle={styles.list}
          keyExtractor={(item) => item.id}
          data={menuItems}
          renderItem={({item}) => (
            <MenuCard name={item.name} image={item.image} 
            onPress={() => 
              router.push({
                pathname: "/detail",
                params: { id: item.id },
              })
            }/>
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
