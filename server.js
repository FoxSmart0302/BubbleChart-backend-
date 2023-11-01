const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");

const fileUpload = require("express-fileupload");
const multer = require("multer");
const upload = multer();

const path = require("path");
require("dotenv").config();
app.use(cors());

//create socket http server
const socket = require("./utils/socket");

const PORT = process.env.PORT || 5010;
const bubble = require("./routes/bubble");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "public")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/bubble", bubble);

// const server = require('http').createServer(app);
const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer);
// init socket connection
io.on("connection", socket.onConnect);

httpServer.listen(PORT, console.log("Server is running on port ", PORT));
// httpServer.listen(PORT)
