var express = require('express');
var pg = require('pg');
var router = express.Router();

/* GET info page. */

module.exports = function(dbConn) {

    router.get(/\/?(json)?/, function(req, res) {
        pg.connect(dbConn, function(err, client, done) {
           client.query('SELECT * FROM poll', function(err, result) {
                done();
                if (err) return console.error(err);
                
                if (req.params[0] === 'json') {
                    res.json(result.rows);
                
                } else {
                    // render view
                    res.render('info', {
                        data: result.rows
                    });
                }
           });
        });
    });
    return router;
};
