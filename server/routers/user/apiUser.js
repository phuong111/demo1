const express = require('express');
const sha1 = require('sha1');
const router = express.Router();

const user = require('../../models/user');
const login = require('../../models/login');
/* GET api listing. */
router.get('/user', (req, res) => {
    user.find(function(err, user) {
        res.json(user);
    })
});
router.get('/insertUser', (req, res) => {
    u = new user({
        hoten: 'Admintranter',
        ngaysinh: '1998-05-03',
        sdt: '01659857439'
    });
    u.save(err => {
        console.log('inserted');
        res.json('inserted');
    })
});
router.get('/insertLogin', (req, res) => {
    lg = new login({
        username: 'admin',
        password: sha1('123'),
        quyen: '1',
        user: '5b041e5c4797e62b2416f525'
    });
    lg.save(err => {
        console.log('inserted');
        res.json('inserted');
    })
});
router.get('/getTaiKhoan', (req, res) => {
    login.find(function(err, login) {
        res.json(login);
    })
});
router.post('/login', (req, res) => {
    // console.log(req.body);
    login.findOne().where('username').equals(req.body.username).
    where('password').equals(sha1(req.body.password)).
    exec((req, res) => {
        if (res != null) {
            return true;
        } else {
            return false;
        }
        // console.log(res);
    });
});

module.exports = router;