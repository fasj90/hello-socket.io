const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = 3000;

io.on('connection', (client) => {
    console.log('Nuevo cliente conectado');
    client.on('message', (msg)=>{
        console.log('message',msg);
        client.broadcast.emit('message', msg);
    });

    client.on('disconnect', ()=>{
        console.log('Cliente desconectado');
    });
});


server.listen(PORT, ()=>{
    console.log(`Servidor activo en http://localhost:${PORT}`)
});