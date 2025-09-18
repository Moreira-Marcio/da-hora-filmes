import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function Privacidade() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Politica de Privacidade",
        }}
      />
    </>
  );
}
