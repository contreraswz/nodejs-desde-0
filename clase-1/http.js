const http = require('node:http')
const { findAvailablePort } = require('./free-port.js')

const desiredPort = process.env.PORT ?? 3000
const server = http.createServer((req, res) => { // Crea la constante de servidor, el servidor solo puede hacer dos cosas "recibir petición o enviar respuesta"
  console.log('request recived')
  res.end('Hola')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => { // Escucha en el puerto disponible
    console.log(`Sevidor escuchando en el puerto http://localhost:${server.address().port}`)
  })
})
