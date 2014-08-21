var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('info', {
        title: 'Info page',
        description: 'More info soon.'
    });
});

module.exports = router;
