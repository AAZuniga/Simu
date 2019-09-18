/**
 * Created by Adolfo Zuniga on 05/08/2014.
 */

var mysql = require('mysql');

exports.executeQuery = function (querystring, callback) {

    var connection = mysql.createConnection (
        {
            host: 'localhost',
            user: 'root',
            password: 'rekoll',
            database: 'simulator'
        }
    );
    //console.log (querystring);

    connection.connect (function(error, results) {
        if(error) {
            console.log('Connection Error: ' + error.message);
            return;
        }
        //console.log('Connected to MySQL');
    });

    // ... error checks

    connection.query(querystring, function (err, row) {

            if (err) {
                console.log (querystring);
                console.log ('error, error, error');
                connection.end(function(err) {
                    callback("Empty")
                });
            } else {
                // Verifies if it's an UPDATE statement, otherwise it's a SELECT statement
                if (querystring.slice(0, 6) == "UPDATE" || querystring.slice(0, 6) == "INSERT" || querystring.slice(0,6) == "DELETE") {
                    connection.end(function(err) {
                        //console.log ("Paso x este lado!!")
                        callback(querystring.slice(0, 6));
                    });
                } else {
                    if (row.length > 0) {
                        connection.end(function(err) {
                            //console.log ("Paso x aqui!!");
                            callback(row);
                        });
                    } else {
                        row [0] = "Empty";
                        connection.end(function(err) {
                            //console.log ("Paso x aca!!");
                            callback(row);
                        });
                    }
                }
            }
         });
}