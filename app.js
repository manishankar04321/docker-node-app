const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from Node.js in Docker ");
});

app.listen(8085, () => {
    console.log("Server running on port 8085");
});