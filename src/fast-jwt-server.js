const fastify = require("fastify");
const fastifyJwt = require("@fastify/jwt");

const server = fastify();
server.register(fastifyJwt, {
  secret: "secret",
});

server.post("/signup", (request, reply) => {
  // Authenticate the user somehow, then store the claims in the token
  const token = server.jwt.sign({ payload: request.query.payload });
  reply.send({ token });
});

server.get("/me", (request, reply) => {
  // This will decode and verify the token in the Authorization header
  request.jwtVerify((err, decoded) => {
    // Send the payload back to the user
    return reply.send(err || decoded);
  });
});

server.listen(3000, (err) => {
  if (err) {
    throw err;
  }
});
