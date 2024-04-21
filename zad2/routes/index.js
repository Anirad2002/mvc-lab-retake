const home = require('../views/home');
const car = require('../views/car');
const addCar = require('../views/add-car');
const fs = require('fs');
const querystring = require('querystring');

exports.handleHome = function(response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(home.renderPage());
    response.end();
};

exports.handleAddCar = function(method, request, response) {
    if (method === 'GET') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(addCar.renderPage());
        response.end();
    } else if (method === 'POST') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        request.on('end', () => {
            const formData = querystring.parse(body);
            fs.writeFileSync('formData.json', JSON.stringify(formData));
            response.writeHead(302, {'Location': '/car'});
            response.end();
        });
    }
};

exports.handleCar = function(response) {
    const data = fs.readFileSync('formData.json', 'utf8');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(car.renderPage(data));
    response.end();
};

exports.handlePageNotFound = function(response) {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write('404 Page Not Found');
    response.end();
};