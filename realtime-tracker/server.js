io.on("connection", function (socket) {
    console.log("connected");
    
    socket.on("send-location", (coords) => {
        // Broadcast the location to all connected clients
        io.emit("receive-location", {
            id: socket.id,
            latitude: coords.latitude,
            longitude: coords.longitude
        });
    });
});