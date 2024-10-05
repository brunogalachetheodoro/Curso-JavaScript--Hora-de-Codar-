const cep = /\d{5}-\d{3}/;

console.log(cep.test('86038-396'))
console.log(cep.test('4513212'))

//----------------------

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test('(43)99875-3979'))