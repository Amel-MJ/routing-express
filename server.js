const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine', hbs);
hbs.registerPartials(__dirname + '/views/partial');

const today = new Date().getHours();
const open = true;//(today >= 8 && today <= 17);

app.use('/assets', [
    express.static(__dirname + '/node_modules/bootstrap/dist/'),
]);

app.get('/home', function(req, res) {
	(open) ? res.status(200).render('page.hbs',{name:"home"}) : res.status(200).end("close");
});

app.get('/ourservices', function(req, res) {
	(open) ? res.status(200).render('page.hbs',{name:"ourservices"}) : res.status(200).end("close");
});

app.get('/contact', function(req, res) {
	(open) ? res.status(200).render('page.hbs',{name:"contact"}) : res.status(200).end("close");
});

app.listen(8080);