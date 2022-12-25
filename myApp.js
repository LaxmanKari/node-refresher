const http = require("http");
const displayContent = require('./routes'); 
var colors = require('colors'); 

const server = http.createServer(displayContent);

server.listen(3001);


console.log('hello'.yellow);
