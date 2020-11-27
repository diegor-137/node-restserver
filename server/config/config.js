//======
//PUERTO
//======

process.env.PORT = process.env.PORT || 3000;


//======
//ENTORNO
//======

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//======
//BASE DE DATOS
//======

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://dieggo:kfJgWLrE32h3uC71@cluster0.zpil3.mongodb.net/cafe';
}

process.env.URLDB = urlDB;