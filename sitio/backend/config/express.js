// Invocar el modo 'strict' de JavaScript mode
'use strict';

// Cargar las dependencias del módulo
const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const methodOverride = require('method-override');

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

    // Usar las funciones middleware 'express' y 'method-override'
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.use(methodOverride());

    // Devolver la instancia de la aplicación Express
    return app;
}