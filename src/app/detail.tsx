import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { menuItems } from "@/data/menu";
import { Image } from "expo-image";
import { useCart } from "@/context/CartContext";

export default function Detail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = menuItems.find((menuItem) => menuItem.id === id);
  const { addItem } = useCart();


  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.backArrow}>
        <Ionicons name="chevron-back" size={28} color="#1d4ed8" />
      </Pressable>
      {item && (
        <Image source={item.image} style={styles.detailImage} contentFit="cover" />
      )}
      <View style={styles.igrediantCard}>
        <Text style={styles.ingredientsTitle}>Main Ingredients</Text>
        <Text style={styles.ingredientsText}>{item?.ingredients}</Text>
      </View>

      <Pressable onPress={() => {
        if (item){
          addItem(item.name);
        }
      }} style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </Pressable>
      



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EFE6",
    paddingTop: 110,
    paddingHorizontal: 16,
  },
  backArrow: {
    alignSelf: "flex-start",
    marginBottom: 24,
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
  igrediantCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    gap: 8,
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
