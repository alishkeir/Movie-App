const http = require("http");
const app = require("./app");

const server = http.createServer(app);

server.listen(5000);

server.on("listening", () => {
  console.log("listening on port 5000");
});
