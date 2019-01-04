// Invoca el modo 'strict' de JavaScript
'use strict';

// Carga las dependencias del módulo
const config = require('./config');
const mongoose = require('mongoose');

// Definir el método de configuración de Mongoose
module.exports = function(){
	// Usar Mongoose para conectar a MongoDB
    mongoose.Promise = global.Promise;
    const URI = config.db;
    const db = mongoose.connect(URI, { 
        useNewUrlParser: true, 
        useCreateIndex: true 
    }) // Indica donde está ubicada la base de datos
    db.then(db => console.log('La base de datos se ha conectado')) // Envía un mensaje  cuando se conecta a la base de datos.
    db.catch(err => console.error(err)); // Envía un mensaje si se genera un error.

    // Cargar el modelo 'User'
    require('../models/user.server.model');
    
    // Devolver la instancia de conxión a Mongoose
    return db;
};