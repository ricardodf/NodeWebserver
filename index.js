const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Sitio Web de Ricardo</h1>');
})

app.listen(5000, () => {
    console.log('Web server running on port 5000');
})