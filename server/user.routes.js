var Router = require('express').Router;

var user = new Router();

user.get('/profile', (req, res) => {
    res.json({ data: [] });
});


module.exports = user;