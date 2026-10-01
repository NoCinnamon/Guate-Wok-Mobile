// import { Tabs } from "expo-router"
import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  return (

    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="menu">
        <NativeTabs.Trigger.Icon sf="fork.knife" md="restaurant"/>
        <NativeTabs.Trigger.Label>Menu</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="location">
        <NativeTabs.Trigger.Icon sf="location.fill" md="location_on" />
        <NativeTabs.Trigger.Label>Location</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="cart">
        <NativeTabs.Trigger.Icon sf="cart.fill" md="shopping_cart" />
        <NativeTabs.Trigger.Label>Cart</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>

    
    // <Tabs screenOptions={{ headerShown: false }}>
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: "Home",
    //       tabBarIcon: ({ color, focused }) => (
    //         <Ionicons
    //           name={focused ? "home-sharp" : "home-outline"}
    //           color={color}
    //           size={24}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="menu"
    //     options={{
    //       title: "Menu",
    //       tabBarIcon: ({ color, focused }) => (
    //         <Ionicons
    //           name={focused ? "restaurant" : "restaurant-outline"}
    //           color={color}
    //           size={24}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="location"
    //     options={{
    //       title: "Location",
    //       tabBarIcon: ({ color, focused }) => (
    //         <Ionicons
    //           name={focused ? "location" : "location-outline"}
    //           color={color}
    //           size={24}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="cart"
    //     options={{
    //       title: "Cart",
    //       tabBarIcon: ({ color, focused }) => (
    //         <Ionicons
    //           name={focused ? "cart" : "cart-outline"}
    //           color={color}
    //           size={24}
    //         />
    //       ),
    //     }}
    //   />
    // </Tabs>
  );
}
