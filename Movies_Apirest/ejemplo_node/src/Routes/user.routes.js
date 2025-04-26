// Importa el módulo 'Router' desde el paquete express,
// 'Router' permite crear rutas modulares y manejables dentro de una 
// aplicación web
const express = require('express');

// Crea una nueva instancia de 'Router'
// Esta instancia se utilizará para crear rutas específicas
// y luego integrarlas en la aplicación principal
const router = express.Router();    

//Importar los métodos del controlador
const userController = require('../Controllers/user.controller');
//const { index } = require('../Controllers/user.controller');

/* Crear las rutas*/

//Ruta para el método index
router.get('/', userController.index);
//router.get('/', index);


//Ruta para el método show
router.get('/:id', userController.show);

//Ruta para el método create
router.post('/:id', userController.create);

//Ruta para el método update
router.put("/:id",userController.update);

//Ruta para el método destroy
router.delete('/:id', userController.destroy);


/* Exportar el router para poder ser utilizado en otras partes de la api */ 
module.exports =  router; 