import CartProvider from "@/context/CartContext";
import { Image } from "expo-image";
import { Stack, router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";


export default function RootLayout() {
  return (
    <CartProvider>
      <Stack
        screenOptions={{
          unstable_headerLeftItems: () => [
            {
              type: "custom",
              hidesSharedBackground: true,
              element: (
                <Pressable onPress={() => router.navigate("/")}>
                  <Image
                    source={require("../../assets/images/truckIcon.png")}
                    style={styles.logo}
                    contentFit="contain"
                  />
                </Pressable>
              ),
            },
          ],
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            title: "",
            headerTransparent: true,
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen name="detail" options={{ headerShown: false }}/>

      </Stack>
    </CartProvider>    
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 140,
    height: 40,
    backgroundColor: "transparent",
    marginLeft: -36,
  },
});
