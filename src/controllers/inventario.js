const inventario = {}
const bd = require('../database')

inventario.guardar=(req,res)=>{
    try{
    bd.agregarproducto(req,res);
   
   
    }catch(e){
   
       console.log(e);
    }
      
      
   }

module.exports = inventario 