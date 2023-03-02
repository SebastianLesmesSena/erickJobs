const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  // Obtenemos la fecha actual
  const currentDate = new Date();
  
  // Construimos la cadena de consulta con los valores de fecha actuales
  const queryParams = querystring.stringify({
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate()
  });
  
  // Construimos la nueva URL con los parámetros de fecha
  const newUrl = `http://${req.headers.host}?${queryParams}`;

  // Mostramos los valores de fecha actuales en la consola del servidor
  console.log(`year=${currentDate.getFullYear()}, month=${currentDate.getMonth() + 1}, day=${currentDate.getDate()}`);

  // Enviamos la URL actualizada como respuesta HTTP con un código de estado 200
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<html><body> year=${currentDate.getFullYear()}, month=${currentDate.getMonth() + 1}, day=${currentDate.getDate()}</body></html>`);
  res.end();
});

server.listen(8000, () => {
  console.log('Servidor escuchando en puerto 8000');
});