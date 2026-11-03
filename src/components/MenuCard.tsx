import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import Button from "./Button";
import { useCart } from "../context/CartContext";



export default function MenuCard({
  name,
  price,
  image,
  onPress,
}: {
  name: string;
  price: number;
  image: number;
  onPress: () => void;
}) {
  const { addItem } = useCart();


  return (
    <View style={styles.cardShadow}>
      <View style={styles.card}>
        <Pressable onPress={onPress}>
          <Image source={image} style={styles.image} contentFit="cover" />
        </Pressable>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
          <Button buttonName='Add' 
           onPress={() => {
            addItem(name, 1, image);
            Alert.alert( `${name} is added to cart `);
          }}
          style={styles.addButton} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardShadow: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 8,
    elevation: 6,
  },
  card: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },

  image: {
    width: "100%",
    height: 140,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 8,
    gap: 8,
  },
  name: {
    flex: 1,
    fontWeight: "700",
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: "#6b7280",
  },
  addButton: {
    alignSelf: "center",
    marginBottom: 12,
    paddingVertical: 8,
  },
});
