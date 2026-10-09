import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CartCounter(
  { quantity,
    onIncrease,
    onDecrease,
  }: { 
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
  }
) {
  
  return (
    <View style={styles.container}>
      <Pressable style={styles.minusButton} onPress={onDecrease}>
        <AntDesign name="minus" size={12} color="#4b5563" />
      </Pressable>
      <Text style={styles.quantity}>{quantity || 1}</Text>
      <Pressable style={styles.plusButton} onPress={onIncrease}>
        <AntDesign name="plus" size={12} color="#ffffff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  minusButton: {
    width: 18,
    height: 18,
    borderRadius: 14,
    backgroundColor: "#d1d5db",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  plusButton: {
    width: 18,
    height: 18,
    borderRadius: 14,
    backgroundColor: "#6b7280",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  quantity: {
    width: 24,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
});
