const http = require(&quot;http&quot;);
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) =&gt; {
res.writeHead(200, {&quot;Content-Type&quot;: &quot;text/plain&quot;});
res.end(&quot;GitHub Actions CI/CD Demo Application&quot;);
});
server.listen(port, () =&gt; {
console.log(`Application running on port ${port}`);
});
