// @ts-nocheck
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false })); /* enviar objeto literal {} en solicitud POST  */
app.use(express.json());

/* validar autenticacion del JWT */
const validateToken = (req, res, next) => {
  const accessToken = req.headers['authorization'] || req.query.accesstoken;
  if (!accessToken) res.send('acceso denegado');

  jwt.verify(accessToken, process.env.JWT, (err, user) => {
    if (err) {
      res.send('token invalido, acceso denegado');
    } else {
      req.user = user;
      next();
    }
  });
};

app.get('/api', validateToken, (req, res) => {
  res.json({ message: 'usuario logueado', username: req.user });
});

/* formulario iniciar sesion */
app.get('/login', (req, res) => {
  res.sendFile(`${__dirname}/static/form.html`);
});

/* Respuesta despues de loguearse con JWT */
app.post('/auth', (req, res) => {
  const { username, password } = req.body;

  /* Aqui puedo escribir la logica para consultar BD, validar usuario y clave */

  const user = { username: username };
  const accessToken = generateAccessToken(user);

  res.header('authorization', accessToken).json({
    message: 'usuario autenticado',
    token: accessToken,
  });
});

/* generar JWT */
const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT, { expiresIn: '5m' });
};

app.listen(port, () => {
  console.log(`Servidor escuchando el puerto ${port}`);
});
