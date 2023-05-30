const {Pool}= require('pg');
const helpers= require('./helpers')
const config={
    
  user: 'postgres',
  host: 'localhost',
  database: 'proveedor',
  password: 'axel',
  port: 5432,

  
};

const pool = new Pool(config);

//funcion de crear usuario para registro
const crearusuario= async(req,res)=>{
    
const  { 
     username,
     correo,
     nombre,                             
     contraseña,
     verificarclave
      }= req.body;
      
      if(contraseña===verificarclave){

     const passwordencriptado = await helpers.encryptPassword(contraseña)
      const result= await pool.query('INSERT INTO usuario(username,correo,nombre,contraseña) VALUES($1,$2,$3,$4)', [
     username,correo,nombre,passwordencriptado ])
      console.log(result)
      res.json(result.rows)

      }else{
        res.json('contraseñas no compatibles')
      }
    }

    const mostrarusuarios = async (req, res) => {
      const response = await pool.query('SELECT* FROM usuario')
      console.log(response);
      res.json(response.rows)
    }

    const crearproveedor= async(req,res)=>{
    
      const  { 
           nombre, telefono, correo, direccion
            }= req.body;
            const result= await pool.query('INSERT INTO proveedor(nombre,telefono,correo,direccion) VALUES($1,$2,$3,$4)', [
           nombre,telefono,correo,direccion ])
            console.log(result)
            res.json(result.rows)

          }
    module.exports={
         crearusuario,
        mostrarusuarios,crearproveedor
        
     }

     const agregarproducto= async(req,res)=>{
    
      const  { 
           tipo_producto, nombre_producto, cantidad, precio, fecha_cadu, fecha_llego, id_proveedor
            }= req.body;
            const result= await pool.query('INSERT INTO inventario (tipo_producto, nombre_producto, cantidad, precio, fecha_cadu, fecha_llego, id_proveedor) VALUES($1,$2,$3,$4,$5,$6,$7)', [
            tipo_producto, nombre_producto, cantidad, precio, fecha_cadu, fecha_llego, id_proveedor ])
            console.log(result)
            res.json(result.rows)

          }
    module.exports={
         crearusuario,
        mostrarusuarios,crearproveedor, agregarproducto
        
     }

     const crearcliente = async(req,res)=>{
    
      const  { 
        
          nombre, apellido, telefono, correo, direccion
            }= req.body;
            const result= await pool.query('INSERT INTO clientes (nombre, apellido, telefono, correo, direccion) VALUES($1,$2,$3,$4,$5)', [
              nombre, apellido, telefono, correo, direccion ])
            console.log(result)
            res.json(result.rows)

          }
    module.exports={
         crearusuario,
        mostrarusuarios,crearproveedor, agregarproducto, crearcliente
        
     }

     const crearventa = async(req,res)=>{
    
      const  { 
        
          fecha, total_venta, id_clientes
            }= req.body;
            const result= await pool.query('INSERT INTO venta (fecha, total_venta, id_clientes) VALUES($1,$2,$3)', [
              fecha, total_venta, id_clientes])
            console.log(result)
            res.json(result.rows)

          }
    module.exports={
         crearusuario,
        mostrarusuarios,crearproveedor, agregarproducto, crearcliente, crearventa
        
     }

     const crearcompra = async(req,res)=>{
    
      const  { 
        
          fecha, total_compra, id_proveedor
            }= req.body;
            const result= await pool.query('INSERT INTO compra (fecha, total_compra, id_proveedor) VALUES($1,$2,$3)', [
              fecha, total_compra, id_proveedor])
            console.log(result)
            res.json(result.rows)

          }
    module.exports={
         crearusuario,
        mostrarusuarios,crearproveedor, agregarproducto, crearcliente, crearventa, crearcompra
        
     }
