import Ionicons from "@expo/vector-icons/Ionicons";
import { usePathname } from "expo-router";
import { Alert, Pressable, StyleSheet, View } from "react-native";
import { useLanguage } from "../context/LanguageContext";

export default function Language() {
  const pathname = usePathname();
  const { setLanguage, t } = useLanguage();
  if (pathname === "/location") {
    return null;
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.gearIcon}
        onPress={() =>
          Alert.alert(t("language"), undefined, [
            { text: "English", onPress: () => setLanguage("en") },
            { text: "中文", onPress: () => setLanguage("zh") },
            { text: "Español", onPress: () => setLanguage("es") },
          ])
        }
      >
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
