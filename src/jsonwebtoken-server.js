const fastify = require("fastify");
var jwt = require("jsonwebtoken");

const server = fastify();

server.post("/signup", async (request, reply) => {
  const token = jwt.sign({ payload: request.query.payload }, "secret");

  reply.send({ token });
});

server.get("/me", async (request, reply) => {
  // This will decode and verify the token in the Authorization header
  const authorizationHeader = request.headers.authorization;
  const token = authorizationHeader.split(" ")[1];
  const decoded = jwt.verify(token, "secret");
  reply.send(decoded);
});

server.listen(3002, (err) => {
  if (err) {
    throw err;
  }
});
