var express = require('express');
var pg = require('pg');
var router = express.Router();
// Dev
// var conString = 'postgres://tbone00:@localhost:5432/nodepg';

/* GET info page. */


// Dev
// /info (default)
// /info/json (json is optmal)
// router.get(/\/?(json)?/, function(req, res) {
//     pg.connect(conString, function(err, client, done) {
//        client.query('SELECT * FROM poll', function(err, result) {
//             done();
//             if (err) return console.error(err);
//             // console.log(result.rows);
            
//             if (req.params[0] === 'json') {
//                 res.json(result.rows);
            
//             } else {
//                 // render view
//                 res.render('info', {
//                     data: result.rows
//                 });
//             }
//        });
//     });
// });



// Prod
router.get(/\/?(json)?/, function(req, res) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
       client.query('SELECT * FROM poll', function(err, result) {
            done();
            if (err) return console.error(err);
            // console.log(result.rows);
            
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

module.exports = router;
