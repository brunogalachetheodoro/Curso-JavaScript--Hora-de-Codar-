class ContaBancaria {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }   

    deposito(conta,valor) {
        if (conta == 'corrente') {
            this.saldoCorrente += valor
            console.log(`Seu saldo atual é de R$${this.saldoCorrente}`)
        } else if (conta == 'poupança'){
            this.saldoPoupanca += valor
            console.log(`Seu saldo atual é de R$${this.saldoPoupanca}`)
        } else {
            console.log("ERRO INESPERADO! VERIFIQUE OS DADOS INSERIDOS")

        }
    }

    saque(conta, valor) {
        if (conta == 'corrente') {
            this.saldoCorrente -= valor 
            console.log(`Seu saldo atual é de R$${this.saldoCorrente}`)
        } else if (conta == 'poupança') {
            this.saldoPoupanca -= valor
            console.log(`Seu saldo atual é de R$${this.saldoPoupanca}`)
        } else {
            console.log("ERRO INESPERADO! VERIFIQUE OS DADOS INSERIDOS")
        }
    }

    transferir(valor) {
        this.saldoPoupanca = this.saldoPoupanca - valor
        this.saldoCorrente = this.saldoCorrente + valor
        console.log(`Você tranferiu R$${valor} da sua conta poupança para corrente!`)
        console.log('Saldo Poupança = R$' + this.saldoPoupanca)
        console.log('Saldo Corente = R$' + this.saldoCorrente)
    }

    jurosDeAniversario () {
        let juros = (this.saldoPoupanca * this.jurosPoupanca) / 100;
        this.saldoPoupanca += juros;
        console.log(`Você teve um rendimento de R$${juros}. Seu saldo com juros aniversário é de R$${this.saldoPoupanca}`)
    }
}

class ContaEspecial extends ContaBancaria {
    constructor (saldoCorrente, saldoPoupanca, jurosPoupanca) {
        super (saldoCorrente, saldoPoupanca, jurosPoupanca*2);
    }
}

let pessoa1 = new ContaBancaria (2255.27, 9556.34, 0.5)

console.log(pessoa1)

pessoa1.transferir(600)
pessoa1.jurosDeAniversario()

let pessoa2 = new ContaEspecial (10000, 50000, 0.5)

console.log(pessoa2)