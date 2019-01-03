// Invocar el modo 'strict' de JavaScript mode
'use strict';

// Cargar las dependencias del módulo
const config = require('./config');
const express = require('express');

// Definir el mérodo de configuración de Express
module.exports = function(){
    // Crear una nueva instancia de la aplicación Express
    const app = express();
    // Devolver la instancia de la aplicación Express
    return app;
}