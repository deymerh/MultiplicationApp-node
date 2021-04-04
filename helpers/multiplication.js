const fs = require('fs');
const colors = require('colors');

const createMultiplicationTable = async (base = 5, listar = false, hasta = 10) => {
  console.clear();
  try {
    let outputFile, consola = '';
    for (i = 1; i <= hasta; i++) {
      outputFile += `${base} * ${i} = ${base * i}\n`;
      consola += `${base} ${colors.green('*')} ${i} ${colors.green('=')} ${colors.magenta(base * i)}\n`;
    };
    fs.writeFileSync(`./output/tabla-${base}.txt`, outputFile);
    if (listar) {
      console.log('=================='.white);
      console.log('  Tabla del: '.white, `${colors.black(base)}`);
      console.log('=================='.white);
      console.log(consola);
    }
    return `tabla-${base}.txt`, outputFile;
  } catch (error) {
    throw new Error('No se realizó el proceso...')
  }
}
module.exports = {
  createMultiplicationTable
}