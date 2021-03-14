var express = require('express');
var router = express.Router();

const cepController = require('../src/cep/controller');

router.get('/getAddress/:cep', function(req, res) {
    cepController.returnAddress(req, res);
})

module.exports = router;