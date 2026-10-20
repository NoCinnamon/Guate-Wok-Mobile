import { Pressable, StyleSheet, Text, View, Alert } from "react-native";
import { themes, useTheme } from "../context/ThemeContext";

export default function Theme() {
  const { setTheme } = useTheme();

  return (
    <View style={styles.container}>
      {themes.map((item) => (
        <Pressable
          key={item.name}
          style={[styles.button, { backgroundColor: item.button }]}
          onPress={() => {setTheme(item);  Alert.alert("Theme set", `${item.name} is now the theme.`);}}
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
    paddingTop: 60,
    paddingHorizontal: 16,
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