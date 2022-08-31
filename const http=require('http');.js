const http=require('http');

const hostname='139.59.49.173';
const port=8080;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    res.end('Hello World!\n');
});

server.listen(port,hostname,()=>{
    console.log('server running at http://$(hostname):$(port)/');
});