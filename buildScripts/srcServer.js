//var express = require('express');
import express from 'express';
//var path = require('path');
import path from 'path';
//var open = require('open');
import open from 'open';

import webpack from 'webpack';
import config from '../webpack.config.dev';


console.log('sandeep'); // eslint-disable-line no-console
const port = 4500;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

/* eslint-disable no-console */
app.listen(port, function(err) {
  if(err) {
    console.log(err);
  } else{
    open('http://localhost:' + port)
  }
});
