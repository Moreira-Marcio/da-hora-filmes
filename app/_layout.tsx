import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import Loading from "../src/componentes/Loading";

export default function Layout() {
  const [fonteCarregada] = useFonts({
    Monoton: require("../assets/fonts/Monoton-Regular.ttf"),
  });

  // Se a fonte ainda não foi carregada
  if (!fonteCarregada) {
    return <Loading />;
  }
  return (
    <View>
      <Text>_layout</Text>
    </View>
  );
}
