import { StyleSheet, View , Text, TextInput} from "react-native";
import { useLanguage } from "../context/LanguageContext";

export default function OrderNote ({
  note,
  onChangeNote,
}:{
  note:string;
  onChangeNote: (text: string) => void;
}){
  const { t } = useLanguage();

  return (
    <View style={styles.noteCard}>
      <Text style={styles.noteText}>{t("additionalInfo")}</Text>
      <TextInput style={styles.input}
      value={note}
      onChangeText={onChangeNote}
      placeholder={t("notePlaceholder")}
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
