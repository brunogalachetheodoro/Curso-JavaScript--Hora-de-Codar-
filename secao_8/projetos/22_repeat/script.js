let num = 1;
let num2 = 12;
let num3 = 7;
let num4 = 4;
let num5 = 13;

function imprimirNumeros(...args) {
    for(let i=0; i < args.length; i++) {
        console.log(args[i])
    }
}

imprimirNumeros(num, num2, num3)
console.log('pausa')
imprimirNumeros(2,7,9,14,22,13,4)