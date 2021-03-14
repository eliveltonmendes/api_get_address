const express = require('express');
const app = express();

const port = 3000;

app.set('port', port);

app.listen(app.get('port'), () => {
    console.log(`Listening to ${port}`);
})

module.exports = app;