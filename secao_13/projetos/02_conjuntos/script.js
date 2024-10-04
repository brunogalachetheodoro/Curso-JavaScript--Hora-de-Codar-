//aceita tudo
const pontoRegex = /./

console.log(pontoRegex.test('5415'));
console.log(pontoRegex.test('asdasd'))
console.log(pontoRegex.test('@#$dashjdbhsgajh522'));
console.log(pontoRegex.test (' '));

//aceita qualquer digito (número)

const dRegex = /\d/;
console.log(dRegex.test('5415'));
console.log(dRegex.test('asdasd'))
console.log(dRegex.test('@#$dashjdbhsgajh522'));
console.log(dRegex.test (' '));

// não aceita número

const dRegex2 = /\D/;
console.log(dRegex2.test('5415'));
console.log(dRegex2.test('asdasd'))
console.log(dRegex2.test('@#$dashjdbhsgajh522'));
console.log(dRegex2.test (' '));



