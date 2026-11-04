import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";

export default function HomeButtons() {
  const { t } = useLanguage();

  return (
    <View style={styles.row}>
      <Button
        buttonName={t("viewMenu")}
        onPress={() => router.navigate("/menu")}
      />
      <Button
        buttonName={t("location")}
        onPress={() => router.navigate("/location")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 12,
  },
});
