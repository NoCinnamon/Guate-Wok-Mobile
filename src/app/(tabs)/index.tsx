import { ImageBackground, StyleSheet, Text, View } from "react-native";
import HomeButtons from "../../components/HomeButtons";


export default function Index() {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/option2.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        <Text style={styles.welcome}>Welcome</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>READY TO ORDER?</Text>
          <HomeButtons />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  welcome: {
    marginTop: 110,
    marginLeft: 16,
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
  card: {
    marginHorizontal: 16,
    marginBottom: 110,
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.80)",
    alignItems: "center",
    gap: 16,
    marginTop: 400,
  },
  cardTitle: {
    color: "#1d4ed8",
    fontSize: 22,
    fontWeight: "800",
  },
});
