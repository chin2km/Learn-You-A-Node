const http = require('http');
const connect = require('connect');
var fs = require('fs');

const app = connect();

const {sayHello} = require('./my-module.js')




const handleRoot = (req, res) => {
    fs.readFile('./serveThis.html', (err, data) => {
        
        const render = () => {
            res.write(data);
            res.end();
        }
        setTimeout(render, 5000);
    });

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Loadingggggg...please wait madi.. <br/>');
}

app.use('/', handleRoot);

http.createServer(app).listen(8000);