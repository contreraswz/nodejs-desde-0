const http = require('node:http')


const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res) => { // Crea la constante de servidor, el servidor solo puede hacer dos cosas "recibir petición o enviar respuesta"
  console.log('request recived: -- ', req.url)
  res.end('Hola')
})

server.listen(desiredPort, () => { // Escucha en el puerto disponible
  console.log(`Sevidor escuchando en el puerto http://localhost:${desiredPort}`)
})

