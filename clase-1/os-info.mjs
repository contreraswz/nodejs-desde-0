import { platform, release, cpus, freemem, totalmem } from 'node:os';

console.log('nombre del SO -->')
console.log('<--', platform(),'-->')
console.log('Version del sistema operativo -->')
console.log('<--', release(),'-->')
console.log('Arquitectura -->')
console.log('<--', cpus(),'-->')
console.log('Memoria libre -->')
console.log('<--', freemem()/1024/1024,'-->')
console.log('Memoria total -->')
console.log('<--', totalmem()/1024/1024,'-->')

