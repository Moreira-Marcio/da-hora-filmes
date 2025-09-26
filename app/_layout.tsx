import { useFonts } from "expo-font";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import Loading from "@/src/componentes/Loading";

export default function Layout() {
  const [fonteCarregada] = useFonts({
    Monoton: require("@/assets/fonts/Monoton-Regular.ttf"),
  });

  if (!fonteCarregada) {
    return <Loading />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="default" backgroundColor="#5451a6" />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#5451a6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </SafeAreaProvider>
  );
}
