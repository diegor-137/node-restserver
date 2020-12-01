//======
//PUERTO
//======

process.env.PORT = process.env.PORT || 3000;


//======
//ENTORNO
//======

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//======
//Vencimiento del token
//======
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//======
//SEED de autenticacion
//======
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//======
//BASE DE DATOS
//======

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//======
//GOOGLE CLIENT ID
//======

process.env.CLIENT_ID = process.env.CLIENT_ID || '919173320263-nmmju17jsm8dl90v1ng6qjh1uvhj9vcj.apps.googleusercontent.com';