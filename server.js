// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(
 // Add custom route here if needed
 jsonServer.rewriter({
  "/*": "/$1",
 })
);
server.use(router);
// Listen to port
server.listen(3000, () => {
 console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;