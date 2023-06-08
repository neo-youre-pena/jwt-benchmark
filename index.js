const jwt = require("jsonwebtoken");
const token = jwt.sign({ claim: "value" }, "secret");
console.log(`The token is: ${token}`);
const payload = jwt.verify(token, "secret");
console.log(`The verified payload is: ${JSON.stringify(payload)}`);
