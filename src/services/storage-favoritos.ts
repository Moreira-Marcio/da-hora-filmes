// src/services/storage-favoritos.ts

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Filme, FilmeDetalhes } from "../types";

const STORAGE_FAVORITOS = "filmes_favoritos";

/**
 * le a lista e favoritos do async storage
 * retona um array vazio em caso de erro ou chave inesistente
 */
export async function carregar(): Promise<Filme[]> {
  try {
    //le a string salva na storage (pode vir null)
    const favoritosArmazenamentos = await AsyncStorage.getItem(
      STORAGE_FAVORITOS
    );
    // havendo favoritosArmazenamentos, converte a string em array e retorna convertido para objeto
    // senao, retorna array vazio
    return favoritosArmazenamentos ? JSON.parse(favoritosArmazenamentos) : [];
  } catch (error) {
    console.error("erro ao ler storage: " + error);

    return [];
  }
}

export async function salvarLista(lista: Filme[]): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_FAVORITOS, JSON.stringify(lista));

    //retorna true sinalizando no storage
  } catch (error) {
    console.error("Erro ao salvar filme");
  }
}

/**
 * Salvar um file na lista de favoritos (proprio storage)
 * retorna true se salvou com sucesso, false se o filme ja estava nos favoritos
 */

export async function salvarFilmeFavorito(filme: Filme): Promise<boolean> {
  const favoritos = await carregar();
  //verifica dse o filme ja existe na lista com o mesmo id na sta/storagede favoritos.a função some() retorna true se encontrar pelo menios 1item
  if (favoritos.some((filmeExistente) => filmeExistente.id === filme.id)) {
    return false;
  }
  // se chegou ate aqui é por que o filme nao havia sido salvo portanto adicionamos à lisa de favotos
  favoritos.push(filme);

  //salva a lista atualizada do storage
  await salvarLista(favoritos);

  return true;
}

/**
 * chamar a função e retornar a lista de favoritos
 */
export function buscarFavoritos(): Promise<Filme[]> {
  return carregar();
}

/** excluir um filme especifico pelo seu id */

export async function removerFilmeFavorito(id: number): Promise<void> {
  const favoritos = await carregar();

  /* filtrando a lista de favoritos ja existente, avaliando qual filme de ser "descartado/removido".Com isso geramos uma nova lista atualizada sem o filme que deve ser removido */
  const listaAtualizada = favoritos.filter(
    (filmeExistente) => filmeExistente.id !== id
  );

  //pegamos a nova lista atualizada, e enviamos para o salvarLista gravar no storage
  // na pratica sobrescrevemos a lista anterior
  await salvarLista(listaAtualizada);
}

export async function apagarTodosFavoritos(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_FAVORITOS);
  } catch (error) {
    console.error("Erro ao apagar todos os favoritos: " + error);
  }
}
