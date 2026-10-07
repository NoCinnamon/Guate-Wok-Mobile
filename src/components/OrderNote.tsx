import { StyleSheet, View , Text, TextInput} from "react-native";

export default function OrderNote ({
  note,
  onChangeNote,
}:{
  note:string;
  onChangeNote: (text: string) => void;
}){
  return (
    <View style={styles.noteCard}>
      <Text style={styles.noteText}>Additional Information? </Text>
      <TextInput style={styles.input}
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
  },
  noteText: {
    color: "#1d4ed8",
    fontSize: 16,
    fontWeight: "700",
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "#1c1917",
    textAlignVertical: "top",
  },
});
