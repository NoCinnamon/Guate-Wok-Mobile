import { StyleSheet, View , Text, TextInput} from "react-native";
import { useTheme } from "../context/ThemeContext";

export default function OrderNote ({
  note,
  onChangeNote,
}:{
  note:string;
  onChangeNote: (text: string) => void;
}){
  const { theme } = useTheme();
  return (
    <View style={styles.noteCard}>
      <Text style={[styles.noteText, { color: theme.text }]}>Additional Information? </Text>
      <TextInput style={[styles.input, { color: theme.text }]}
      value={note}
      onChangeText={onChangeNote}
      placeholder="Anything else we should know?"
      placeholderTextColor="a8a29e"
      multiline
      />
    </View>
  )
}

const styles = StyleSheet.create({
  noteCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 12,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 8,
    elevation: 6,
  },
  noteText: {
    color: "#1d4ed8",
    fontSize: 16,
    fontWeight: "700",
  },
  input: {
    paddingVertical: 8,
    fontSize: 16,
    color: "#1c1917",
    textAlignVertical: "top",
  },
});
