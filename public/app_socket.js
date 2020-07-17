document.addEventListener("DOMContentLoaded", ()=> {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    const image = document.querySelector("img");
    let socket = io();
    let positionX = 200;
    let positionY = 200;

    document.addEventListener("keydown", (e)=> {
        if (positionY != 0)
            if (e.keyCode == 38)
                positionY -= 10;
        if (positionY < canvas.height - 20)
            if (e.keyCode == 40)
                positionY += 10;
        if (positionX != 0)
            if (e.keyCode == 37)
                positionX -= 10;
        if (positionX < canvas.width - 20)
            if (e.keyCode == 39)
                positionX += 10;
        
        socket.emit("position", ({positionX: positionX, positionY: positionY}));
    })

    socket.on("update", (data)=> {
        positionX = data.positionX;
        positionY = data.positionY;
    })

    let display = ()=> {
        context.drawImage(image, 0, 0);
        context.fillStyle = "red";
        context.fillRect(positionX, positionY, 20, 20);
    }

    setInterval(display, 10);    	
})

/*document.addEventListener("DOMContentLoaded", ()=> {
    const btn = document.querySelector("button");
    let socket = io();

    btn.addEventListener("click", ()=> {
        socket.emit("userOn", socket.id);
    }, {once: true});

    let display = (msg)=> {
        const main = document.querySelector("main");

        main.appendChild(document.createElement("p"));
        main.lastChild.innerText = msg;
    }

    socket.on("hey", (data)=> {
        display(data);
    })

    socket.on("test", ()=> {
        console.log("calledd");
    })
})*/