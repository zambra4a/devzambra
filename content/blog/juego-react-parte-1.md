---
title: 'Creando un juego con React: Parte 1'
description: 'Creamos un juego de supervivencia para la web hecho con React desde cero'
github: 'https://github.com/devzambra/devzambra/edit/master/content/blog/juego-react-parte-1.md'
tags:
  - React
---

## Presentación

En esta serie de artículos vamos a crear un juego simple de supervivencia hecho con React. El objetivo del juego será sobrevivir el máximo tiempo posible antes de que nuestra vida llegue a 0.

El juego irá restando puntos de vida, energía, hambre y sed cada cierto tiempo. También iremos ganando algo de energía, recursos y dinero cada cierto tiempo.

El jugador podrá invertir los recursos, energía y dinero de los que disponga para **Fabricar, Explorar y Comprar** diferentes objetos. Algunos aportan beneficios instantáneos y otros se guardarán para usar más tarde.

## Creando el proyecto inicial

Para crear el proyecto utilizaremos **create-react-app** en el directorio donde queramos crear el proyecto. Ejecutamos el comando:

```shell
npx create-react-app reactvival
```

Cuando el proceso acabe, tendremos la estructura base del proyecto **reactvival** (es el nombre que le he dado yo) creado. Si entramos dentro de **reactvival** y lo abrimos con un editor de código (en mi caso estoy usando VSCode) veremos la siguiente estructura:

```shell
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

## Limpiando el proyecto

De toda esta estructura inicial hay cosas que no necesitaremos. Para dejar el proyecto limpio y listo para empezar eliminaremos los siguientes archivos dentro de la carpeta src:
**App.css**, **App.test.js**, **index.css**, **logo.svg**
de forma que en src quedaría:

```shell
.
├── public
└── src
    ├── App.js
    ├── index.js
    ├── serviceWorker.js
    └── setupTests.js
```

Si arrancamos la aplicación nos dará errores porque faltan archivos. Vamos a arreglar esto.

En **App.js** eliminamos la importación de **App.css** y de **logo.svg** y dentro del html eliminaremos todo lo de dentro de **`<div className="App"></div>`** de forma que el archivo quedaría:

```jsx
import React from 'react'

function App() {
  return <div className="App"></div>
}

export default App
```

Del archivo **index.js** tendremos que eliminar la importación de **index.css**. El archivo quedaría:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
```

Ahora, deberíamos ver una pantalla en blanco y ningún error en consola cuando arranquemos la aplicación con:

```shell
npm run start
```

El siguiente paso será cambiar el título de la aplicación. Para esto, vamos a **public/index.html** y cambiamos

```html
<title>React App</title>
```

por esto

```html
<title>Reactvival</title>
```

## Instalando Tailwind CSS

Por último, vamos a instalar el framework de css que vamos a usar. En este caso será <a href="https://tailwindcss.com/" target="_blank" class="text-primary">Tailwind CSS</a>.
Para instalarlo ejecutamos:

```shell
npm install tailwindcss postcss postcss-cli autoprefixer -D
```

Necesitamos inicializar Tailwind creando una configuración por defecto. Ejecutamos lo siguiente:

```shell
npx tailwind init tailwind.js --full
```

Esto generará un archivo **tailwind.js** en la raíz del proyecto. Este archivo contiene configuraciones como los coloes, temas, media queries, etc.

Ahora vamos a configurar PostCSS para poder integrar tailwind con nuestro proyecto. Ejecutamos:

```shell
touch postcss.config.js
```

Ahora vamos a añadir lo siguiente al archivo **postcss.config.js** que acabamos de crear:

```javascript
const tailwindcss = require('tailwindcss')
module.exports = {
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
}
```

### Inyectando las utilidades de Tailwind en nuestra aplicación

Dentro de **src** creamos una carpeta llamada **assets**. Dentro de esta carpeta creamos un archivo **tailwind.css** y un archivo **main.css**.
El archivo **tailwind.css** se usará para importar los estilos base y utilidades de Tailwind CSS, y el archivo **main.css** tendrá los estilos generados como resultado de los que tenemos en **tailwind.css**.

A continuación, añadimos lo siguiente al archivo **tailwind.css**:

```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```

### Configurando la aplicación para construir el CSS

Dentro de **package.json** tenemos que modificar y añadir algunos scripts para que podamos construir el css y pasarlo a la aplicación. Si no has modificado los scripts por defecto, puedes reemplazarlos por estos:

```json
"scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  },
```

Por último, para que todo esto funcione, debemos incluir el archivo **main.css** en **index.css**. De forma que quedaría:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './assets/main.css'
import './index.css'

import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
```

## Resumen

Hemos creado una aplicación utilizando **create-react-app** y hemos eliminado los archivos y código que no necesitamos.
A continuación hemos cambiado el título de la aplicación.
Luego hemos instalado Tailwind CSS, que será el framework de CSS que utilizaremos. Hemos configurado PostCSS para poder hacer uso de tailwind, y hemos incluido la base de tailwind en nuestra aplicación.

Ahora estamos listos para comenzar a crear nuestro juego.
