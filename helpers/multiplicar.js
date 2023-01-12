const fs = require("fs");
const colores  = require ( 'colors' ) ; 

///////////
const crearArchivo = (base = 5) => {
  console.log("==========================");
  console.log(`    Tabla del: ${base}`);
  console.log("==========================");
  let salida = "";
  for (let i = 1; i <= 12; i++) {
    salida += `${base}X${i}=${i * base}\n`;
  }
  console.log(salida);
  fs.writeFileSync(`tabla-${base}.txt`, salida);
  console.log(`tabla-${base}.txt creado`);
};
module.exports = {
  crearArchivo,
};

const getCrearArchivo = (base = 5,mostrar,hasta=10) => {
  ///////////////
  
  return new Promise((resolve) => {
    let salida = "";
    let consola="";
    for (let i = 1; i <= hasta; i++) {
      consola += `${colores.red(base)}${colores.green('X')}${colores.red(i)}=${colores.yellow( i * base)}\n`;
      salida += `${base}X${i}=${i * base}\n`;
    }
    ////
    if(mostrar==true){
      
    console.log("==========================");
    console.log(`    Tabla del: ${base}`);
    console.log("==========================");
    console.log(consola);}
    //
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    resolve(`tabla-${base}.txt`);
  })
};
module.exports = {
  getCrearArchivo,
};
