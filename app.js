'use strict';
const express = require('express');
const hobbyGenerator = require('./lib/hobbies');
const webpack = require('webpack');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

const server = app.listen(process.env.PORT || 3006, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});

app.use(express.static('app'));
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.post('/hobbies', (req, res) => {
    let output = hobbyGenerator();
    res.json({hobbies: output});
});
