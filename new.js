/*const http = require('http');
const uc= require('upper-case');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc.upperCase('Hola Node JS UpperCase'));
    res.end();
}). listed(8080);*/

/*const fs = require('fs');
const rs = fs.createReadStream('./demofile.txt');
rs.on('open', function() {
    console-console.log ('The file have been to opened')
});*/

/*const events = require('events');
const eventEmitter = new events.EventEmitter();
// create an event handler:
const myEventHandler = function () {
    console.log('i hear a scream!')
// asing the event handler to an event:
eventEmitter.on('scream', myEventHandler);
// afire the "scream " event: 
eventEmitter.emit('scream') */

// upload file

/* const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer(function(req, res){
    if (req.url == '/fileupload') {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            const oldpath = files.filetoupload.filetpath;
            const newpath = 'C:\Users\SENA\Documents\Erick\10-03-2023' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err){
                if (err) throw err;
            });
            res.write('File upload');
            res.end();
        });
    } else {
        res.writeHead(200, {'content-Type': 'text/html;charset=UTF-8'});
        res.write('<form  action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="fileupload"><br>');
        res.write('<input type="submit" value="Enviar...">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);*/


/* const EventEmitter = require('events');
const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProductos) =>{
    console.log(`Total de la compra: ${total}`);
    console.log(`Numero de los productos: ${numProductos}`);
});

emisorProductos.emit('compra', 500, 5); */


const promesaCumplida = true;
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('promesa cumplida');
        } else {
            reject('promesa rechazada...');            
        }

    }, 5000);
});

miPromesa.then((valor) => {
    console.log(valor);
});