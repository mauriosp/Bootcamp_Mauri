// constante para definir puerto
const PORT = 3000;


//Para leer variables de entorno requiere instalar el parquete dotenv
// npm install dotenve
require("dotenv").config();

const express = require("express") ;//llamado ala servicio de express

const cors = require('cors');


const app = express(); // Se agrega el servidor  a esta constante lo que facilita su llamado
app.use(cors());
app.use(express.json());    


const routes = require('./api.routes');
app.use('/api/v1', routes);





app.get('/',(req, res)=>{ //ruta sin parametro que se mostrara en el navegador
    res.send('Hola mundo!!, desde Node con express');
});


//Cargar el archivo de conexión a la base de datos
const sequelize = require('./src/Models/dbconnection')

//Sincronizar los modelos con la base de datos
require('./src/Models/sync_tables')


app.listen(process.env.PORT, async()=>{// inicializamos servidor
    console.log(process.env.BIENVENIDA, process.env.PORT, process.env.BIENVENIDA2);
    
    try{
        await sequelize.authenticate();//asincronico
        console.log("Conexión establecida con éxito a la BD");

        // Crea las tabals si no existen
        // Y actualiza cambios
        await sequelize.sync({alter: true}); 
        console.log("Tablas sincronizadas");

    }catch(error){
        console.error("Error conectando a la BD:", error);

    }
});