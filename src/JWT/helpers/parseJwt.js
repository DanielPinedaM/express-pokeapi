/* Desencriptar JWT - Función para leer el payload y fecha de expiración de un Token */
const parseJwt = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');

  const decrypt = JSON.parse(window.atob(base64));
  const expiration = new Date();
  expiration.setTime(decrypt?.exp * 1000);
  const obj = {
    decrypt,
    expiration,
  };

  return obj;
};

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRhbmllbCBQaW5lZGEgTW9yYSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTIwNDgwNzg5fQ.iu9Q6iExbtal_tvxDXKw_4hLSmJcSP31txIRjj5fqfA';

parseJwt(token);
/*
{
  decrypt: {
    sub: '1234567890',
    name: 'Daniel Pineda Mora',
    iat: 1516239022,
    exp: 1520480789
  },
  expiration: 2018-03-08T03:46:29.000Z
}
*/
