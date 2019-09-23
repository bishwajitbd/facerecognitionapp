const http= require('http');

const server = http.createServer((request, response)=>{
	//console.log('headers', request.headers)
	console.log('method', request.method)
	console.log('url', request.url)
	const user= {
		name: 'john',
		hobby:'skating'
	}

	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(user));
})
console.log(1111111);
server.listen(3000);