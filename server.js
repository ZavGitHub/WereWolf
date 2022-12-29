const express = require('express')
const app = express()

// to read body from responses
app.use(express.urlencoded({ extended: false }));

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to ejs
app.set('view engine', 'ejs');


// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
    res.render('pages/login', { name: "TestName" });
});

// User list page
app.get('/admin', function (req, res) {
    res.render('pages/admin', { users: users });
    console.log(users);
});

app.post('/setHuman/:name', function (req, res) {
    users.set(req.params.name, 'Human');
    res.redirect('../admin');
});
app.post('/setVampire/:name', function (req, res) {
    users.set(req.params.name, 'Vampire');
    res.redirect('../admin');
});
app.post('/setWerewolf/:name', function (req, res) {
    users.set(req.params.name, 'Werewolf');
    res.redirect('../admin');
});

// Role page
app.post('/game', (req, res) => {
    users.set(req.body.name, 'Human');
    res.render('pages/game', { userName: req.body.name, userRole: users.get(req.body.name) });
})

const users = new Map();

app.listen(8080);
console.log('8080 is the magic port');