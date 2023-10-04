//el objeto proccess, es un objeto global con información y metodos para manejar el proceso (proporciona información que tiene lugar en le proceso actual)
//por ejemplo los argumentos de entrada
//console.log(process.argv);

//controlar el proceso y su salida
//process.exit(1);//el argumento 0 significa que todo ha ido bien; el argumento 1 significa que hubo error y queremos que salga de ahí

//podemos controilar eventos del proceso
//process.on('exit',()=>{
    //limpiar los recursos
//});

//current working directory
console.log(process.cwd());

//platform
console.log(process.env.EJEMPLO)

