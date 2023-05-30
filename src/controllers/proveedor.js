const proveedor = {}
const bd = require('../database')

proveedor.guardar=(req,res)=>{
    try{
    bd.crearproveedor(req,res);
   
   
    }catch(e){
   
       console.log(e);
    }
      
      
   }

module.exports = proveedor 