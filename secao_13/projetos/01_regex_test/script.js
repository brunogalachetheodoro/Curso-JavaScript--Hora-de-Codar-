// primeira forma 
const reg1 = new RegExp('bola');

console.log(reg1.test('hbsahbshbolasajkhsahdkjh'))
console.log(reg1.test('tem bola?'))
console.log(reg1.test('não'))

//outra forma

let text = 'tem queijo no mercado' // também pode ser feito com uma váriavel

const reg2 = /queijo/
console.log(reg2.test('hbsahbshboqueijojkhsahdkjh'))
console.log(reg2.test('Não tem!'))
console.log(reg2.test(text))

//pode ser feito dentro do próprio console.log

console.log(/quadro/.test('há um quadro na parede!'))
