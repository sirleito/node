var http = require("http");

var manejador = (solicitud, respuesta)=>{
	console.log("peticion recibida");
	respuesta.end("Hola Mundo")
}

var servidor = http.createServer(manejador);

servidor.listen(8080);