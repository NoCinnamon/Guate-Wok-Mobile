import { StyleSheet, View } from "react-native";
import MenuList from "../../components/MenuList";

export default function Menu() {
  return (
    <View style={styles.container}>
      <MenuList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
