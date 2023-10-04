const { readFile }=require('node:fs/promises');

//IIFE - inmediatly Invoked function Expression

(
 async()=>{
    console.log('leyendo el primer archivo');

    //Forma ASINCRONA de leer un archivo, utilizando await
    const text = await readFile('./file.txt','utf-8')// lee el archivo
    console.log(text);

    console.log('haciendo cositas');

    console.log('leyendo el segundo archivo');
    const secondText = await readFile('./file2.txt','utf-8');
    console.log(secondText);   
 }
)()


    


