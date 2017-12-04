var exec = require('child_process').exec;
var child = exec('npm run test', (error, stdout) => {
  stdout.split('\n').forEach(item => {
    if(item.startsWith('# tests') || item.startsWith('# pass') || item.startsWith('# fail')){
      item = `\x1b[37m[ ${item.substring(2)} ]\x1b[0m`
      console.log(item);
    } else if(item.startsWith('#')){
      item = `===== < ${item.substring(2)} > =====`;
      console.log(item);
    } else if (item.startsWith('ok')) {
      item =  `\x1b[32m✓✓✓ PASSED: ${item.substring(3)}\x1b[0m`
      console.log(item);
    } else if (item.startsWith('not ok')) {
      item = `\x1b[44m✗✗✗ FAILED: ${item.substring(7)}, DETAILS:\x1b[0m`
      console.log(item);
    } else if (item.includes('operator')) {
      item = `\x1b[44m * ${item.substring(4)}\x1b[0m`
      console.log(item);
    } else if (item.includes('actual')) {
      item = `\x1b[44m * ${item.substring(4)}\x1b[0m`
      console.log(item);
    } else if (item.includes('expected')) {
      item = `\x1b[44m * ${item.substring(4)}\x1b[0m`
      console.log(item);
    } else if (item.includes('at: ') || item.includes('Error: ')) {
      item = `\x1b[44m * ${item.substring(4)}\x1b[0m`
      console.log(item);
    }
  });
});
