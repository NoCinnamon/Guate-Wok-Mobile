import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, StyleSheet } from "react-native";
import{ useEffect, useState } from "react";
import OrderNote from "../../components/OrderNote";
import { useCart } from "../../context/CartContext";
import { Feather } from "@expo/vector-icons";
import CartCounter  from "../../components/CartCounter"


const storeNoteData = async (note:string) => {
  try {
    await AsyncStorage.setItem('orderNote', note);
  } catch (e) {
    // saving error
  }
};

export default function Cart() {
  const { items, increaseQuantity, decreaseQuantity } = useCart();
  const [note,setNote] = useState("");
  


  function updateNote(text: string) {
    setNote(text);
    storeNoteData(text);
  }

  async function loadNote() {
    const saved = await AsyncStorage.getItem("orderNote");
    console.log("saved note:", saved);
    if (saved !== null) {
      setNote(saved);
    }
  }
  useEffect(() => {
    loadNote();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cartItems}>
        <Text style={styles.cartTitleText}> My Cart:</Text>
        {items.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <Text style={styles.itemName}>{item.name}</Text>
            <CartCounter 
              quantity={item.quantity || 1} 
              onIncrease={() => increaseQuantity(item.id)}
              onDecrease={() => decreaseQuantity(item.id)}

            />
            <Feather name="trash" size={20} color="#c1c7c3" />
          </View>
        ))}
      </View>
      <OrderNote note={note}
      onChangeNote={updateNote}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#F4EFE6",
    paddingTop: 110,
  },
  cartItems: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 12,
    gap: 8,
  },
  cartTitleText: {
    color: "#1d4ed8",
    fontSize: 16,
    fontWeight: "700",
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  itemName: {
    flex: 1,
  },
});
