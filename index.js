
const http = require('http');

const PORT = 4444;

http.createServer((req, res) => {
    res.end("Node Server is Running");
}).listen(PORT, () => {
    console.log("Server is running at port no : " + PORT);
});
