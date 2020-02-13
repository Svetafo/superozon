const express = require('express');
const http = require('http');

const app = express();

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port);