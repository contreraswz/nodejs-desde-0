const http = require('node:http')
const dittoJSON = require('./pokemon/ditto.json')

const server = http.createServer((req, res) => {
    const { method, url } = req

    switch (method) {
        case 'GET':
            switch (url) {
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'application/json; charset=utf-8')
                    return res.end(JSON.stringify(dittoJSON))

                case '/about':
                    res.statusCode = 201
                    res.setHeader('Content-Type', ' text/html; charset=utf-8')
                    return res.end('<h1>estamos en el About</h1>')

                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/html; charset=utf-8')
                    return res.end('no jaló esta madre sabe por queskk')
            }


        case 'POST':
            switch (url) {
                case '/pokemon': {
                    let body = ''
                    //escuchar el evento data
                    req.on('data', chunk => {
                        body += chunk.toString()
                    })

                    req.on('end', () => {
                        const data = JSON.parse(body)
                        //llamar a una base de datos para guardar la información
                        res.writeHead(201, { 'Content-Type': 'applicaction/json; charset=utf-8' })
                        res.end(JSON.stringify(data))
                    })
                    break
                }


                default:
                    res.statusCode = 404
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                    return res.end('no jaló esta madre sabe por que pero esta en post')

            }
    }
})

server.listen(1234, () => {
    console.log('servidor escuchando en el puerto http://localhost:1234')
})