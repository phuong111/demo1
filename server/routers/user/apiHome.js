const express = require('express');
const router = express.Router();

const user = require('../../models/user');
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

router.post('/user', (req, res) => {
    console.log(req.body);
});

module.exports = router;