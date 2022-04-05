


const fs = require('fs');
const colors =require('colors');

const crarArchivo = async (base = 5, listar = false, hasta = 10 )=>{

    try {   
    
        let salida ='';
        let consola='';
    
    for ( let i = 1; i <= hasta; i++) {
        salida +=`${base} x ${i} =  ${base*i}\n`;
        consola +=`${base} ${('x'.green)} ${i} ${('=').red}  ${base*i}\n`;
    }

    if (listar) {
        console.log('============'.green);
        console.log( `tabla del ${colors.blue(base)}`.red);
        console.log('============'.green); 
        console.log(consola);           
    }
    
    
    
    fs.writeFileSync(`./salida/Tabla-${base}.txt`,salida);
       
       return (`Tabla- ${base}.tx creado`);
        
    } catch (err) {
        throw err        
    }

  

}

module.exports={
    crarArchivo
}