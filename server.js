const http = require('http');
const socketio = require('socket.io');


const server = http.createServer((req, res) => {
    res.end("Hello Server Node js")
})


server.listen(3000, () => { console.log("Salom Server 3000 port")})
const io = socketio.listen(server)


io.sockets.on('connection', (socket) => {
    // console.log("Foydalanuvchi bo'landi !!!!!!!");

    // socket.on("SalomBer", (data) => {
    //     console.log(data.name);
    //     console.log(data.job);
    //     // console.log("Salom foydalanuvchi Man serverdan man");
    // })

    // socket.emit("pila", {city: "Tashkent"})


        socket.on("newUser", (data) => {
            socket.broadcast.emit("user", {name: data.name})
        })



    socket.on('disconnect', (socket) => {
        console.log("Foydalanuvchi Tark qildi");
    })

})