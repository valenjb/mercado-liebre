const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));
app.listen(3000, () => {console.log("servidor corriendo en el puerto 3000");});
app.get("/", (req, res) => {res.sendFile(path.resolve(__dirname, "./views/home.html"));});
app.get("/register", (req, res) => {res.sendFile(path.resolve(__dirname, "./views/register.html"));});
app.get("/login", (req, res) => {res.sendFile(path.resolve(__dirname, "./views/login.html"));});

app.get("*", (req, res) => {res.status(404).send("404 not found. <br> !Huston estamos en problemas!");});