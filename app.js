


const {crarArchivo}= require('./helpers/multiplicar');
const colors =require('colors');
const argv = require('./config/yargs'); 



console.clear();

console.log(argv);

//const base=4;

crarArchivo(argv.b, argv.l,argv.h)
  .then(nombreArchivo => console.log (nombreArchivo. rainbow,'creado'))
  .catch(err => console.log(err)); 
