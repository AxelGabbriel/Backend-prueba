const clientes = {}
const bd = require('../database')

clientes.guardar=(req,res)=>{
    try{
    bd.crearcliente(req,res);
   
   
    }catch(e){
   
       console.log(e);
    }
      
      
   }

module.exports = clientes 