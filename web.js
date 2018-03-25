const express = require('express')
const app = express()
const fs = require('fs')
const readline = require('readline')

var path = 'log.txt'
var seq = 0
var count = 0

//app.get('/', (req, res) => res.send('Hello World!'))

app.get('/get', function(req, res) {
	fs.readFile(path, 'utf8', function(err, data) {
		if(err) throw err
		else {
			console.log(data)
			res.end(data)
		}
	});
})


app.get('/update', function(req, res) {

	fs.appendFile('log.txt', JSON.stringify(req.query)+"\n", function (err) {
		if (err) throw err
		console.log("%j", req.query)
		res.end("Got "+ String(seq++) + " "+ JSON.stringify(req.query))
	});
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))

