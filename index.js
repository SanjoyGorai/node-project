
const http = require('http');

const PORT = 4445;

http.createServer((req, res) => {
    res.end(`<h1> I am Sanjoy Gorai</h1>`);
}).listen(PORT, () => {
    console.log("Server is running at port no : " + PORT);
});