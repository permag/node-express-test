var express = require('express');

/* Environment settings */

module.exports = function() {

    var env = process.env.NODE_ENV || 'development';
    var dbConn = null;
    
    if ('development' === env) {
        console.log('DEV mode');
        dbConn = 'postgres://tbone00:@localhost:5432/nodepg';

    } else if ('production' === env) {
        console.log('PROD mode');
        dbConn = process.env.DATABASE_URL;
    }

    return {
        dbConn: dbConn
    };
}();  // <--- ()
