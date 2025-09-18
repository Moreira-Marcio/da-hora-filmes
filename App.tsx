import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Importando a biblioteca interna vector-icons
// usamo o @tsignore para ignorar erros de tipagem(ou  ausencia de tipagem)
// @ts-ignore
import { Ionicons } from "@expo/vector-icons";
import Loading from "./src/componentes/Loading";

export default function App() {
  /* Usamos o useFonts para criar uma referência para a fonte que queremos uilizar no app. */

  return <SafeAreaProvider></SafeAreaProvider>;
}
