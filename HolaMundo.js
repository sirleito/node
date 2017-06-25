var http = require("http"),
	fs = require("fs");

fs.readFile("./index.html",(err,html)=>{
	http.createServer((req, res)=>{
		res.write(html);
		res.end();
	}).listen(8080);

});

