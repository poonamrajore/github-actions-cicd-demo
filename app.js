const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) =>; {
res.writeHead(200, {"Content-Type": "text/plain"});
res.end("GitHub Actions CI/CD Demo Application");
});
server.listen(port, () =>; {
console.log(`Application running on port ${port}`);
});
