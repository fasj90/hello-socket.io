const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');
const MSG = process.env.MSG || 'Hola'; //obtiene argumentos d ela consola ejem: MSG='Hola Cliente 1' node client.js

socket.on('message', (msg)=>{
    console.log(msg);
});

setInterval(()=>{
    socket.emit('message', MSG);
}, 3000)
