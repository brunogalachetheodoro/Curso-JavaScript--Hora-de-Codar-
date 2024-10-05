// funciona semelhante ao ||(or)

const reg = /\w+: (Matheus|João|Maria)/;

console.log(reg.test('Nome: Matheus'))
console.log(reg.test('Nome: Jonas'))
console.log(reg.test('Nome: João'))