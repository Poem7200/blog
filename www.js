const http = require("http");
const serverHandler = require("./bin/serverHandler");

const server = http.createServer(serverHandler);

server.listen(3000);
