import { Pressable, StyleSheet, Text } from "react-native";
import { useTheme } from "@/context/ThemeContext";


export default function Button({
  buttonName,
  onPress,
  style,
}: {
  buttonName: string;
  onPress: () => void;
  style?: object;

}){
  const { theme } = useTheme();
return (
  <Pressable
  style={[styles.button, { backgroundColor: theme.button }, style]}
  onPress={onPress}
  >
  <Text style={[styles.buttonText, { color: theme.buttonText }]}>
    {buttonName}
  </Text>
  </Pressable>
  
)}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f22613", 
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 22,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize:16,
  },
});