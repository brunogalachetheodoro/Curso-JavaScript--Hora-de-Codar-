let p = Promise.resolve(3 + 5);

console.log('blá blá blá')
console.log(p)
p.then((value) => {console.log(`O valor é ${value}`)})
p.then((value) => {return value + 5})
.then((value) => {console.log(value)})