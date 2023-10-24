const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {

  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=utf-8') //con esta linea le decimos que la informacion que va presentar es texto plano , por tanto tratara de interpretarlo y manipularlo como tal, sin embargo tambien se le puede decir que es HTML, IMAGEN, JSON, etc. para que interprete esos datos como tal y los presente 
    res.write('petición enviada') //escribe la respuesta pero no se muestra en el "navegador" hasta que se haga el "res.end()"
    res.end('  Weolcome como el tapete, fotrasteros') //finaliza la respuesta, en este caso escribe lo anterior del "write" y agrega lo propio que contiene el "end" 
  } else if (req.url === '/wz') { //Pregunta si la dirección a la que se quiere acceder es "/wz"
    fs.readFile('./ajolote.png', (err, data) => { //si es "wz" lee el archivo "ajolote.png" y hace un callback, llevando como parametros el "err:si algo ha salido mal" y el "data:el resultado de readFile" 
      if (err) {// evalua el error 
        res.statusCode = 500
        res.end('<h1>falló imagen</h1>')

      } else {//sino es error ...
        res.setHeader('Content-Type', 'image/png')//Le indica a la cabecera el tipo de información que esta recibiendo y como debe tratarla
        res.end(data);//Finaliza la respuesta, escribiendo la "data" resultado del "readFile"
      }
    })
  } else if (req.url === '/contacto') {//Pregunta si la dirección a la que se quiere acceder es "/contacto"
    res.setHeader('Content-Type', 'text/html; charset=utf8')//Le indica a la cabecera el tipo de información que esta recibiendo y como debe tratarla
    res.end('<h1>Holá</h1>')//Finaliza la respuesta y escribe
  } else { //sino es una de las opciones anteriores...
    res.statusCode = 404//Cambia el statusCode por 404 "recurso con encontrado"
    res.end('Valio camotesss')//Finaliza la respuesta y escribe
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => { // Escucha en el puerto disponible
  console.log(`Sevidor escuchando en el puerto http://localhost:${desiredPort}`)

})

/*const server = http.createServer((req, res) => {
  console.log('request recived: -- ', req.url)
  res.end('Hola')
})

server.listen(desiredPort, () => { // Escucha en el puerto disponible
  console.log(`Sevidor escuchando en el puerto http://localhost:${desiredPort}`)
})

*/