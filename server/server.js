var cors = require('cors');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(cors());
app.use(bodyParser.json());
var adminRoutes = require('./admin.routes');
var userRoutes = require('./user.routes');
app.get("/", (req, res) => {
    res.send("Yes server working");
});


app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);

app.listen(3000, () => {
    console.log("server running at port 3000");
});