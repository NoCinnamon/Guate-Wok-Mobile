import CartProvider from "@/context/CartContext";
import { Image } from "expo-image";
import { Stack, router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import Language from "../components/language";
import { Ionicons } from "@expo/vector-icons";
import { StripeProvider } from "@stripe/stripe-react-native";


export default function RootLayout() {
  return (
    <StripeProvider publishableKey="pk_test_51UXYpbM9ocmXjQNwrRbgsJoCDFHrnWdiGrq0WaXP16iuoKkWuN69iUIw7m7f9qcqOloquPGeb10tybmFLCLtmCPQ00Jp2eFdlJ" urlScheme="guatewokmobile">
      <CartProvider>
        <Stack
          screenOptions={{
            unstable_headerLeftItems: () => [
              {
                type: "custom",
                hidesSharedBackground: true,
                element: (
                  <Pressable style={styles.logoButton} onPress={() => router.navigate("/")}>
                    <Image
                      source={require("../../assets/images/truckIcon.png")}
                      style={styles.logo}
                      contentFit="contain"
                    />
                  </Pressable>
                ),
              },
            ],
            unstable_headerRightItems: () => [
              {
                type: "custom",
                hidesSharedBackground: true,
                element: <Language />,
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

          <Stack.Screen name="detail" options={{ headerShown: true }} >
            <Stack.Toolbar placement="left">
              <Pressable onPress={() => router.back()} style={styles.backArrow}>
                <Ionicons name="chevron-back" size={28} color="#1d4ed8" />
              </Pressable>
            </Stack.Toolbar>
          </Stack.Screen>
        </Stack>
      </CartProvider>
    
    </StripeProvider>

  );
}

const styles = StyleSheet.create({          // touch target 
  logoButton: {
    width: 140,
    height: 48,
    justifyContent: "center",
  },
  logo: {
    width: 140,
    height: 40,
    backgroundColor: "transparent",
    marginLeft: -36,
  },
  backArrow: {
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  screen: {
    flex: 1,
  },
});
