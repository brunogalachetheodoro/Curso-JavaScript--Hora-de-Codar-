function multiplicarTresNumeros(x,y,z) {
    return x * y * z;
}
console.log(multiplicarTresNumeros(2,3,4))

let mult = multiplicarTresNumeros(5,10,12);
console.log('O valor de mult é ' + mult)

function podeDirigir(idade,cnh) {
    if ((idade >=18) && (cnh==true)) {
        console.log('pode dirigir')
    } else {
        console.log('não pode dirigir!')
    }
}

console.log(podeDirigir(18,true))
console.log(podeDirigir(10,0))
