var MaiorEMenor = require('./src/MaiorEMenor');
var test = MaiorEMenor();


test.encontra([7,6,5,4]);

console.log(test.getMaior() === 7);
console.log(test.getMenor() === 4);