import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useLanguage } from "../../context/LanguageContext";

export default function TabLayout() {
  const { t } = useLanguage();

  return (

    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
        <NativeTabs.Trigger.Label>{t("home")}</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="menu">
        <NativeTabs.Trigger.Icon sf="fork.knife" md="restaurant"/>
        <NativeTabs.Trigger.Label>{t("menu")}</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="location">
        <NativeTabs.Trigger.Icon sf="location.fill" md="location_on" />
        <NativeTabs.Trigger.Label>{t("location")}</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="cart">
        <NativeTabs.Trigger.Icon sf="cart.fill" md="shopping_cart" />
        <NativeTabs.Trigger.Label>{t("cart")}</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}