import { useStripe } from "@stripe/stripe-react-native";
import { Alert } from "react-native";
import CartTotal from "./CartTotal";

export default function Stripe({ total }: { total: number }) {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  async function checkout() {
    const amount = Math.round(total * 100);

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Guate Wok",
      returnURL: "guatewokmobile://stripe-redirect",
      intentConfiguration: {
        mode: {
          amount,
          currencyCode: "USD",
        },
        confirmationTokenConfirmHandler: async (
          confirmationToken,
          callback,
        ) => {
          const response = await fetch("http://localhost:4242/create-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              confirmation_token_id: confirmationToken.id,
              amount,
            }),
          });
          const data = await response.json();
          if (data.client_secret) {
            callback({ clientSecret: data.client_secret });
          } else {
            callback({
              error: {
                code: "Failed",
                message: "Payment could not start.",
              },
            });
          }
        },
      },
    });

    if (error) {
      Alert.alert("Checkout", error.message);
      return;
    }

    const result = await presentPaymentSheet();
    if (result.error) {
      Alert.alert("Checkout", result.error.message);
      return;
    }
    Alert.alert("Checkout", "Payment complete.");
  }

  return <CartTotal total={total} onCheckout={checkout} />;
}
