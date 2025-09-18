# da-hora-filmes

trabalhando com react native expo

## 01_estrutura-e-estilização-basica

- remoção das imagens originais na pasta assets
- adição de imagens especificas para o aplicativo
- configuração dos detalhes do aplicativo em `app.jason `
- instalação da dependencia (lib) `react-native-safe-area-context `

Use o comando: `npx expo install react-native-safe-area-context `

_Utilizamos o `expo imstall ` para garantir a instalação de dependencias (ou libs) que sejam compativeis com a versao de SKD do Expo usada e,m seu projeto._

- Refatoramos a estrutura e estilização do `App.tsx` usando os componentes:
  `SafeAreaProvider`,`SafeAreaView`, `StatusBar` (do expo),`view`, `text`, `button`

- uso do flex para determinar o tamanho das views

---

## 02_mais-estilos-logo-font-icones-pressable

- Aplicação da imagem do logo usando o componente
- Adição e configuração de fonte personalizada usando o expo-font e useFonts
- Estilização do App.tsx usando recursos do StyleSheet
- Substituição do Button por Pressable para criação de botões customizados
- Uso de ícones através do @expo-vector-icons
- Aplicação do ActivityIndicator para criação de um componente Loading

---

## 03_03_navegacao-expo-router-e-telas-privacidade-sobre

- Instalação da lib `expo-router`e suas dependencias
- Ajuste e atualização para o Expo SDK 54
- Configuração da `Stack`(pilha de navegação das telas) no arquivo `_layout.tsx`
- Troca da `StatusBar`para a versão React Native
- Migração do conteúdo/estrutura do App.tsx para o \_layout.tsx e para as páginas correspondentes (index, privacidade e sobre)
- Configuração das rotas usando componente Link do expo-router
- Uso do componente ScrollView para telas com barra de rolagem
