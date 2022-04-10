const express = require('express');
const app = express();

const user = '[{"id":10,"Nombre":"Juan","Apellido":"Perez","email":"juanperez@gmail.com"}, ' +
              '{"id":20,"Nombre":"Maria","Apellido":"Sanchez","email":"mariasanchez@gmail.com"}, '+
              '{"id":30,"Nombre":"Pool","Apellido":"Ramos","email":"poolramos@gmail.com"}]';

const str = '[{"id":10,"Producto": "Impresora","Stock":15,"Precio":1200},' +
             '{"id":20,"Producto": "Laptop","Stock":25,"Precio":2400},' +
             '{"id":30,"Producto": "Fotocopiadora","Stock":35,"Precio":3200}]';

app.get('/', (req, res) => {
    res.send('Hello world');
});
app.get('/clientes', (req, res) => {
    res.send(user)
})
app.get('/productos', (req, res) => {
    res.send(str)
})

app.listen(5000, () => {
    console.log('Servidor en el puerto 5000');
});


