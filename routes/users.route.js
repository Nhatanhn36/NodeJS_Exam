var express = require('express');
var router = express.Router();

var database = require('../config/database');

router.get('/', function(req, res) {
    //list user
    database.query('SELECT * FROM user', function(err, result) {
        if(err)
            console.log(err);

        res.render('users/list', {
            title: 'User List',
            data: result
        });
    });

});

router.get('/add', function(req, res) {
    res.render('users/add', {
        title: 'Add New User',
        firstname: '',
        lastname: '',
        MobileNumber: '',
        username: '',
        password: ''
    })
});

router.post('/add', function(req, res) {
    var user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        MobileNumber: req.body.MobileNumber,
        username: req.body.username,
        password: req.body.password
    }

    database.query('INSERT INTO user SET ?', user, function(err, result) {
        if(err) {
            console.log(err);
        }  else {

            //req.flash('success', 'Data added successfully!')

            res.render('users/list', {
                title: 'Add New User',
                data: result
            });
        }
    })
});

module.exports = router;

