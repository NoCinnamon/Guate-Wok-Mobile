import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { themes, useTheme } from "../context/ThemeContext";

export default function ThemeButton() {
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push("/theme")}>
        <Ionicons name="settings" size={28} color="rgba(255,255,255,0.80)" />
      </Pressable>

      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 110,
    right: 26,
  },
  menu: {
    marginTop: 8,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    gap: 8,
  },
});
