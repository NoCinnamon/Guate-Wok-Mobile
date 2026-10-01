import { Text, View, StyleSheet, ImageBackground } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/option2.jpg')}
        resizeMode="cover"                           // Scales image to fill the screen
        style={styles.background}
      >
        <Text style={styles.welcome}>Welcome</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background:{
    flex: 1,
  },
  welcome: {
    marginTop: 110,
    marginLeft: 16,
    color: "white",
    fontSize: 28,
    fontWeight: 'bold',
    backgroundColor: "transparent",
  }

});
