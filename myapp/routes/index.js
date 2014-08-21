var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Node.js/Express test app',
        description: 'Deployed at Heroku for learning purpose.'
    });
});

module.exports = router;
