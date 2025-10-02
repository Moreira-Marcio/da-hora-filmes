// app/favoritos.tsx
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  FlatList,
  FlatListComponent,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, Stack } from "expo-router";

// @ts-ignore
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Filme, ItemDalistaDeFavoritos } from "@/src/types";
import {
  apagarTodosFavoritos,
  buscarFavoritos,
  removerFilmeFavorito,
} from "@/src/services/storage-favoritos";
import Loading from "@/src/componentes/Loading";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscarFavoritos()
      .then((lista) => {
        setFavoritos(lista);
      })
      .catch((erro) => console.error("Erro ao carregar o filme" + erro))
      .finally(() => setLoading(false));
  }, []);
  console.log(favoritos);

  const itemDaListaDeFavoritos = ({ item }: ItemDalistaDeFavoritos) => (
    <Pressable
      style={estilos.item}
      onPress={() => {
        router.push({
          pathname: "/detalhes/[id]",
          params: {
            filme: JSON.stringify(item),
          },
        });
      }}
    >
      <Text style={estilos.titulo}>{item.title}</Text>
      <Pressable
        style={estilos.botaoLixeira}
        onPress={() => removerFilme(item.id)}
      >
        <Ionicons name="trash" size={24} color="#888" />
      </Pressable>
    </Pressable>
  );

  const ListaVazia = () => (
    <View style={estilos.listaVaziaContainer}>
      <Text style={estilos.listaVaziaTexto}>
        Você ainda não favoritou nenhum filme.
      </Text>
    </View>
  );

  const removerFilme = async (id: number) => {
    try {
      await removerFilmeFavorito(id);

      const lista = await buscarFavoritos();

      setFavoritos(lista);
    } catch (error) {
      console.error(error);
      Alert.alert("erro", "Não foi possivel remover o filme");
    }
  };

  const apagarTudo = () => {
    Alert.alert(
      "Apagar todos os favoritos",
      "Tem certeza que deseja apagar todos os favoritos?",
      [
        { text: "Não", style: "cancel" },
        {
          text: "sim",
          onPress: async () => {
            try {
              await apagarTodosFavoritos();
              setFavoritos([]);
            } catch (error) {
              console.error(error);
              Alert.alert("Erro", "Não foi possivel apagar os favoritos");
            }
          },
        },
      ]
    );
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Meus Favoritos",
          headerRight: () =>
            favoritos.length > 0 && (
              <Pressable onPress={apagarTudo}>
                <Ionicons name="trash" size={24} color="#fff" />
              </Pressable>
            ),
        }}
      />
      <SafeAreaView style={estilos.container}>
        {loading ? (
          <Loading />
        ) : (
          <View style={estilos.viewLista}>
            <FlatList
              data={favoritos}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={itemDaListaDeFavoritos}
              ListEmptyComponent={ListaVazia}
            />
          </View>
        )}
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewLista: {
    marginVertical: 8,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  titulo: {
    fontSize: 16,
    flex: 1,
  },
  botaoLixeira: {
    paddingLeft: 16,
  },
  listaVaziaContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  listaVaziaTexto: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
  },
});
