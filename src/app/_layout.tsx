import CartProvider from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Image } from "expo-image";
import { Stack, router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import ThemeSetting from "../components/ThemeSetting";


export default function RootLayout() {
  return (
    <ThemeProvider>
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
                element: <ThemeSetting />,
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

          <Stack.Screen name="detail" options={{ headerShown: false }} />
          <Stack.Screen name="theme" options={{ headerShown: false }} />
        
        </Stack>
      </CartProvider>
    </ThemeProvider>
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
  screen: {
    flex: 1,
  },
});
