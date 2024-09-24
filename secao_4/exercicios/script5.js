//ex 05

function classificarNumero(a) {
   if (a > 0 && a%2 == 0) {
      return 'positivo e par'
   } else if ( a > 0 && a%2 == 1) {
      return 'positivo e ímpar'
   } else if ( a < 0) {
      return 'Negativo'
   } else {
      return 'neutro'
   }
}


console.log(classificarNumero(7))
console.log(classificarNumero(10))
console.log(classificarNumero(-15))
console.log(classificarNumero(0))