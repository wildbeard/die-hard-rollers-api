require('dotenv').config();
const express = require('express');
const app = express();
const Router = require('./routes/index');

Router.route(app);

app.listen(process.env.DB_PORT, () => {
    console.log(`Listening on Port ${process.env.DB_PORT}`);
})