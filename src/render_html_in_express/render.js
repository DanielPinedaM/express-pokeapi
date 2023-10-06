const express = require('express'); // importar Express.js

const app = express();              // guardar Express.js en una variable
const port = 3000;                  // puerto donde se levanta el servidor

const htmlFile = 'index.html';      // nombre del archivo .html
const cssFile = 'style.css';        // nombre del archivo .css

// crear URL http://localhost:3000/html
app.get('/html', (req, res) => {
  console.log('ruta archivo .html', `${__dirname}/${htmlFile}`);

  // renderizar .html en Express.js
  res.sendFile(`${__dirname}/static/${htmlFile}`);
});

// renderizar .css en Express.js
app.get(`/${cssFile}`, (req, res)=> {
  res.sendFile(`${__dirname}/static/${cssFile}`);
})

// Imprimir puerto donde se renderiza el .html
app.listen(port);
console.log(`Servidor escuchando el puerto ${port}`);
