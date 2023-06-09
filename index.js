const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("chat/chat")
});

app.listen(3000);