const arr = [1,3,5,2,4]

const highNumbers = arr.filter((n)=>{
    if(n >= 4){
        return n
    }
})

console.log(highNumbers)

const users = [
    {name: 'Matheus', available: true},
    {name: 'Bruno', available: true},
    {name: 'Jonas', available: false},
    {name: 'Willian', available: true}
]

const availableUsers = users.filter((user)=> user.available)

console.log(availableUsers)