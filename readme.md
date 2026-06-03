# 🚀 ejercicios_ajax

En esta ocasión os dejo un repositorio de ejercicios para aprender diferentes formas de realizar peticiones HTTP en JavaScript y React con el objetivo de que aprendáis detalladamente como funciona AJAX con buenas prácticas y enfocado a proyectos reales.

Durante esta serie aprenderás a trabajar con:

* XMLHTTPRequest
* Fetch API
* Async/Await con Fetch API
* Axios
* Fetch API en React
* Axios en React

Todos los ejercicios consumen un pequeño backend en PHP conectado a MySQL.

---


# ⚠️ IMPORTANTE — VER VÍDEO 0

[VER_VIDEO_0](https://youtu.be/1H9yW6GA4wc)

En este vídeo explico:

* La estructura del repositorio
* Cómo levantar el entorno
* El endpoint PHP que estaremos consumiendo
* Cómo configurar la base de datos con la que estaremos trabajando
* Cómo solucionar errores comunes

Si algo no funciona, revisa primero el vídeo correspondiente.

---


# 📁 Estructura del Repositorio

```txt id="lq7s9d"
ejercicios_ajax/
│
├── index.php (backend / endpoint API)
│
├── xmlhttprequest/
├── fetch_api/
├── async_fetch_api/
├── axios/
├── react_fetch_api/
├── react_axios/
│
└── ejercicios_resueltos/
    │
    ├── xmlhttprequest/
    ├── fetch_api/
    ├── async_fetch_api/
    ├── axios/
    ├── react_fetch_api/
    └── react_axios/
```

---

# 🛠️ Herramientas Necesarias

Antes de empezar necesitas tener instalado:

* XAMPP
* Visual Studio Code
* MySQL Workbench
  (o cualquier otro gestor como HeidiSQL o TablePlus)

Yo personalmente utilizo MySQL Workbench.

---


# 🧠 Backend del Proyecto

El backend está en el archivo raíz:

```txt id="cl8e1n"
index.php
```

Este archivo funciona como endpoint/API y se encarga de:

* Conectar con MySQL
* Manejar peticiones GET
* Manejar peticiones POST
* Insertar datos en la base de datos
* Devolver respuestas JSON
* Manejar CORS

---

# ✅ ¿Qué es `ejercicios_resueltos`?

Aquí encontrarás todos los ejercicios ya resueltos exactamente como se realizan durante los vídeos.

Esto te servirá para:

* Comparar resultados
* Revisar errores
* Ver soluciones completas
* Seguir el ritmo de la serie

⚠️ Recomendación: intenta resolver primero los ejercicios por tu cuenta antes de mirar las soluciones.

---

# ▶️ Cómo Ejecutar los Ejercicios

## 📌 Ejercicios 1, 2 y 3

Estos ejercicios son JavaScript puro y únicamente contienen:

* index.html
* style.css
* main.js

Ejercicios:

* xmlhttprequest
* fetch_api
* async_fetch_api

Debes abrirlos desde XAMPP usando localhost.

---

## 📌 Ejercicios 4, 5 y 6

Estos proyectos fueron creados con Vite + JavaScript Vanilla & Vite + React.

Ejercicios:

* axios
* react_fetch_api
* react_axios

Para ejecutarlos:

## 1️⃣ Instalar dependencias

```bash id="d0z6pv"
npm install
```

## 2️⃣ Levantar servidor de desarrollo

```bash id="bq5j1u"
npm run dev
```

Vite levantará el proyecto normalmente en:

```txt id="rk2h1d"
http://localhost:5173
```

---

# 📚 Capítulos / Ejercicios

---

# 1️⃣ XMLHTTPRequest

## 🎯 Objetivo

Aprender cómo funcionaban las peticiones HTTP antes de Fetch API usando XMLHTTPRequest.

---

# 2️⃣ Fetch API

## 🎯 Objetivo

Aprender a realizar peticiones HTTP modernas utilizando Fetch API.

---

# 3️⃣ Async Fetch API

## 🎯 Objetivo

Aprender a utilizar async/await junto a Fetch API para escribir código más limpio y mantenible.

---

# 4️⃣ Axios

## 🎯 Objetivo

Aprender a utilizar Axios para simplificar las peticiones HTTP y mejorar el manejo de errores.

---

# 5️⃣ React Fetch API

## 🎯 Objetivo

Consumir APIs dentro de React utilizando Fetch API y hooks como useEffect y useState.

---

# 6️⃣ React Axios

## 🎯 Objetivo

Aprender a trabajar con Axios dentro de aplicaciones React de una forma más profesional y escalable.

---

# ❤️ Recomendación

No copies el código directamente.

Intenta entender:

* Cómo funciona cada petición
* Qué devuelve el backend
* Cómo se manejan las respuestas
* Qué diferencias existen entre cada tecnología

La mejor forma de aprender AJAX es practicando.

---

# ⭐ Apoya el Proyecto

Si el contenido te ayuda:

* Dale estrella al repositorio
* Comparte la serie
* Sígueme en mis redes para más contenido de desarrollo web y JavaScript

- Youtube: [Canal_de_Youtube](https://www.youtube.com/@antoniocastizo)
- Twitch: [Canal_de_Twitch](https://www.twitch.tv/antodevlive)
- Linkedin: [Perfil_de_linkedin](https://www.linkedin.com/in/antonio-castizo/)