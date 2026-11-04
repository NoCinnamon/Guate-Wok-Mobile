import { useEffect, useRef } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { AppleMaps, useLocationPermissions } from "expo-maps";
import { useLanguage } from "../../context/LanguageContext";

const truckLocation = {
  latitude: 37.104472,
  longitude: -113.565194,
};

export default function Location() {
  const [status, requestPermission] = useLocationPermissions();
  const { t } = useLanguage();
  const asked = useRef(false);

  useEffect(() => {
    if (asked.current || !status || status.granted || !status.canAskAgain) {
      return;
    }
    asked.current = true;
    void requestPermission();
  }, [status, requestPermission]);

  if (Platform.OS !== "ios") {
    return (
      <View style={styles.location}>
        <Text>{t("iphoneOnly")}</Text>
      </View>
    );
  }
  return (
    <AppleMaps.View
      style={{ flex: 1 }}
      cameraPosition={{ coordinates: truckLocation, zoom: 15 }}
      properties={{ isMyLocationEnabled: status?.granted === true }}
      uiSettings={{ myLocationButtonEnabled: true }}
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

