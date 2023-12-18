const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello my client, your server is live")
})

app.listen(3000, () => {
     console.log("Your server is live on port 3000")
 })