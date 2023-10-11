const fs = require('node:fs/promises');

console.log('leyendo el primer archivo');

//Forma ASINCRONA de leer un archivo, utilizando promesas
fs.readFile('./file.txt','utf-8')// lee el archivo
.then(text=>{ //cuando termine de leer ... (esta es la estructura de las promesas)
console.log(text) //haces esto
});
 //pero si tarda la operación, continua ejecutando el codigo

console.log('haciendo cositas');


console.log('leyendo el segundo archivo');
fs.readFile('./file2.txt','utf-8')
    .then(text=>{
    console.log(text)
    });  //Forma ASINCRONA de leer un archivo


