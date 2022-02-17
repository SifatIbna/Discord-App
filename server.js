const express = require("express");
const http = require("http");
const cors = require("cors")
const mongoose = require("mongoose");

require("dotenv").config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
});
