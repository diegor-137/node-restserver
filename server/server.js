require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
    //Configuracion global de rutas

//habilitar la carpeta public

app.use(express.static(path.resolve(__dirname, '../public')));


app.use(require('./routes/index'));


app.listen(process.env.PORT, () => {
    console.log('Puerto:', process.env.PORT);
});

mongoose.connect(process.env.URLDB = urlDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');
});