const express= require('express');
const app= express();
const routes= require('./routes');

app.use(express.json());
app.use(routes);

const server = require('http').createServer(app);

const io= require('socket.io')(server);

io.on('connection', socket=>{
    console.log(`Socket conectado: ${socket.id}`);
})

server.listen(3030);