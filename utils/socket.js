const { isEmpty } = require(".");


let socketConnections = [];

const onConnect = (socket) => {
    console.log('socket connected');

    if (isEmpty(socketConnections)) {
        socketConnections.push(socket);
    }
    else{
        const index = socketConnections.findIndex(connection => connection = socket);
        if (index <= 0) {
            socketConnections.push(socket);
        }
    }
    
    socket.on("disconnect", () => {
        console.log("socket disconnected");
        const index = socketConnections.findIndex(connection => connection == socket);
        if (index >= 0) {
            socketConnections.splice(index, 1);
        }
    })
    socket.on('error', function (error) {
        console.log("socket error: ", error)
    });
}

module.exports = {
    onConnect,
    socketConnections,
}