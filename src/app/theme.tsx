import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { themes, useTheme } from "../context/ThemeContext";

export default function Theme() {
  const { setTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.back}>Back</Text>
      </Pressable>
      {themes.map((item) => (
        <Pressable
          key={item.name}
          style={[styles.button, { backgroundColor: item.button }]}
          onPress={() => setTheme(item)}
        >
          <Text style={[styles.buttonText, { color: item.buttonText }]}>
            {item.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 160,
    paddingHorizontal: 16,
  },
  back: {
    fontSize: 18,
    marginBottom: 16,
  },
  button: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 8,
    paddingVertical: 16,
    marginBottom: 16,
    alignItems: "center",
    backgroundColor: "transparent",
    shadowColor: "#fff",
    shadowOpacity: 0.6,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
  },
  buttonText: {
    fontSize: 24,
  },
});