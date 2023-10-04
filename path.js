const path = require('node:path');

//conocer como se separan las carpetas (la diagonal)
console.log(path.sep);

//unir rutas con parh.join
const filePath = path.join('content','sub','test.txt','"algo"');
console.log(filePath);

//conseguir el nombre del fichero de una ruta determinada
const base = path.basename('/temp/edwin/etc.txt');
console.log(base);

//agrega un argumento al anterior para eliminar la extensión y obtener solo el nombre del archivo
const fileName = path.basename('/temp/edwin/etc.txt', '.txt');
console.log(fileName);

//obtener la extensión de un archivo
const extension = path.extname('car.docx');
console.log(extension);