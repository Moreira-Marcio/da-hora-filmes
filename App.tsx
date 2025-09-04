import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundcolor: "lightgreen" }}>
        <StatusBar style="auto"></StatusBar>
        <View>
          <Text>Dá hora filmes</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
