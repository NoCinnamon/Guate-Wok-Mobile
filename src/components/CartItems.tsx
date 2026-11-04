import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { menuItems } from "../data/menu";
import { useCart } from "../context/CartContext";
import CartCounter from "./CartCounter";
import { useLanguage } from "../context/LanguageContext";

export default function CartItems() {
  const { items, decreaseQuantity, increaseQuantity, deleteItem } = useCart();
  const { t } = useLanguage();

  return (
    <View style={styles.cartItems}>
      <Text style={styles.cartTitleText}>{t("myItems")}</Text>
      {items.map((item) => {
        const menuItem = menuItems.find((dish) => dish.name === item.name);
        const picture = menuItem?.image ?? item.image;
        return (
          <View key={item.id} style={styles.itemRow}>
            {picture ? (
              <Image source={picture} style={styles.itemImage} contentFit="cover" />
            ) : null}
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{menuItem ? t(menuItem.nameKey) : item.name}</Text>
              <View style={styles.priceRow}>
                {menuItem ? <Text style={styles.itemPrice}>${menuItem.price}</Text> : null}
                <CartCounter
                  quantity={item.quantity || 1}
                  onIncrease={() => increaseQuantity(item.id)}
                  onDecrease={() => decreaseQuantity(item.id)}
                />
                <Feather
                  name="trash"
                  size={20}
                  color="#c1c7c3"
                  onPress={() => deleteItem(item.id)}
                />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cartItems: {
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 12,
    gap: 8,
  },
  cartTitleText: {
    color: "#111827",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  itemInfo: {
    flex: 1,
    gap: 20,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  itemPrice: {
    flex: 1,
    fontSize: 16,
    color: "#c46b6b",
  },
  itemImage: {
    width: 56,
    height: 72,
    borderRadius: 8,
  },
});
