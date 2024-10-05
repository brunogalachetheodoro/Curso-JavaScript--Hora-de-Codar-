//busca algum dos caracteres dentro do test

const reg1 = /[12345]/;

console.log(reg1.test('temos o número 6'))
console.log(reg1.test('temos o número 5'))
console.log(reg1.test('temos o número 25')) //aqui retorna true (um erro), pois não é o número que estamos buscando

//neste exemplo caso haja algum número entre 0 a 9 retornará o valor true

const reg2 = /[0-9]/

console.log(reg2.test('números 45343546354102231'))
console.log(reg2.test('sem números'))


