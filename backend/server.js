const express = require('express');

const app = express()

app.get('/',(req, res) => {
    res.send("API is Running");
})

app.listen(8080,console.log("Server started on http://localhost:8080/"))