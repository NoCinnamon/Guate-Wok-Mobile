## Bottom navigation

`import { NativeTabs } from "expo-router/unstable-native-tabs";`
The bar at the bottom is a native tab bar. Each navigation button opens the screen file with the same name:

- Home opens `src/app/(tabs)/index.tsx`
- Menu opens `src/app/(tabs)/menu.tsx`
- Location opens `src/app/(tabs)/location.tsx`
- Cart opens `src/app/(tabs)/cart.tsx`

To change a label or icon, edit that button's `NativeTabs.Trigger` in `_layout.tsx`.  
`Trigger`: change what the user sees after tapping, edit the matching screen file.

## Location

#### Show current location of the food truck on ios map.

enter the location menuly in location.tsx :

```bash
const truckLocation = {
  latitude: 14.6349,
  longitude: -90.5069,
};
```



## Location Map

Platform.OS = 'ios':  
package( expo-map ): `npx expo install expo-maps`

two other things to install so map could run on the iPhone:

- expo-build-properties: turns on the iOS scene lifecycle so the app is allowed to launch.
- CocoaPods: installed with Homebrew, compiles the native iOS code, including the map.

location.tsx:  
`import { AppleMaps } from "expo-maps";`

## Cart



### - Use AsyncStorage to save the Customer Order Notes.(Storing string value) wiht useEffect()

```bsah
npx expo install @react-native-async-storage/async-storage
```

`import AsyncStorage from "@react-native-async-storage/async-storage";`

in cart.tsx:

```bash
  return (
    <View style={styles.container}>
      <OrderNote note={note}
      onChangeNote={updateNote}/>     ->    changed from onChangeNote={setNote}
    </View>
  );
```

The {setNote} is where the customer notes changes, here is where i insert a updateNote function to do the change part. Inside the updateNote function, it calls the async function storeNoteData() which use setItem('key', value).

```bash
async function loadNote() {
  const saved = await AsyncStorage.getItem("orderNote");
  console.log("saved note:", saved);
  if (saved !== null) {
    setNote(saved);
  }
}
```

LoadNote() uses the getItem('key') with the key 'oederNote' to get the value out of the locoal storage where the note is saved. and store it in a variable 'saved'. then setnNote to it.

### - useEffect():

```bash
useEffect(() => {
  loadNote();
}, []);
```

loadNote(): "What to run"
[]: "When to run"

The '[]' means there is no changem so nothing to watch. When first time the Cart screen opens, React runs loadNote() once, and this is it. It wont do it on every letter user type, setNote() is the one taht does this. so put [] instead of setNote(), means the value is not in the watch list, then it wont trigger this effect. Typing stays on updateNote.

### - Add menu item into cart. useContext, AsyncStorage for cartItems to stay after reload app.

In the menu.tsx each dish is defined as a object in a list.

```bash
[{ id: "1", name: "Taco", image: require("../../../assets/images/taco.jpg") }],
```

id and name is what i want to display after added to cart.

here is the simple version ( without useState )of the how useContext used here, for easier understanding:

1. create context
2. wraps the component needed for use this context inside of the ContextProvider
3. export the context by making a function.

```bash

const CartContext = createContext({
  items: [{ id: "1", name: "Taco" }],
});

export default function CartProvider({ children }) {
  const items = [{ id: "1", name: "Taco" }];
  return (
    <CartContext.Provider value={{ items }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}
```

