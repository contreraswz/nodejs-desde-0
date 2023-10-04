
//const sum = require('./sum') //exportación tipo CommonJS module import

//para asegurarse sde que no cambie el nombre de la funcion se hace destructuring
const { sum }  =require('./sum')
console.log(sum(2,2))