let contaBancaria = {
    saldo: 1257,
    deposito: function(valor) {
        this.saldo += valor;
        console.log(`Foi depositado um valor de ${valor}, seu saldo agora é de ${this.saldo}`)
    } ,

    saque: function(valor) {
        this.saldo -= valor;
        console.log(`Foi sacado um valor de ${valor}, seu saldo agora é de ${this.saldo}`)
    }
}

contaBancaria.deposito(200)
contaBancaria.deposito(422)
contaBancaria.saque(1254)
