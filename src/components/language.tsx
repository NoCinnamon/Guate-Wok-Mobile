import Ionicons from "@expo/vector-icons/Ionicons";
import { usePathname } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

export default function Language() {
  const pathname = usePathname();
  if (pathname === "/location") {
    return null;
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.gearIcon}>
        <Ionicons name="settings" size={28} color="#757575" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  gearIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});
