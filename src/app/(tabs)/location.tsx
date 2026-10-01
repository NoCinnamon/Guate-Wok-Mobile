import { Text, View, StyleSheet, Platform } from "react-native";
import { AppleMaps } from "expo-maps";

const truckLocation = {
  latitude: 14.6349,
  longitude: -90.5069,
};

export default function Location() {
  if (Platform.OS != 'ios') {
    return (
      <View style={styles.location}>
        <Text> Just for iphone now.</Text>
      </View>
    );
  }
  return (
    <AppleMaps.View
      style={{ flex: 1 }}
      cameraPosition={{ coordinates: truckLocation, zoom: 15 }}
      markers={[
        {
          id: "truck",
          coordinates: truckLocation,
          title: "GuateWok",
          systemImage: "truck.box.fill",
          tintColor: "orange",
        },
      ]}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
  },
  location: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center"
  }
});

