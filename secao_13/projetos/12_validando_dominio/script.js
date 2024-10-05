const validandoDominio = /[?www.]\w+\.com.br|.com/;

console.log(validandoDominio.test('www.google.com'))
console.log(validandoDominio.test('www.spfc.com.br'))
console.log(validandoDominio.test('ge.com'))