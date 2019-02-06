const express = require("express")
const app = express()

app.set("views", "views")
app.set("view engine", "pug")

app.get("/", (req, res) => {
    res.render("home.pug", {

    });
})

app.listen(8090, () => console.log("Listening on port 8080"));

module.exports.getApp = app;