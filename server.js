const estudoController = require('./src/estudo');
const cepController = require('./src/cep/controller');

var express = require('express');
var app = express();

const port = 3000;

app.set('port', port);

app.listen(app.get('port'), () => {
    console.log(`Listening to ${port}`);
})

app.get('/getAddress/:cep', function(req, res) {
    console.log(req.params.cep);
    cepController.returnAddress(req, res);
})

async function startGame () {
    //Teste de método async
    try{
        const resp = await estudoController.bestGameSeries('Final Fantasy');
        console.log(resp);
        await estudoController.bestGame('Mortal Kombat');
    } catch (e) {
        console.log(e);
    }
}

async function startCepRequest() {
    let cep = '86067000';
    const resp = await cepController.returnAddress(cep);
    console.log('-------- Resp');
    console.log(resp);
}

//startGame();
//startCepRequest();