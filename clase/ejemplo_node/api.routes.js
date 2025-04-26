const express = require("express");


const router = express.Router();

//Rutas para el controlador de usuarios
const userRouter = require('./src/Routes/user.routes');
router.use('/users', userRouter);


const moviesRouter = require('./src/Routes/movies.routes')
router.use('/movies',moviesRouter)



//Exportar el router para poder ser utilizado en otras partes de la api
module.exports = router;





