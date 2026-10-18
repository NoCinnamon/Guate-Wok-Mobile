import Ionicons from "@expo/vector-icons/Ionicons";
import { router, usePathname } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { useTheme } from "../context/ThemeContext";


export default function ThemeButton() {

  const {theme} = useTheme();
  const pathname = usePathname();
  if ( pathname === "/location") {
    return null;
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.gearIcon} onPress={() => router.push("/theme")}>
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
  menu: {
    marginTop: 8,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    gap: 8,
  },
});
