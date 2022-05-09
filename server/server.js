const express = require('express')
const socketIO = require('socket.io')
const path = require('path')
const http = require('http')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)
const url = require('url')

const publicPath = path.join(__dirname, '../dist')
const port = process.env.PORT || 3000

// app.get('/', (request, response) =>{

//     let urlRequest = url.parse(request.url, true)
//     let info = urlRequest.query
//     // if(urlRequest.query.test ){}
//     console.log(info)
//     response.send(`<h1>Hello world ${info}</h1>`)
//     console.log(request.method)
// })

// app.get( (request, response) =>{

//     let urlRequest = url.parse(request.url, true)
//     let info = urlRequest.query
//     // if(urlRequest.query.test ){}
//     console.log(info)
//     console.log(request.method)
// })

app.post((request, response) => {

    let body = ''
    request.on('data', chunk => {
        body += chunk.toString();
    })
    response.on('end', () => {
        console.log(body);
        response.end('ok')
    })
})

io.on('connection', (socket) => {
    console.log('IO Conect')
})
// Add headers before the routes are defined
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });
app.use(express.static(publicPath))

server.listen(port, () => {
    console.log(`server hes been port: ${port}`)
})