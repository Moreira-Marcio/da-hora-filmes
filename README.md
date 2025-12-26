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
