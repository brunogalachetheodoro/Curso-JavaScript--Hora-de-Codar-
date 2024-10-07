const enderecoIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(enderecoIP.test("127.0.0.1"))
console.log(enderecoIP.test("127.50.120.12"))

