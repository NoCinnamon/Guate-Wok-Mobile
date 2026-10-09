import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Button from "./Button";
// import { router } from "expo-router";
import { useCart } from "../context/CartContext";



export default function MenuCard({
  name,
  image,
  onPress,
}: {
  name: string;
  image: number;
  onPress: () => void;
}) {
  const { addItem } = useCart();
  return (
    <View style={styles.card}>
      <Pressable onPress={onPress}>
        <Image source={image} style={styles.image} contentFit="cover" />
      </Pressable>
      <Text style={styles.name}>{name}</Text>
      <Button buttonName='Add' onPress={() => addItem(name)} style={styles.addButton} />
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 140,
  },
  name: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    padding: 12,
  },
  addButton: {
    alignSelf: "center",
    marginBottom: 12,
    paddingVertical: 8,
  },
});
