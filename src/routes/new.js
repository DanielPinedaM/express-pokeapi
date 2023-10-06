const express = require('express'); // Importar Express.js
const app = express();              // Guardar Express.js en una variable

const puerto = 3000;                // Puede ser cualquier numero, es una convencíon usar 3000

/*
- Con el objeto app definir un método HTTP 

- dentro de la función () => {} enviar una respuesta

- '/new' es la ruta

- req: solicitud
- res: respuesta */
app.get('/new', (req, res) => {
  res.send('Respuesta para la ruta /new');
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando el puerto ${puerto}`);
});
