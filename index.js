"use strict";

var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.use(express.static(__dirname + "/dist/"));

io.on("connection", function (socket) {
	console.log("Usuario conectado");

	socket.on("mensaje", function () {

	});
});

app.listen(3000, function () {
	console.log("Servidor iniciado en http://localhost:3000");
});