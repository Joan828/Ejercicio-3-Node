const numeros = require("./numeros")
const logplease = require("logplease")
const logger = logplease.create('utils');
let http = require("http");

http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/html" });
  })
  .listen(8080);

alertaPar = (n) =>{
  if (numeros.esPar(n) == true){
    logger.info(`El número es par`);
  }  else{
    logger.error(`El número no es par`);
  }
}

alertaPar(2)
alertaPar(3)
alertaPar(101)
alertaPar(201)
alertaPar(202)
alertaPar(100)
