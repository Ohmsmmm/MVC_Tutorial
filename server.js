const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const logger = require('./util/logger.js');
app.get('/', (req, res) => {
    res.send('Hi! FROM Ohmsm');
})

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', require('./router/index'));

const port = 1150;
const server = app.listen(port, () => {
    console.log(`API Server ready @localhost:${port}`);
    //logger.info(`API Server ready @localhost:${port}`);
})


