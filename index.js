//var http = require('http');

/*var server = http.createServer(function (request, response) {
//server.on('request', function (request, response) {
    response.write('<body>');
    response.write('Hello world!');
    response.write('<h1>This is awesome!</h1>');
    response.write('</body>');
    response.end();
    response.write('<h2>This is awesome!</h2>');
});

server.listen(9000);*/

/*var server = http.createServer();

server.on('request', function (request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");
	if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
            response.end();
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.end();
    }
})

server.listen(8080);*/

var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(request, response) {
    if (request.method === 'GET' && request.url === '/') {
        response.setHeader("Content-Type", "text/html; charset = utf-8");
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) throw err;
            response.statusCode = 200;
            response.write(data);
            response.end();
        })
    } else {
    	response.setHeader('Content-Type', 'text/html');
        fs.readFile('https://i0.wp.com/www.betterhostreview.com/wp-content/uploads/google-404-error.jpg?fit=615%2C362', function(err, data) {
            if (err) throw err;
            response.statusCode = 404;
            response.write(data);
            response.end();
        });
    }
});
server.listen(8080);