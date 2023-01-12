//const { argv } = require('process');
//const { option } = require('yargs');
const { isBooleanObject } = require("util/types");
require ( 'colors' ) ;

const { boolean } = require("yargs");
const { getCrearArchivo } = require("./helpers/multiplicar");
const argv=require('./config/yargs')
////////////////////
console.clear();
console.log(argv);
console.log("base: yargs", argv.base);
console.log("listar:", argv.l);
//const [, ,arg3='base=5']=process.argv
//const [, base=5]=arg3.split('=')

getCrearArchivo(argv.base, argv.l,argv.h)
  .then((variable) => console.log(variable.rainbow, " creado"))
  .catch((err) => console.log(err));
