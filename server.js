const express = require('express');
const app = express();
require('dotenv').config({path: './config/.env'});
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
