// app/detalhes/[id].tsx
import CardFilme from "@/src/componentes/CardFilmes";
import { FilmeDetalhes, ParametrosDetalhes } from "@/src/types";
import { formatarData } from "@/src/utils";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Detalhes() {
  const { filme: filmestring } = useLocalSearchParams<ParametrosDetalhes>();
  const filme: FilmeDetalhes = JSON.parse(filmestring);
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Detalhes do Filme",
        }}
      />

      <SafeAreaView style={estilos.container}>
        <ScrollView>
          <View style={estilos.imagemContainer}>
            <Image
              source={
                // Se exister valor no poster_path, mostra imagem do filme
                // Senão, mostra a foto alternativa
                filme.backdrop_path
                  ? {
                      uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`,
                    }
                  : require("@/assets/foto-alternativa.jpg")
              }
              style={estilos.imagem}
            />
          </View>
          <View style={estilos.corpo}>
            <Text style={estilos.titulo}>{filme.title}</Text>
            <View style={estilos.viewDetalhes}>
              <Text style={estilos.detalhes}>
                ⭐{filme.vote_average.toFixed(1)}
              </Text>
              <Text style={estilos.detalhes}>
                📅 {formatarData(filme.release_date)}
              </Text>
            </View>
            <Text style={estilos.sinopseTitulo}>Sinopse:</Text>
            <Text style={estilos.sinopse}>
              {filme.overview || "não disponivel"}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  erroTexto: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
    color: "red",
  },
  imagemContainer: {
    height: 250,
    overflow: "hidden",
    position: "relative",
  },
  imagem: {
    width: "100%",
    height: "100%",
  },
  corpo: {
    padding: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  viewDetalhes: { flexDirection: "row", justifyContent: "space-between" },
  detalhes: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  sinopseTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  sinopse: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
});
