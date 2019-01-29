let http = require('http');
let URL = require('url').URL;

let counter = 0;

const server = http.createServer((req, res) => {
 let u = new URL('https://one-counter.herokuapp.com'+req.url);
if(u.pathname === '/save'){
 counter = parseInt(u.search.substring(1));
 res.send("0");
}
  res.send(''+counter);
});

server.listen((process.env.PORT || 8080), ()=>{
	console.log("Main page working");
});
