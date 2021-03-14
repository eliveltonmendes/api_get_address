const fetch = require('node-fetch');
var payloadChecker = require('payload-validator');

const expectedPayload = {
    "cep": "00000000"
};

async function getAddress(cep) {
    let url = new URL(`http://viacep.com.br/ws/${cep}/json/`);
    return fetch(url);
}

async function validatePayloadDetail(json){
    let cep = json.cep;
    
    let success = (cep.length == 8);

    let response = {
        "success": success,
        "message": (success) ? "" : "Tamanho do cep incorreto (8 digitos)"
    }

    return response;
}

async function validateJson(json){
    let result = payloadChecker.validator(json, expectedPayload, ["cep"], false);
    
    if (!result.success){
        return {
            "success": false,
            "message": result.response.errorMessage
        };
    }

    return validatePayloadDetail(json);
}

async function returnAddress(req, res) {
    let result = await validateJson(req.params);

    if(!result.success) {
        res.status(500).send(result.message);
    }

    let cep = req.params.cep;
    let address = await getAddress(cep)
            .then(response => response.json());
    
    return res.send(address).status(200);
}

module.exports = {
    returnAddress
}