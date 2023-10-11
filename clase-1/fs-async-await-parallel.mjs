import { readFile } from 'node:fs/promises';

//poner todas las promesas que queremos
Promise.all([
   readFile('./file.txt','utf-8'),// lee el archivo
   readFile('./file2.txt','utf-8') //lee segundo archivo
]).then(([text,secondText])=>{//cuando termines de hacer las tareas anteriores "ambas" continua con esto
   console.log(text);
   console.log(secondText);
})


    


