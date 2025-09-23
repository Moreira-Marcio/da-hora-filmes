// src/services/api.ts

import axios from "axios";
// expo-constants fornece informações sobre app enquanto ele "roda" (tempo de execução ).Informações como :versão ,buildNumber,variaveis de ambiente  definidas no app.config.ts em extra
import Constants from "expo-constants";

// o ? para garantir que não de erro caso alguma das propriedades abaixo esteja indefinida
const apiKey = Constants?.expoConfig?.extra?.apiKey as string;

// configurando axios para usar api theMoviesDB,definimos qual é o baseURL e o parametro api_key que é obrigatório em todas as requisições
export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey, // aqui passamos a nossa chave do themoviedb
  },
});
