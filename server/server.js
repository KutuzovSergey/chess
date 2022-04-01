const express = require('express')
const socketIO = require('socket.io')
const path = require('path')
const http =require('http')

const publicPath = path.join(__dirname, '../dist')
const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', () => {
    console.log('IO Conect')
})

app.use(express.static(publicPath))

server.listen(port, () => {
    console.log(`server hes been port: ${port}`)
})