const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/file') {
        const readStream = fs.createReadStream('largefile.txt');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        readStream.pipe(res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
