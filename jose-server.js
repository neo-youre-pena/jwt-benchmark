const { createSecretKey } = require("crypto");
const fastify = require("fastify");
const { jwtVerify, SignJWT } = require("jose");

const server = fastify();

server.post("/signup", async (request, reply) => {
  const secretKey = createSecretKey(Buffer.from("secret"), "utf-8");
  const token = await new SignJWT({ payload: request.query.payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .sign(secretKey);
  reply.send({ token });
});

server.get("/me", async (request, reply) => {
  // This will decode and verify the token in the Authorization header
  const authorizationHeader = request.headers.authorization;
  const token = authorizationHeader.split(" ")[1];
  const result = await jwtVerify(token, privateKey);

  reply.send(result);
});

server.listen(3001, (err) => {
  if (err) {
    throw err;
  }
});
