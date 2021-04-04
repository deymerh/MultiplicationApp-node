const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    desc: 'Es la base de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    desc: 'Define si muestra ó no la tabla de multiplicar'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    desc: 'Define el numero limite de la multiplicación'
  })
  .check((argv, options) => {
    if (isNaN(argv.b || argv.h)) {
      throw 'Debe ser un número';
    } else {
      return true;
    }
  })
  .argv;

module.exports = argv;