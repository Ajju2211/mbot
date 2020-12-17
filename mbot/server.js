const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION!    Shutting Down...");
  console.log(err);
  process.exit(1);
});

// dotenv.config({ path: './config.env' });
dotenv.config();
const app = require("./app");
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log("Server is up on port " + PORT);
});
