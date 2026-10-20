import { useCart } from "@/context/CartContext";
import { menuItems } from "@/data/menu";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View, Alert } from "react-native";
import CartCounter from "../components/CartCounter";

export default function Detail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = menuItems.find((menuItem) => menuItem.id === id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.igrediantCard}>
        {item && (
          <Image
            source={item.image}
            style={styles.detailImage}
            contentFit="cover"
          />
        )}
        <View style={styles.nameAndCounter}>
          <Text style={styles.ingredientsTitle}>{item?.name}</Text>
          <CartCounter
            onIncrease={() => setQuantity((current) => current + 1)}
            onDecrease={() =>
              setQuantity((current) => (current > 1 ? current - 1 : 1))
            }
            quantity={quantity}
          />
        </View>
        <Text style={styles.ingredientsTitle}>Main Ingredients</Text>
        <Text style={styles.ingredientsText}>{item?.ingredients}</Text>
      </View>

      <Pressable
        onPress={() => {
          if (item) {
            addItem(item.name, quantity);
          }
          Alert.alert( `${item?.name} is added to cart `);
        }}
        style={styles.addToCartButton}
      >
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  id: {
    fontSize: 24,
    fontWeight: "700",
  },
  detailImage: {
    width: "100%",
    height: 280,
    borderRadius: 16,
  },
  nameAndCounter: {
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  igrediantCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 8,
    elevation: 6,
    padding: 16,
  },
  ingredientsTitle: {
    color: "#1d4ed8",
    fontSize: 16,
    fontWeight: "700",
  },
  ingredientsText: {
    color: "#1f2937",
    fontSize: 16,
    lineHeight: 24,
  },
  addToCartButton: {
    backgroundColor: "#f22613",
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 22,
    marginTop: 24,
    alignSelf: "center",
  },
  addToCartText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
