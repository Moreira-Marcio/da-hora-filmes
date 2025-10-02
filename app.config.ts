//modulo responsavel pelo acesso a dados  de variaveis de ambiente
import "dotenv/config";
import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "DáHora Filmes",
  slug: "dahora-filmes",

  owner: "bazao",

  scheme: "dahora",
  version: "1.1.1",
  orientation: "portrait",
  icon: "./assets/icone.png",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-dahora.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  platforms: ["ios", "android"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icone.png",
      backgroundColor: "#000000",
    },
    edgeToEdgeEnabled: true,

    package: "com.marciomoreira.dahorafilmes",
  },
  plugins: ["expo-font", "expo-asset", "expo-router"],
  // acesso a API_KEY atraves do dotenv e guardando na chave apiKey
  extra: {
    apiKey: process.env.API_KEY,
    eas: {
      projectId: "6be391fa-4234-4c89-8e4f-1e8c476b2d79",
    },
  },
  updates: {
    url: "https://u.expo.dev/6be391fa-4234-4c89-8e4f-1e8c476b2d79",
  },
  runtimeVersion: {
    policy: "appVersion",
  },
});
