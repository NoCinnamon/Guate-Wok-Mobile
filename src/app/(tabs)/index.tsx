import { router } from "expo-router";
import { ImageBackground, StyleSheet, Text, View, ScrollView, Settings } from "react-native";
import Button from "../../components/Button";
import { useTheme } from "../../context/ThemeContext";


export default function Index() {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/option2.jpg")}
        resizeMode="cover"
        style={styles.background}
      >
        <Text style={styles.welcome}>Welcome</Text>
        
        <View style={styles.card}>
          <Text style={[styles.cardTitle, { color: theme.text }]}>READY TO ORDER?</Text>
          <View style={styles.homePageButtons}>
            <Button
              buttonName="VIEW MENU"
              onPress={() => router.navigate("/menu")}
            />
            <Button
              buttonName="LOCATION"
              onPress={() => router.navigate("/location")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // content: {
  //   flexGrow: 1,
  // },
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
  homePageButtons: {
    flexDirection: "row",
    gap: 12,
  },
});
