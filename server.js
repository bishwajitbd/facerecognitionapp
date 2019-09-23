const express= require('express');
const bodyParser=require('body-parser');

const app= express();

app.use(bodyParser.urlencoded({extended:false}))

app.use((req, res, next)=>{
	console.log('<h1>hekdfjd</h1>')
	next();
});

app.get('/', (req, res)=>{
	res.send("getting root")
});

app.get('/profile', (req, res)=>{
	res.send("getting profile");
});

app.post('/profile', (req, res)=>{
	console.log(req.body)
	const user ={
		name: 'Sally',
		hobby:'soccer'
	}
	res.send(user);
});
app.listen(3000);