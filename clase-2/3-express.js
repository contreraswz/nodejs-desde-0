const express = require('express')
const app = express()

app.disable('x-powered-by')


const PORT = process.env.PORT ?? 1234


// app.use((req, res, next) => {
//     if (req.method !== 'POST') return next()
//     if (req.headers['content-type'] !== 'application/json') return next()
//     let body = ''
//     req.on('data', chunk => {
//         body += chunk.toString()
//     })

//     req.on('end', () => {
//         const data = JSON.parse(body)
//         data.timestamp = Date.now()
//         req.body = data
//         next()
//     })
// })
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('<h1>INICIO con express</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>abaout</h1>')
})

app.post('/pokemon', (req, res) => {
    res.status(201).json(req.body)
})

app.use((req, res) => {
    res.status('404').send('<h1>MIJO ESTAS EN UN ERROR</h1>')
})
app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto http://localhost:${PORT}`)
})