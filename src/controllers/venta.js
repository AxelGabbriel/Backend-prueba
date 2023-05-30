const venta = {}
const bd = require('../database')

venta.guardar=(req,res)=>{
    try{
    bd.crearventa(req,res);
   
   
    }catch(e){
   
       console.log(e);
    }
      
      
   }

module.exports = venta 