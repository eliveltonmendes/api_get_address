const fetch = require('node-fetch');
var payloadChecker = require('payload-validator');

const expectedPayload = {
    "cep": ""
};

async function getAddress(cep) {
    let url = new URL(`http://viacep.com.br/ws/${cep}/json/`);
    return fetch(url);
}

async function validateJson(json){
    let result = payloadChecker.validator(json, expectedPayload, ["cep"], false);

    /*if(result.success) {
        res.json({"message" : "Payload is valid"});
    } else {
        res.json({"message" : result.response.errorMessage});
    }*/
    return result;
}

async function returnAddress(req, res) {
    /*let result = validateJson(req.params);
    
    console.log(result);
    console.log(result.success);
    if(!result.success) {
        res.send(result.response.errorMessage).status(500);
    }*/

    let cep = req.params.cep;
    let address = await getAddress(cep)
            .then(response => response.json());
    
    return res.send(address).status(200);
}

module.exports = {
    returnAddress
}