const fs = require ('node:fs');
const {promisify} =require('node:util'); //requerimos promisify

const readFilePromise =promisify(fs.readFile); //convierte el fs.readFile a promisify y lo asigna a readFilePromise

console.log('leyendo el primer archivo');

//dado que readFilePromise ya es promesa, se maneja con la estructura de promesa
readFilePromise('./file.txt','utf-8')   //lee el archivo y ..
.then(text=>{                           // cuando termines de leerlo has ...
console.log(text)                       //una impresion de la lectura
}) // sin embargo con esta declaracion le decimos, lee, pero si demora sigue ejecutando el siguiente bloque de codigo


console.log('haciendo cositas');


console.log('leyendo el segundo archivo');
readFilePromise('./file2.txt','utf-8')
.then(text=>{
    console.log(text)
});

console.log('teermino el programa');
