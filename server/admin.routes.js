var Router = require('express').Router;
var db = require('./dao');
var { OK, ERROR } = require('./route.helper');
var admin = new Router();

admin.get('/users', (req, res) => {
  db.users.find({},(err,users)=>{
    if (err) return ERROR(res,err);
    OK(res,users);
  })
});

admin.post('/register-user', (req, res) => {
    let data = req.body;
    db.users.insert(data, (err, newdoc) => {
        if (err) return ERROR(res,err);
        OK(res,newdoc);
    });
    
});

admin.post('/register-course', (req, res) => {
    let data = req.body;
    db.course.insert(data, (err, newdoc) => {
        if (err) return ERROR(res,err);
        OK(res,newdoc);
    });
});

admin.get('/get-courses', (req, res) => {

    db.course.find({}, (err, courses) => {
        if (err) return ERROR(res,err);
        OK(res,courses);
    });
});

admin.post('/register-batch', (req, res) => {
    let data = req.body;
    db.batch.insert(data, (err, newdoc) => {
        if (err) return ERROR(res,err);
        OK(res,newdoc);
    });
});

admin.get('/get-batch', (req, res) => {
   
    db.batch.find({}, (err, batch) => {
        if (err) return ERROR(res,err);
        OK(res,batch);
    });
});

admin.post('/add-chapter', (req, res) => {
    let data = req.body;
    db.chapters.insert(data, (err, newdoc) => {
        if (err) return ERROR(res,err);
        OK(res,newdoc);
    });
});




module.exports = admin;