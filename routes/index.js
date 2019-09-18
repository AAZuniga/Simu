var express = require('express');
var router = express.Router();
var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'N/A' });
});

/* POST device data values */
router.post('/', function(req, res, next) {

  var request = require('request');
  var moment = require('moment');

  requestOptions = {
    url : "https://cs1-dev.vm2m.net/com/http?idName=DevEUI",
    method : "POST",
    json : {
      "DevEUI": req.body.id,
      "Type" : req.body.type,
      "Payload": req.body.value,
      "Timestamp": moment().unix()
    },
    qs : {
    }
  };

  request(
      requestOptions,
      function(err, response, body) {
        console.log (body);
        res.render('index',{title:body});
      }
  )
});

/* POST Commands. */
/* Example of url to reach this route: http://localhost:3000/commands/data?id_device=1&par1=3 */

router.get('/commands/data?', function(req, res, next) {
    console.log (req.query.id_device);
    console.log (req.query.par1);

    var DAO = require('../lib/DAO');
    var request = "UPDATE devices SET par1 = '" + req.query.par1 + "'" + " WHERE id_device = '" + req.query.id_device + "'"
    console.log (request)
    DAO.executeQuery(request, function (Valor) {
    });

    sendJsonResponse(res, 200);

});

/* GET Commands. */
router.get('/commands', function(req, res, next) {
        var DAO = require('../lib/DAO');
        var request = "SELECT * FROM devices";
        DAO.executeQuery(request, function (Valor) {
            res.render('commands', {device: Valor});
        });
});



module.exports = router;
