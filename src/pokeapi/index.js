const express = require('express');
const app = express();

const port = 3000;

// Ejecutar middleware (rutas) de Express.js
app.use('/pokemon', require('./routes/pokemon'));

// Esuchar peticion
app.listen(port, () => {
  console.log(`Servidor escuchando el puerto ${port}`);
});
