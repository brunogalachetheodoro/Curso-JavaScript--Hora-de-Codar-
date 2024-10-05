const validarDataNasc = /[0-9]{2}[/|-][0-9]{2}[/|-][0-9]{4}/;

console.log(validarDataNasc.test('12/03/1998'))
console.log(validarDataNasc.test('12-03-1998'))
console.log(validarDataNasc.test('12-03-98'))