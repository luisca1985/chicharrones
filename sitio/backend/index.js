// Invocar modo JavaScript 'strict'
'use strict';

// Configurar la variable 'NODE_ENV'
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Cargar las dependencias de módulos
const express = require('./config/express');

// Crear una nueva instancia aplicación Express
var app = express();

// Configuración del puerto
app.set('port', process.env.PORT || 3000);

// Usar la instancia de la aplicación Express para que escuche en el puerto '3000'
app.listen(app.get('port'), () => {
    // Hacer Log del status del server a la consola
	console.log('Servidor ejecutándose en el puerto',app.get('port'));
});

// Usar la prpiedad module.exports para exponer nuestra nuestra instancia de la aplicación Express para uso externo
module.exports = app;