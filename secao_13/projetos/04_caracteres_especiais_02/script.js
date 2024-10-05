const dia = /\d\d/

console.log(dia.test('2019') && '2019'.length == 2)
console.log(dia.test('asd'))
console.log(dia.test('05'))
console.log(' ')

const palavraTresLetras = /\w\w\w/;

console.log(palavraTresLetras.test('asd'))
console.log(palavraTresLetras.test('sdhajbdsahb') && 'sdhajbdsahb'.length == 3)
console.log(palavraTresLetras.test('as'))  