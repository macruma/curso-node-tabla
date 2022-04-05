

const argv = require('yargs')
   .option('b',{
      alias: 'base',
      type:'number',
      demandOption:true,
      describe: 'Es la base de la tabla de multiplicar'       
   }) 
   .option('h',{
    alias: 'hasta',
    type:'number',
    default:10,
    demandOption:true,
    describe: 'Hasta que numero puede llegar'       
 })
   .option('l',{
    alias: 'listar',
    type:'boolean',
    default:false,
    describe:'Muestra ta tabla en consola'     
 }) 
 
   .check((argv, option)=>{
     if(isNaN(argv.b)){
       throw 'Labase tiene que ser un numero'
     }
     return true;
   })  
   .argv;

   module.exports=  argv;