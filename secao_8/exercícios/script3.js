let array = [2,3,5,8,9,1,4]
let maiorArray = 0

function findMaxNumber() {
    for(let cont =0; cont <= array.length; cont++) {
        if (array[cont] > maiorArray) {
            maiorArray = array[cont]
        }
    }
    console.log(`O maior elemento dentro do array é ${maiorArray}`)
}

findMaxNumber(array)