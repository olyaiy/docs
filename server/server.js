const io = require('socket.io')(3001, {
    cors:{
        origins:'http://localhost:3000',
        methods: ['GET','POST']
    }
})

io.on('connection', (socket) => {
    console.log("connected")
})