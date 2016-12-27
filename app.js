'use strict';

const express = require('express');
const app = express();
const hobbyGenerator = require('./lib/hobbies');

const server = app.listen(process.env.PORT || 3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});

app.use(express.static('app'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/hobbies', (req, res) => {
    let output = hobbyGenerator();
    res.json({hobbies: output});
});