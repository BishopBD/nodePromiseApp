// console.log("Hello, World!")
// var express = require('express');
// var app = express();

// app.get('/', function (req, res){
	// res.send('Hellow World!');
// });

// app.listen(3000, function () {
	// console.log('Example app listening on port 3000!');
	// });
	
let myFirstPromise = new Promise((resolve, reject) => {
	setTimeout(function(){
		resolve("Success!");
	}, 25000)
});

myFirstPromise.then((successMessage) => {
	console.log("Yay! " + successMessage);
});