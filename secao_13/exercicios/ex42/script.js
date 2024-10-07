//minha solução

/*
let regexID = /[\d]ID+$/

console.log(regexID.test('BrunoID'))
console.log(regexID.test('555ID'))
*/

//solução aula

const validarID = /\d+ID\b/

console.log(validarID.test('BrunoID'))
console.log(validarID.test('555ID'))
