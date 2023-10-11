const fs = require ('node:fs');

console.log('leyendo el primer archivo');
//const text = fs.readFileSync('./file.txt','utf-8'); //por defult devuelve un buffer de datos, par aque pueda ser legible se debe convertir con 'utf-8' ESTA ES LA FORMA SINCRONA DE LEER ARCHIVOS LO QUE SIGNIFICA QUE NO PUEDE HACERSE NADA HASTA QUE TERMINE DE LEER ESE ARCHIVO O EJECUTAR ESE PROCESO
//Forma ASINCRONA de leer un archivo/proceso, se utiliza callbacks, para ello se agrega un 3er parametro, este parametro es una función

fs.readFile('./file.txt','utf-8',(err,text)=>{
console.log(text)
}) //en esta linea indicamos que se lea un archivo, al finalizar este archivo va imprimir su contenido. sin embargo, con esta estructura tambien le estamos indicado, que lea el archivo pero sino tiene respuesta inmediata, que continue la ejecución


console.log('haciendo cositas');


console.log('leyendo el segundo archivo');
fs.readFile('./file2.txt','utf-8',(err,text)=>{
    console.log(text)
    });  //Forma ASINCRONA de leer un archivo/proceso

console.log('teermino el programa');
