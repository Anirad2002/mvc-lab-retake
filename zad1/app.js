const http = require('http');
const carsFunctions = require('./cars');
const htmlGenerator = require('./htmlGenerator');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`Server is running on ${PORT}.`);
    const cars = carsFunctions.getCars();
    console.log(cars);

    res.setHeader('Content-Type', 'text/html');

    res.write(htmlGenerator.getHTMLDocumentStart());
    res.write('<body>');

    const sampleId = 2;

    res.write(`<p>${carsFunctions.getCarInformation(sampleId)}</p>`);
    res.write(`<p>${carsFunctions.getCarAge(sampleId)}</p>`);
    res.write('</body>');
    res.write(htmlGenerator.getHTMLDocumentEnd());
    
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});
