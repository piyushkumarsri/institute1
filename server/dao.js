var path = require('path');
var Datastore = require('nedb');

let db = {
    users: new Datastore({ filename: path.resolve(__dirname, 'db/users'), autoload: true }),
    course: new Datastore({ filename: path.resolve(__dirname, 'db/course'), autoload: true }),
    batch: new Datastore({ filename: path.resolve(__dirname, 'db/batch'), autoload: true }),
    chapters: new Datastore({ filename: path.resolve(__dirname, 'db/chapters'), autoload: true }),
    assigned_chapters: new Datastore({ filename: path.resolve(__dirname, 'db/assigned_chapters'), autoload: true }),

};

module.exports = db;