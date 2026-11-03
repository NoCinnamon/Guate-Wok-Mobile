import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform, View, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import OrderNote from "../../components/OrderNote";
import CartItems from "../../components/CartItems";
import { useCart } from "../../context/CartContext";
import { menuItems } from "@/data/menu";
import Stripe from "../../components/Stripe";


const storeNoteData = async (note:string) => {
  try {
    await AsyncStorage.setItem('orderNote', note);
  } catch (e) {
    // saving error
  }
};

export default function Cart() {
  const { items } = useCart();
  const [note,setNote] = useState("");
  const insets = useSafeAreaInsets();
  const aboveTabs = Math.max(insets.bottom, Platform.OS === "ios" ? 88 : 64);
  const total = items.reduce((sum, item) => {
    const dish = menuItems.find((menuItem) => menuItem.name === item.name);
    return sum + (dish?.price ?? 0) * item.quantity;
  }, 0);
  

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
      <ScrollView
        style={styles.list}
        contentContainerStyle={[styles.content, { paddingTop: insets.top }]}
      >
        <CartItems />
        <OrderNote note={note} onChangeNote={updateNote} />
      </ScrollView>
      
      <View style={{ marginBottom: aboveTabs }}>
        <Stripe total={total} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#ffffff",
  },
  list: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
});
