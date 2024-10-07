const nomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(nomeUsuario.test('bruno0222'))
console.log(nomeUsuario.test('as'))
console.log(nomeUsuario.test('45666666666666666666666666666666666666666'))



