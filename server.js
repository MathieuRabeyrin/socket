const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");
const process = require("process");
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "index.html"));
});

http.listen(port, ()=> {
    console.log(`Port ${port} is listening`);
});


io.on('connection', (socket)=> {
    socket.on("position", (data)=> {
        console.log(data);
        io.emit("update", data);
    })
});

/*
io.on('connection', (socket)=> {
    socket.on("userOn", (id)=> {
        console.log(`The user ${id} is available`);
        //io.to(id).emit('hey', `Welcome ${id}`);
        io.emit('hey', `The user ${id} is ready to talk`);
    })
});
*/

