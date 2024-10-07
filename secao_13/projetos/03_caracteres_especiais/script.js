//aceita tudo
const pontoRegex = /./

console.log('.');
console.log(pontoRegex.test('5415'));
console.log(pontoRegex.test('asdasd'))
console.log(pontoRegex.test('@#$dashjdbhsgajh522'));
console.log(pontoRegex.test (' '));
console.log(' ');

//aceita qualquer digito (número)

const dRegex = /\d/;
console.log('d');
console.log(dRegex.test('5415'));
console.log(dRegex.test('asdasd'))
console.log(dRegex.test('@#$dashjdbhsgajh522'));
console.log(dRegex.test (' '));
console.log(' ');


// não aceita número

const dRegex2 = /\D/;
console.log('D');
console.log(dRegex2.test('5415'));
console.log(dRegex2.test('asdasd'))
console.log(dRegex2.test('@#$dashjdbhsgajh522'));
console.log(dRegex2.test (' '));
console.log(' ');

// apenas onde há espaços

const sRegex = /\s/;
console.log('s');
console.log(sRegex.test('5415'));
console.log(sRegex.test('asda sd'))
console.log(sRegex.test('@#$dashjdbhsgajh522'));
console.log(sRegex.test (' '));
console.log(' ');

//só aceita alfanuméricos

const wRegex = /\w/;
console.log('s');
console.log(wRegex.test('5415'));
console.log(wRegex.test('asda sd'))
console.log(wRegex.test('@#$dashjdbhsgajh522'));
console.log(wRegex.test (' '));
console.log(' ');



