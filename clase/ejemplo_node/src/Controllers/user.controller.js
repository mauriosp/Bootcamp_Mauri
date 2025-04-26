const User = require("../Models/user.model");

// Funcion index, devuelve el listado de usuarios
const index = async(req, res) => {

    try {
        const users = await User.findAll();

        return res.status(200).json({
            status: true,
            msg: "Lista de users obtenida correctamente",
            users: users
        })
    } catch (error) {
        return res.status(500).json({
            status: true,
            msg: `No hay usuarios registrados ${error.message}`,
            users: null
        })
        
    }
    /* try{
        res.status(200).json({message:"Ingreso al controlador de index"});
    }
    catch(error){
        res.status(404).json({message:"Ruta error no encontrada"});
    } */
};







const show = (req, res) => {
    try{
        const id = req.params.id;
        res.status(200).json({message:"Ingreso al controlador de show"});
    }
    catch(error){
        res.status(404).json({message:"Ruta error no encontrada"});
    }
};

const create = (req, res) => {
    try{
        const id = req.params.id;
        res.status(200).json({message:"Ingreso al controlador de create"});
    }
    catch(error){
        res.status(404).json({message:"Ruta error no encontrada"});
    }
};


const update = (req, res) => {
    try{

        const id = req.params.id;
        res.status(200).json({message:`Ingreso al controlador de update con el id: ${id}`}); 
    }
    catch(error){
        res.status(404).json({message:"Ruta error no encontrada"});
    }
};

const destroy = (req, res) => {
    try{
        const id = req.params.id;
        res.status(200).json({message:"Ingreso al controlador de destroy"});
    }
    catch(error){
        res.status(404).json({message:"Ruta error no encontrada"});
    }
};



// Exportar el modulo para su uso externo
module.exports= {
    index,
    create,
    show,
    update,
    destroy
};

