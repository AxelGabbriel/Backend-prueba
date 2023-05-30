const compra = {}
const bd = require('../database')

compra.guardar=(req,res)=>{
    try{
    bd.crearcompra(req,res);
   
   
    }catch(e){
   
       console.log(e);
    }
      
      
   }

module.exports = compra 