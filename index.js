const express = require('express');
const app = express();
const Router = require('./routes/index');

Router.route(app);

app.listen(8080, () => {
    console.log('Listening on port 3000');
})