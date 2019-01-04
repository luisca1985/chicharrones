// Invocar el modo 'strict' de JavaScript mode
'use strict';

// Cargar las dependencias del módulo
const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');

// Definir el mérodo de configuración de Express
module.exports = function(){
    // Crear una nueva instancia de la aplicación Express
    const app = express();

    // Usar la variable "NODE_ENV" para activar los middleware "morgan" logger o 'compress'
	if(process.env.NODE_ENV ==='development'){
		app.use(morgan('dev'));
	} else if(process.env.NODE_ENV === 'production'){
		app.use(compress());
	}

    // Devolver la instancia de la aplicación Express
    return app;
}