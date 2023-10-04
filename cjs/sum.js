function sum(a,b){
    return a+b
}

//module.exports = sum //CommonJS Module export

//para obligar a que la funcion se llame igual en donde es requerida se hace:

module.exports={
    sum
}