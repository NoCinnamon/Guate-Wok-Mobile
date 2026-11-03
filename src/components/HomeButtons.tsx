import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import Button from "./Button";

export default function HomeButtons() {
  return (
    <View style={styles.row}>
      <Button
        buttonName="VIEW MENU"
        onPress={() => router.navigate("/menu")}
      />
      <Button
        buttonName="LOCATION"
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
