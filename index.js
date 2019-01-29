let http = require(‘http’);
let url = require(‘url’);

let counter = 0;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
 let u = new URL(req.url);
if(u.pathname === '/save'){
 counter = parseInt(u.search.substring(1));
 res.send("0");
}
  res.send(''+counter);
});

server.listen((process.env.PORT || 8080), ()=>{
	console.log("Main page working");
});
