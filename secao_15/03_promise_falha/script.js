let p = Promise.resolve(new Error('não deu certo'));

console.log('blá blá blá')

p.then((value) => console.log(value))
.catch(reason => console.log('falhou: ' + reason));