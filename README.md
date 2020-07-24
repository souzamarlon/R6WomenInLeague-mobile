<h1 align="center">
    R6 WOMEN'S ALLIANCE
</h1>

![](https://img.shields.io/github/package-json/v/souzamarlon/R6WomenInLeague-mobile.svg)
![](https://img.shields.io/github/last-commit/souzamarlon/R6WomenInLeague-mobile?color=red)
![](https://img.shields.io/github/languages/top/souzamarlon/R6WomenInLeague-mobile.svg?color=yellow)
![](https://img.shields.io/github/languages/count/souzamarlon/R6WomenInLeague-mobile.svg?color=lightgrey)
![](https://img.shields.io/github/languages/code-size/souzamarlon/R6WomenInLeague-mobile.svg)
![](https://img.shields.io/github/repo-size/souzamarlon/R6WomenInLeague-mobile.svg?color=blueviolet)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)

<h4 align="center">
In order to fight against discrimination, our goal is to help women in R6 to find a safe space during the game experience and connect with other women around the globe.
</h4>

<hr>
<p align="center">
  <a href="#rocket-Libraries and Technologies">Libraries and Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/souzamarlon/R6WomenInLeague-frontend">Front-end project</a>&nbsp;&nbsp;&nbsp|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/souzamarlon/R6WomenInLeague-backend">Back-end project</a>&nbsp;&nbsp;&nbsp;
</p>

## 🚀 Preview<a name = "preview"></a>

<div  align="center"> 
<a href="http://www.youtube.com/watch?v=LQRTpffxGDE" target="_blank" align="center">
  <img width="1195" height="520" src="https://r6womeninleague.s3-us-west-2.amazonaws.com/R6womenAlliance.JPG" align="center">
</a>
</div>

## :rocket: Libraries and Technologies

React native:
- [React Native](https://facebook.github.io/react-native/)
- [react-navigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/)
- [Immer](https://github.com/immerjs/immer)
- [Axios](https://github.com/axios/axios)
- [prop-types](https://github.com/facebook/prop-types)
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler)
- [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [styled-components](https://github.com/styled-components/styled-components)
- [Reactotron](https://infinite.red/reactotron)
- [socket.io](https://socket.io/docs/client-installation/)


React native:
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer.

<b>You'll also need to setup and run a Postgres, mongoDB and a Redis database and insert the access informations into a .env file, based on a .env.example file that is provided in the backend, front-end folders.</b>

From your command line:

```bash
# Clone this repository
$ git clone https://github.com/souzamarlon/R6WomenInLeague-mobile

# Note: Available just for Android smartphones.
# Install dependencies for mobile
$ cd R6WomenInLeague-mobile
$ yarn

# Note:
# It is necessary to change the IP address in the api.js file to IP address where the back end is installed.
# You can find the api file at src/services/api.js

# Run the app (Android)
$ react-native run-android

# Start React Native Server
$ react-native start

```
---
Created by Marlon da Silva Souza :wave: [LinkedIn!](https://www.linkedin.com/in/marlonssouza/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

