const express = require('express');
const UsuariosController = require('./controller/UsuariosController');
const routes = express.Router();

//const login = require('../middleware/login');

routes.get('/getusers', UsuariosController.getUsuarios);
routes.get('/getuser/:id', UsuariosController.getUsuarioById);
routes.post('/cadastro', UsuariosController.createUsuario);
routes.put('/updateuser/:id', UsuariosController.updateUser);
routes.delete('/deleteuser/:id', UsuariosController.deleteUser);
routes.post('/login', UsuariosController.login);

module.exports = routes;