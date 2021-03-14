async function bestGameSeries(game){
    return new Promise((resolve, reject) => {
        if (game == 'Final Fantasy') {
            resolve({
                success: true,
                message: 'Acertou'
            });
        } else {
            reject({
                success: false,
                message: 'Ja ouviu falar de Final Fantasy?'
            });
        }
    })
}

async function bestGame(gameName) {
    return new Promise((resolve, reject) => {
        if (gameName == 'Final Fantasy VII') {
            resolve({
                success: true,
                message: 'Exatamente'
            })
        } else {
            reject({
                success: false,
                message: 'Ja ouviu falar de Sephiroth?'
            })
        }
    })
}

module.exports = {
    bestGameSeries,
    bestGame
}