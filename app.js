// Requires
var express = require('express');
var mongoose = require('mongoose');



// inicializar variables
var app = express();



// Conexión a la base de datos 
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res )=>{
 if(err) throw err;
 console.log('Base de datos: \x1b[32m%s\x1b[0m',' online');
})


//RUtas
app.get('/', (req, res, next)=>{
    res.status(200).json({
        ok: true,
        mensaje: 'petición realizada correcta'
    });
});



// Escuchar peticiones
app.listen(3000, ()=>{
    console.log('Express server corriendo en el pueto 3000: \x1b[32m%s\x1b[0m',' online');
})