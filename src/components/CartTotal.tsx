import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";

export default function CartTotal({
  total,
  onCheckout,
}: {
  total: number;
  onCheckout: () => void;
}) {
  const { t } = useLanguage();

  return (
    <View style={styles.bar}>
      <View>
        <Text style={styles.label}>{t("total")}</Text>
        <Text style={styles.amount}>${total}</Text>
      </View>
      <Button buttonName={t("checkout")} onPress={onCheckout} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
  },
  label: {
    fontSize: 14,
    color: "#6b7280",
  },
  amount: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },
});
