const fs = require ('node:fs');

console.log('leyendo el primer archivo');
const text = fs.readFileSync('./file.txt','utf-8'); //por defult devuelve un buffer de datos, par aque pueda ser legible se debe convertir con 'utf-8' ESTA ES LA FORMA SINCRONA DE LEER ARCHIVOS LO QUE SIGNIFICA QUE NO PUEDE HACERSE NADA HASTA QUE TERMINE DE LEER ESE ARCHIVO O EJECUTAR ESE PROCESO
console.log(text);



console.log('haciendo cositas');


console.log('leyendo el segundo archivo');
const textSecond = fs.readFileSync('./file2.txt','utf-8');
console.log(textSecond)
    

console.log('teermino el programa');
