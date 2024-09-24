let array1 = [2,2,1,4,5,6,8,79,13,12,4]
let array2 = [3,4,5,6,66,22,5,87,42,12,9]


function sumEvenNumbers(arr) {
    let soma = 0 
    for (cont = 0; cont < arr.length; cont ++) {
        if (arr[cont] % 2 == 0) {
            soma = soma + arr[cont]
        }
    }
    return console.log(soma)
}

sumEvenNumbers(array1)
sumEvenNumbers(array2)
