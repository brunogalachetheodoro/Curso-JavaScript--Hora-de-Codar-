// ex 04

let arr = [1,2,3,4,5,6,7,8,9]
let semPares = []

for (cont = 0; cont <= arr.length; cont ++) {
   if(arr[cont] % 2 == 1) {
      semPares.push(arr[cont])
   }
}

console.log (semPares)