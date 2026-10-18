import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, StyleSheet,ScrollView } from "react-native";
import{ useEffect, useState } from "react";
import OrderNote from "../../components/OrderNote";
import { useCart } from "../../context/CartContext";
import { Feather } from "@expo/vector-icons";
import CartCounter  from "../../components/CartCounter"
import { useTheme } from "../../context/ThemeContext";


const storeNoteData = async (note:string) => {
  try {
    await AsyncStorage.setItem('orderNote', note);
  } catch (e) {
    // saving error
  }
};

export default function Cart() {
  const { items, decreaseQuantity, increaseQuantity, deleteItem } = useCart();                      //  the function a screen calls to get the cart.
  const [note,setNote] = useState("");
  const { theme } = useTheme();
  

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
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]} 
     contentContainerStyle={styles.content}>

      <View style={styles.cartItems}>
        <Text style={[styles.cartTitleText, { color: theme.text }]}> My Cart:</Text>
        {items.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <Text style={[styles.itemName, { color: theme.text }]}>{item.name}</Text>
            <CartCounter 
              quantity={item.quantity || 1} 
              onIncrease={() => increaseQuantity(item.id)}
              onDecrease={() => decreaseQuantity(item.id)}

            />
            <Feather name="trash" size={20} color="#c1c7c3" onPress={() => deleteItem(item.id)}/>
          </View>
        ))}
      </View>
      <OrderNote note={note}
      onChangeNote={updateNote}/>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#F4EFE6",
    paddingTop: 110,
  },
  content: {
    flexGrow: 1,
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
