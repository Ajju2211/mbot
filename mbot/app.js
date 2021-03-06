const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

// Routes
const userRouter = require("./routes/user");
const sampleAPIRouter = require("./sample-api/router");

const app = express();

// UN comment whenever required to see whois accesing logs
// // log All STDOUT
const fs = require("fs");
let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

// // setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

//Middleware
//Implement cors
app.use(cors());
app.options("*", cors());

//set security HTTPS headers
// app.use(helmet());

//cookie parser
app.use(cookieParser());
//Body parsser, reading  data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// server static file
app.use("/", express.static(path.join(__dirname, "public")));

// Linking the some node_modules as UI dependencies
// const nm_dependencies = ['blueimp-file-upload','blueimp-canvas-to-blob','blueimp-load-image','blueimp-tmpl']; // keep adding required node_modules to this array.
// nm_dependencies.forEach(dep => {
//   app.use(`/${dep}`, express.static(path.join(__dirname, `node_modules/${dep}`)));
// });

// sample-api for testing replaced with original
app.use("/api/v1", sampleAPIRouter);

app.use("/user", userRouter);

//Handling unexpected routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

module.exports = app;
