arr1 = [5,7,2,3,4,1]

let somar = 0
function calculateAverage(arr) {
    for(cont = 0; cont < arr.length; cont++) {
        somar = somar + arr[cont]
    }
    return somar / arr.length
}

console.log (calculateAverage(arr1))