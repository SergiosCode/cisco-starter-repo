const WebSocketServer = require("websocket").server;
const http = require("http");

const server = http.createServer();
server.listen(55455, () => {
  console.log(`${new Date()} Server is listening on port 55455`);
});
const wsServer = new WebSocketServer({ httpServer: server });

wsServer.on("request", (request) => {
  console.log("establishing a new connection with client");
  var connection = request.accept(null, request.origin);
  setInterval(() => {
    connection.sendUTF(new Date().getTime());
  }, 1000);
});
