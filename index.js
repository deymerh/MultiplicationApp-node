const { createMultiplicationTable } = require('./helpers/multiplication');
const argv = require('./config/yargs');
createMultiplicationTable(argv.b, argv.l, argv.h)
  .then(() => console.log())
  .catch(() => console.log())

