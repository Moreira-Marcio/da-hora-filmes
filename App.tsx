import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function App() {
  /* usamos o useFonts para criar uma referencia para a fonte que queremos utilizar no app */
  const [fonteCarregada] = useFonts({
    Monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });
  //se a fonte ainda nao foi carregada
  if (!fonteCarregada) {
    return (
      <Text style={{ color: "red", fontSize: 22 }}>Carregando fonte...</Text>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={estilos.container}>
        <StatusBar style="auto"></StatusBar>
        <View style={estilos.viewLogo}>
          <Image source={require("./assets/dahora.png")} style={estilos.logo} />
          <Text style={estilos.tituloApp}>Dá hora filmes</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botaoinicial}>
            <AntDesign name="search1" size={24} color="white" />
            <Text style={estilos.textoBotao}>Buscar filmes</Text>
          </Pressable>
          <Button title="Favoritos" />
        </View>
        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

/* estilos */

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoinicial: {
    backgroundColor: "#5451a6",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  textoBotao: {
    color: "white",
  },
  tituloApp: {
    fontSize: 32,
    color: "#5451a6",
    fontFamily: "Monoton",
  },
  logo: {
    width: 128,
    height: 128,
  },
  viewBotoes: {
    backgroundColor: "#ffcc80",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  viewRodape: {
    backgroundColor: "#ef9a9a",
    flex: 0.5,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
