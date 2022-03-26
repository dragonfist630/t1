require("./env.ts");
const app  = require("./app");

const server = app.listen(app.get("port"), () => {
  console.log(`API Server running at http://localhost:${app.get("port")} (${process.env.NODE_ENV})`);
});

export default server;
