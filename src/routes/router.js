const express= require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
const proveedor = require('../controllers/proveedor')
const  {passportAuth}  = require('../middlewares')
const inventario = require('../controllers/inventario')
const clientes = require('../controllers/clientes')
const venta = require('../controllers/venta')
const compra = require('../controllers/compra')






//registro y login
router.post('/registro',usuario.register)
router.post('/login', passportAuth)
router.get('/perfil',(req,res)=>{
    res.send('perfil')
})
router.get('/usuarios', usuario.mostrar)
//rutas proveedor
router.post('/crearproveedor', proveedor.guardar)
//rutas inventario
router.post('/agregarproducto', inventario.guardar)
//rutas clientes
router.post('/crearcliente', clientes.guardar)
//rutas de venta
router.post('/crearventa', venta.guardar)
//rutas de compra
router.post('/crearcompra', compra.guardar)


module.exports = router