const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
//Tipo de servidor que realizaremos
const http = require('http');

//Iniciar y configurar express
const app = express();
//mostrar las peticiones por consola
app.use(logger('dev'));
//Parsear las entradas de solicitud de datos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Configurar las rutas de bienvenida al servidor
app.get('/',(req,res)=> res.status(200).send({
    mesage: 'Bienvenido a la Api Rest de compras.',
}));
//Configurar el puerto del servidor
const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
//Crear el servidor http
const server = http.createServer(app);
server.listen(port);
module.exports = app;
