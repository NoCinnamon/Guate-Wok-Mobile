import React, { createContext, useState, useContext, ReactNode } from 'react';
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

// 1. Define your translations
const translations = {
  en: {
    welcome: "Welcome",
    readyToOrder: "READY TO ORDER?",
    viewMenu: "VIEW MENU",
    location: "LOCATION",
    changeLanguage: "Change Language",
    language: "Language",
    home: "Home",
    menu: "Menu",
    cart: "Cart",
    myItems: "My Items:",
    additionalInfo: "Additional Information?",
    notePlaceholder: "Anything else we should know?",
    total: "Total",
    checkout: "Checkout",
    add: "Add",
    addToCart: "Add to Cart",
    mainIngredients: "Main Ingredients",
    addedToCart: "%{name} is added to cart",
    paymentCouldNotStart: "Payment could not start.",
    paymentComplete: "Payment complete.",
    iphoneOnly: "Just for iPhone now.",
    taco: "Taco",
    tacoIngredients: "Corn tortilla, Chicken, Onion, Red chili, Red salsa",
    kimbap: "Kimbap",
    kimbapIngredients: "Rice, Seaweed, Egg, Carrot, Spam, Pickled radish",
    mangoDrink: "Mango Drink",
    mangoDrinkIngredients: "Mango, milk",
    limeDrink: "Lime Drink",
    limeDrinkIngredients: "Lime, sparkling water",
  },
  zh: {
    welcome: "欢迎",
    readyToOrder: "准备点餐了吗？",
    viewMenu: "查看菜单",
    location: "位置",
    changeLanguage: "选择语言",
    language: "语言",
    home: "首页",
    menu: "菜单",
    cart: "购物车",
    myItems: "我的餐点：",
    additionalInfo: "还有其他要求吗？",
    notePlaceholder: "还有什么需要我们注意的吗？",
    total: "合计",
    checkout: "结账",
    add: "添加",
    addToCart: "加入购物车",
    mainIngredients: "主要配料",
    addedToCart: "%{name} 已加入购物车",
    paymentCouldNotStart: "无法开始付款。",
    paymentComplete: "付款完成。",
    iphoneOnly: "目前仅支持 iPhone。",
    taco: "塔可",
    tacoIngredients: "玉米饼、鸡肉、洋葱、红辣椒、红莎莎酱",
    kimbap: "紫菜包饭",
    kimbapIngredients: "米饭、海苔、鸡蛋、胡萝卜、午餐肉、腌萝卜",
    mangoDrink: "芒果饮料",
    mangoDrinkIngredients: "芒果、牛奶",
    limeDrink: "青柠饮料",
    limeDrinkIngredients: "青柠、气泡水",
  },
  es: {
    welcome: "Bienvenido",
    readyToOrder: "¿LISTO PARA ORDENAR?",
    viewMenu: "VER MENÚ",
    location: "UBICACIÓN",
    changeLanguage: "Cambiar idioma",
    language: "Idioma",
    home: "Inicio",
    menu: "Menú",
    cart: "Carrito",
    myItems: "Mis artículos:",
    additionalInfo: "¿Información adicional?",
    notePlaceholder: "¿Algo más que debamos saber?",
    total: "Total",
    checkout: "Pagar",
    add: "Agregar",
    addToCart: "Agregar al carrito",
    mainIngredients: "Ingredientes principales",
    addedToCart: "%{name} se agregó al carrito",
    paymentCouldNotStart: "No se pudo iniciar el pago.",
    paymentComplete: "Pago completado.",
    iphoneOnly: "Solo para iPhone por ahora.",
    taco: "Taco",
    tacoIngredients: "Tortilla de maíz, pollo, cebolla, chile rojo, salsa roja",
    kimbap: "Kimbap",
    kimbapIngredients: "Arroz, alga, huevo, zanahoria, spam, rábano encurtido",
    mangoDrink: "Bebida de mango",
    mangoDrinkIngredients: "Mango, leche",
    limeDrink: "Bebida de lima",
    limeDrinkIngredients: "Lima, agua con gas",
  },
};

// 2. Initialize i18n-js
const i18n = new I18n(translations);
i18n.enableFallback = true;

// 3. Define the Context State Types
type LanguageContextType = {
  locale: string;
  setLanguage: (lang: string) => void;
  t: (key: string, options?: object) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 4. Create the Provider Component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Detect system language as the default fallback
  const deviceLanguage = getLocales()[0]?.languageCode || 'en';
  const [locale, setLocale] = useState<string>(deviceLanguage);

  // Apply current locale to the i18n instance
  i18n.locale = locale;

  const setLanguage = (lang: string) => {
    setLocale(lang);
  };

  // Translation helper function
  const t = (key: string, options?: object) => i18n.t(key, options);

  return (
    <LanguageContext.Provider value={{ locale, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 5. Create a Custom Hook for clean consumption
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
