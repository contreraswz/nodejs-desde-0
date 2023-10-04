/*const fs =require('node:fs');
fs.stat
fs.readdir('.',(err,files)=>{
    if(err){
        console.error('ERROR', err);
        return;
    }
    files.forEach(file => {
        console.log(file);
    });
});*/

const { error } = require('node:console');
const { Stats } = require('node:fs');
const fs=require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.' // leer los argumentos que se teclean en la linea de comandos y asigna a folder, el operador nullish, nos indica que si no hay argumento, por defecto sea el fichero raíz

async function ls (folder){ // inicia funcion asincrona LS
let files; //declara variable files que posteriormente se usará para guardar los archivos que esten en el folder en cuestion
try {
    files = await fs.readdir(folder); // lee los archivos del "folder" y guarda en "files" se manera asincrona
} catch {
    console.error(`No se pudo leer el directorio ${folder} `)
    process.exit(1);
}

const filesPromises = files.map(async file => { //inicializa variable "filesPromises" en ella se guardará un arreglo de archivos que contendrá datos especificos de cada archivo leido
    const filePath = path.join(folder, file) //obtiene la dirección exacta del archivo
    let stats; //declara varible stats que servirá para guardar toda la información de cada archivo
    try{
        stats = await fs.stat(filePath) // devuelve la información de un archivo 
    } catch{
        console.error(`No se puede leer el archivo ${filePath}`);
        process.exit(1);
    }

    const isDirectory = stats.isDirectory(); // asigna a "isDirectory" el resultado de la consulta a "stats" sobre ¿es un directorio?
    const fileType = isDirectory ? 'D' : 'F';// asigna a "fileType" el resultado de la operacion a "isDirectory" marcando con una "D" cuando es true (o sea cuando es un directorio) y con "F" cuando es "FALSE"
    const fileSize = stats.size; // asigna a "fileSize" el resultado de la consulta a "stats" sobre ¿tamaño del archivo?
    const fileModified = stats.mtime.toLocaleString(); // asigna a "fileModified" el resultado de la consulta a "stats" sobre ¿es un directorio?
    
    return `${fileType} ${file} ${fileSize.toString()} ${fileModified}`; //regresa en cada promesa con una estructura especifica 
})

    const filesInfo =await Promise.all(filesPromises); // una vez terminadas todas las promesas, asigna los resultados a "filesInfo"

    filesInfo.forEach(element => console.log(element)); // itera el arreglo para mostrar cada elemento contenido en el
    
}

ls(folder); //llamado la funcion "ls"
