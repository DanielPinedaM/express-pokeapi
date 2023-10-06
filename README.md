# Parte 2 - Prueba Técnica Backend de [Feria del Brasier y Solo Kukos (Marrocar)](https://feriadelbrasier.co/)

### 1. Tecnologías en que hice el proyecto
  * [Git](https://www.udemy.com/course/git-github/)
  * [GitHub](https://github.com/DanielPinedaM/)
  * [NodeJS 20.8.0](https://www.udemy.com/course/node-de-cero-a-experto/)
  * [ExpressJS](https://expressjs.com/)
  * [npm](https://www.npmjs.com/)
  * [Axios](https://axios-http.com/docs/intro)
  * [Thunder Client (testear API)](https://youtu.be/HZx5X3s_Jl4?si=3i4oFnX1b7l74Obt)
  * [PokeAPI](https://pokeapi.co/)
  * [VS Code](https://youtu.be/KpgVF0mXOUs?si=4VuCsvmZ43OOtXAS)

---

### Importante ⚠️

Para que se pueda leer las [variables de entorno](https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs/) ```.env``` y ejecutar este proyecto es necesario [instalar NodeJS 20.8.0 o superior](https://nodejs.org/).

![instalar_node](/readme_img/instalar_node.PNG)

![env](/readme_img/env.PNG)

---

### 2. Prueba Técnica

Resolvi los enunciados:
* "Prueba Técnica" - *"La aplicación debe permitir a los usuarios buscar información sobre Pokémon utilizando la API de
Pokémon ([pokeapi.co](https://pokeapi.co/))."*

* **3** - "Preguntas técnicas" - *"¿Cómo se realiza una solicitud HTTP GET en Express.js? Proporcione un ejemplo."*

* **7** - "Preguntas técnicas" - *"Proporcione un ejemplo utilizando la [API de Pokémon](https://pokeapi.co/)"*

En uno mismo, porque todos piden lo mismo: Hacer una petición HTTP usando Express.js. La única diferencia es que **3** no dice a donde se tiene que hacer la petición, pero para no repetir explicaciones lo haré a la [PokeAPI](https://pokeapi.co/).

La respuesta a estos enunciados esta en la carpeta:

```javascript
...\express-pokeapi\src\pokeapi
```

[https://github.com/DanielPinedaM/express-pokeapi/tree/main/src/pokeapi](https://github.com/DanielPinedaM/express-pokeapi/tree/main/src/pokeapi)

![carpeta_pokeapi](/readme_img/carpeta_pokeapi.PNG)

***Explicación Solución:***

**1.** Crear carpeta que se llame ``express-pokeapi``

![carpeta](/readme_img/carpeta.PNG)

**2.** Abrir terminal en la ruta donde se creo la carpeta ```express-pokeapi```

![ver_terminal](/readme_img/ver_terminal.PNG)

**3.** Crear archivo ``package.json`` que contiene la configuración del proyecto
  ```javascript
  npm init -y
  ```
  ![npm_init_y](/readme_img/npm_init_y.PNG)

**4.** Al archivo ```package.json``` agregar el siguiente comando:

```javascript
"pokemon": "node --env-file .env src/pokeapi/index.js"
```

[https://github.com/DanielPinedaM/express-pokeapi/blob/main/package.json](https://github.com/DanielPinedaM/express-pokeapi/blob/main/package.json)

![package_json_pokemon](/readme_img/package_json_pokemon.PNG)

**5.** Instalar Express.js para crear servidor y Axios para hacer peticiones HTTP

``-D`` es de dependencias de desarrollo y ``@latest`` instala la última versión

```javascript
npm i -D express@latest axios@latest
```

![instalar_express_axios](/readme_img/instalar_express_axios.PNG)

**6.** Crear las siguientes carpetas y archivos:

```javascript
// Archivo principal (main) que inicializa la aplicación
...\express-pokeapi\src\pokeapi\index.js

// Rutas del servidor
...\express-pokeapi\src\pokeapi\routes\pokemon.js

// Variables de entorno
...\express-pokeapi\.env
```

**7.** Agregar código a los archivos... 

* ```index.js``` 
  
  [https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/pokeapi/index.js](https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/pokeapi/index.js)

  ![archivo_index_js](/readme_img/archivo_index_js.PNG)

* ```pokemon.js```

  [https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/pokeapi/routes/pokemon.js](https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/pokeapi/routes/pokemon.js)

  ![archivo_pokemon_js](/readme_img/archivo_pokemon_js.PNG)

* ```.env```

  [https://github.com/DanielPinedaM/express-pokeapi/blob/main/.env](https://github.com/DanielPinedaM/express-pokeapi/blob/main/.env)

  ![archivo_env](/readme_img/archivo_env.PNG)

**8.** Con el siguiente comando ejecutar en local aplicación de PokeAPI + Express.js + Ajax

```javascript
npm run pokemon
```
![npm_run_pokemon](/readme_img/npm_run_pokemon.PNG)

**9.** **Enunciados:** 

*"La aplicación debe tener al menos dos rutas principales: una para buscar Pokémon por nombre y otra para buscar Pokémon por número de identificación."*

*"La aplicación debe mostrar información relevante sobre el Pokémon encontrado, como su nombre, número de identificación, tipo (o tipos), y cualquier otra información que considere relevante."*

* Si la data ya existe en la [PokeAPI](https://pokeapi.co/) es mejor usar Axios para acceder a toda la data. No tiene sentido intentar clonar la base de datos de la PokeAPI ni guardar la data en un JSON en local para después devolverla en la ruta de Express.js ``res.json()``

* [Segun la documentacion oficial de la PokeAPI](https://pokeapi.co/docs/v2#pokemon) se puede crear una sola ruta para buscar un pokemon por ID y por nombre:

```javascript
GET https://pokeapi.co/api/v2/pokemon/{id or name}/
```

![pokeapi_docs](/readme_img/pokeapi_docs.PNG)

* Obtener un solo pokemon en específico por:
  * **ID** [http://localhost:3000/pokemon/1](http://localhost:3000/pokemon/1)

  ![get_by_id](/readme_img/get_by_id.PNG)

  ![get_by_id_thunder](/readme_img/get_by_id_thunder.PNG)

  * **nombre** [http://localhost:3000/pokemon/bulbasaur](http://localhost:3000/pokemon/bulbasaur)

  ![get_by_name](/readme_img/get_by_name.PNG)

  ![get_by_name_thunder](/readme_img/get_by_name_thunder.PNG)

El resultado es correcto porque la [respuesta de la API en Express.js](http://localhost:3000/pokemon/1) coincide con la [Pokédex](https://pokefanaticos.com/pokedex/pokedex-listar/)

El pokemon con ``"id": 1`` se llama Bulbasaur, ademas la [imagen](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg) en la [Pokédex](https://pokefanaticos.com/pokedex/pokedex-listar/) y la [API en Express.js](http://localhost:3000/pokemon/1) son de Bulbasaur

**API en Express.js:**

![img_pokemon](/readme_img/img_pokemon.PNG)

[**Pokédex:**](https://pokefanaticos.com/pokedex/pokedex-listar/)

![pokedex](/readme_img/pokedex.PNG)

**10.** Para cumplir con la condición del enunciado donde dice que la aplicación de Express.js *"debe tener al menos dos rutas"* cree otra ruta [http://localhost:3000/pokemon](http://localhost:3000/pokemon) que [lista los primeros 20 pokemon](https://pokeapi.co/docs/v2#resource-listspagination-section)

  ![primeros_20_documentacion](/readme_img/primeros_20_documentacion.PNG)

  El resultado es correcto porque el nombre de los primeros 20 Pokemon son los mismos en la [respuesta de la API en Express.js](http://localhost:3000/pokemon) y la [Pokédex](https://pokefanaticos.com/pokedex/pokedex-listar/)

  **[API en Express.js](http://localhost:3000/pokemon)**
  
  ![primeros_20](/readme_img/primeros_20.png)
  
  ![primeros_20_thunder](/readme_img/primeros_20_thunder.PNG)

  **[Pokédex](https://pokefanaticos.com/pokedex/pokedex-listar/)**
  
  ![primeros_20_pokedex](/readme_img/primeros_20_pokedex.png)

**11.** **Enunciado:** *"La aplicación debe [manejar errores](https://expressjs.com/en/guide/error-handling.html) de manera adecuada y mostrar mensajes de error cuando sea necesario."*

* La API devuelve un [código de estado de respuesta HTTP 404](https://http.cat/status/404) y muestra el mensaje de error "No se encuentra el Pokémon..." cuando se accede a...
  * Un Pokémon con ud ``ID`` que no existe. Ejemplo: 
    * ``"id": 0``
    * [http://localhost:3000/pokemon/0](http://localhost:3000/pokemon/0)

    ![pokemon_0](/readme_img/pokemon_0.PNG)

    ![pokemon_0_thunder](/readme_img/pokemon_0_thunder.PNG)

  * El nombre de un Pokémon que no existe. Ejemplo: 
    * ``"name": "holamundo"``
    * [http://localhost:3000/pokemon/holamundo](http://localhost:3000/pokemon/holamundo)

    ![pokemon_hola_mundo](/readme_img/pokemon_hola_mundo.PNG)

    ![pokemon_hola_mundo_thunder](/readme_img/pokemon_hola_mundo_thunder.PNG)

**12.** **Enunciado:** *"Implementar una función de autenticación de usuario simple utilizando sesiones o tokens [JWT](https://jwt.io/)."*

* La solución a este enunciado **12.** esta en la carpeta:

```javascript
...\express-pokeapi\src\JWT
```

[https://github.com/DanielPinedaM/express-pokeapi/tree/main/src/JWT](https://github.com/DanielPinedaM/express-pokeapi/tree/main/src/JWT)

![carpeta_jwt](/readme_img/carpeta_jwt.PNG)

![parseJwt](/readme_img/parseJwt.PNG)

* Comando para ejecutar aplicación de JWT:

```javascript
npm run jwt
```

![npm_run_jwt](/readme_img/npm_run_jwt.PNG)

* Abrir en navegador [http://localhost:3000/login](http://localhost:3000/login), escribir cualquier usuario y contraseña

![localhost_login](/readme_img/localhost_login.PNG)

* Al dar click en "Iniciar sesión":
  * Se envía una peticion HTTP POST a [http://localhost:3000/auth](http://localhost:3000/auth) 
  * Se muestra un mensaje que dice que el usuario esta autenticado
  * Se genera un JWT

![localhost_auth](/readme_img/localhost_auth.PNG)

* Uso el JWT generado para acceder a [http://localhost:3000/api](http://localhost:3000/api). Esto se puede hacer desde...
  * El navegador con la URL [http://localhost:3000/api?accesstoken=](http://localhost:3000/api?accesstoken=) escribiendo el JWT despues del ```=``` 

  ![localhost_api_accesstoken](/readme_img/localhost_api_accesstoken.PNG)

  * Un cliente HTTP como [Postman](https://www.postman.com/) o [Thunder Client](https://youtu.be/HZx5X3s_Jl4?si=3i4oFnX1b7l74Obt)

  ![localhost_api_thunder](/readme_img/localhost_api_thunder.PNG)

* En la propiedad ```username``` se esta recuperando el nombre del usuario escrito en el ```<input>```:

![input](/readme_img/input.PNG)

![obj_name](/readme_img/obj_name.PNG)

* Si proporcionara un JWT invalido que no ha sido generado como por ejemplo [http://localhost:3000/api?accesstoken=holamundo](http://localhost:3000/api?accesstoken=holamundo) entonces no se permite la autenticación.

![acceso_denegado](/readme_img/acceso_denegado.PNG)

![acceso_denegado_thunder](/readme_img/acceso_denegado_thunder.PNG)

---

### 3. Preguntas técnicas
**1.** ¿Qué es [Express.js](https://expressjs.com/)?.

  Es un framework backend de [Node.js](https://nodejs.org/) usado para crear aplicaciones de servidor. Sirve para enrutamiento, crear endpoints de APIs, peticiones y respuestas HTTP.

**2.** ¿Por qué Express.js es útil en el desarrollo web?.

  Porque simplifica la creación de aplicaciones web backend ya que cuenta con enrutamiento sencillo, un sistema de middleware flexible, rendimiento eficiente y una gran comunidad, por lo que se encuentran muchos recursos (documentación, vídeos, etc).

**3.** ¿Cómo se realiza una solicitud HTTP GET en Express.js? Proporcione un ejemplo.

[*Este punto **3.** lo resolvi en "2. Prueba Técnica"*](https://github.com/DanielPinedaM/express-pokeapi#2-prueba-t%C3%A9cnica)

**4.** ¿Qué es una API?.

  Son las siglas de "interfaz de programación de aplicaciones". Es un software intermediario que permite la conexión entre aplicaciones y servicios para compartir datos:

  ![que_es_api](/readme_img/que_es_api.png)

**5.** ¿Cuál es la función de las APIs en el desarrollo de aplicaciones web?.
  
  Permitir que las aplicaciones web sean escalables ya que permiten la conexion con servicios externos, acceso a datos, y comunicacion con el servidor para poder mostrar la información al usuario final.

**6.** ¿Cómo se realiza una solicitud HTTP a una API externa en Node.js?.

* Instalar [Node.js](https://nodejs.org/es)

* Instalar una biblioteca para hacer peticiones HTTP, algunas de estas son: [node-fetch](https://www.npmjs.com/package/node-fetch), [Axios](https://axios-http.com/), [SuperAgent](https://www.npmjs.com/package/superagent), [Got](https://www.npmjs.com/package/got), etc.

* Con la biblioteca instalada enviar una solicitud HTTP a la URL de la API externa usando los métodos HTTP segun sea necesario:

CRUD | Métodos HTTP | Descripción
------------ | ------------|-------------|
Guardar | POST | Envía nuevos recursos al servidor
Leer | GET | Recupera (trae) información del servidor
Actualizar | PUT | Remplaza información existente de un recurso por nueva información
Eliminar | DELETE | Elimina el recurso del servidor

* Manejar los errores en la petición HTTP como se explica en el enunciado *"8. ¿Qué es el [manejo de errores en Express.js](https://expressjs.com/en/guide/error-handling.html)?."*

**7.** Proporcione un ejemplo utilizando la [API de Pokémon](https://pokeapi.co/):

[*Este punto **7** lo resolvi en "2. Prueba Técnica"*](https://github.com/DanielPinedaM/express-pokeapi#2-prueba-t%C3%A9cnica)

**8.** ¿Qué es el [manejo de errores en Express.js](https://expressjs.com/en/guide/error-handling.html)?.

Proceso en el que se captura y responde a errores cuando se ejecuta Express.js. Para ello se usa:
* [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) Para capturar mensaje de error.

* [console.error()](https://developer.mozilla.org/en-US/docs/Web/API/console/error) Para imprimir mensaje de error.

* [throw new Error()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) Para crear un nuevo mensaje de error personalizado.

* Funciones de middleware que acceden a las solicitudes y respuestas. En Express.js un middleware es una lógica que se ejecuta antes de que se cree una ruta.

* ```javascript
  app.use(function(err, req, res, next){})
  ```

* ```javascript
   res.status().send()
  ```

* ```javascript
  ('uncaughtException', function(err){})
  ```

**9.** ¿Por qué es importante el [manejo de errores en Express.js](https://expressjs.com/en/guide/error-handling.html)?.

Es importante por las siguientes razones:
* Evita que se detenga la ejecución de la aplicación cuando se detecta un error.

* Muestra al usuario final mensajes que explican ¿por qué esta sucediendo el error?, lo que mejora la UX.

* Permite al desarrollador depurar código para saber ¿donde esta el error?, por ejemplo cuando la API devuelve un HTTP Status Code.

**10.** ¿Qué es el [enrutamiento en Express.js](https://expressjs.com/en/guide/routing.html)?.

Es la lógica con la que responde una URI cuando el cliente le hace una petición HTTP:

![url_urn_uri](/readme_img/url_urn_uri.png)

**Ejemplo:**

Al hacer una peticion GET HTTP a [https://pokeapi.co/api/v2/ability/?limit=20](https://pokeapi.co/api/v2/ability/?limit=20) obtengo el nombre y la URL de 20 pokemon:

```javascript
GET https://pokeapi.co/api/v2/ability/?limit=20
```

![20_pokemon](/readme_img/20_pokemon.PNG)

**11.** ¿Cómo se define una [ruta en una aplicación Express.js](https://expressjs.com/en/starter/basic-routing.html)?.

Explicaré ¿cómo se define? y la sintaxis con un ejemplo.

* Crear la siguiente carpeta y archivo: 

```javascript
...\express-pokeapi\src\routes\new.js
```

[https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/routes/new.js](https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/routes/new.js)

![new_js](/readme_img/new_js.PNG)

* Al archivo ```package.json``` agregar el siguiente comando:

```javascript
"new": "node src/routes/new.js,"
```

[https://github.com/DanielPinedaM/express-pokeapi/blob/main/package.json](https://github.com/DanielPinedaM/express-pokeapi/blob/main/package.json)

![package_json_new](/readme_img/package_json_new.PNG)

* Agregar el siguiente código al archivo ```new.js```

[https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/routes/new.js](https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/routes/new.js)

![route_new_js](/readme_img/route_new_js.PNG)

* Ejecutar Express.js en el puerto [3000](http://localhost:3000/new):

```javascript
npm run new
```

![npm_run_new](/readme_img/npm_run_new.PNG)

* Abrir en un navegador [http://localhost:3000/new](http://localhost:3000/new)

![respuesta_new](/readme_img/respuesta_new.PNG)

* Ver respuesta de la ruta [http://localhost:3000/new](http://localhost:3000/new) en [Thunder Client](https://youtu.be/HZx5X3s_Jl4?si=3i4oFnX1b7l74Obt)

![thunder_new](/readme_img/thunder_new.PNG)

**12.** ¿Cómo se renderiza una página web [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) en Express.js?.

* Crear los siguientes archivos y carpetas:

```javascript
// Carpeta contenedora del proyecto
...\express-pokeapi\src\render_html_in_express

// Archivos .html y .css
...\express-pokeapi\src\render_html_in_express\static\index.html
...\express-pokeapi\src\render_html_in_express\static\style.css

// Código de Express.js que renderiza HTML y CSS
...\express-pokeapi\src\render_html_in_express\render.js

// Archivo de configuración del proyecto
...\express-pokeapi\package.json
```

![carpetas_html_express](/readme_img/carpetas_html_express.PNG)

* Al archivo ```package.json``` agregar el siguiente comando:

```javascript
"html": "node src/render_html_in_express/render.js",
```

[https://github.com/DanielPinedaM/express-pokeapi/blob/main/package.json](https://github.com/DanielPinedaM/express-pokeapi/blob/main/package.json)

![comando_render_html](/readme_img/comando_render_html.PNG)

* Agregar código al archivo ```style.css```:

[https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/render_html_in_express/static/style.css](https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/render_html_in_express/static/style.css)

![estilos](/readme_img/estilos.PNG)

* Agregar código al archivo ```index.html```:

[https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/render_html_in_express/static/index.html](https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/render_html_in_express/static/index.html)

![codigo_html](/readme_img/codigo_html.PNG)

* Agregar el siguiente código al archivo ```render.js``` para renderizar HTML en Express.js:

[https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/render_html_in_express/render.js](https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/render_html_in_express/render.js)

![render_js](/readme_img/render_js.PNG)

* Ejecutar comando para inicializar Express.js:

```javascript
npm run html
```

![npm_run_html](/readme_img/npm_run_html.PNG)

* Abrir en un navegador la URL [http://localhost:3000/html](http://localhost:3000/html) 

![navegador](/readme_img/navegador.PNG)

* En el navegador al abrir el inspector **Inspeccionar → Red → Todo** se puede ver que Express.js esta renderizando los archivos [```index.html```](https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/render_html_in_express/static/index.html) y [```style.css```](https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/render_html_in_express/static/style.css)

![red](/readme_img/red.png)

* La API responde con el [código HTML](https://github.com/DanielPinedaM/express-pokeapi/blob/main/src/render_html_in_express/static/index.html) al hacer una petición HTTP GET a [http://localhost:3000/html](http://localhost:3000/html) en [Thunder Client](https://youtu.be/HZx5X3s_Jl4?si=3i4oFnX1b7l74Obt) 

![thunder_html](/readme_img/thunder_html.PNG)
