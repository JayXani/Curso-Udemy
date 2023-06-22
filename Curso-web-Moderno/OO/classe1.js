class Lancamento{
    constructor(nome = 'Generic', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}
class CicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...novosLancamentos){
        novosLancamentos.forEach(lancamento => this.lancamentos.push(lancamento))
    }
    sumario(){
        let valorTotal = 0
        this.lancamentos.forEach(resultado => {
            valorTotal += resultado.valor
        })
        return valorTotal
    }
}
const salario = new Lancamento('Salario', 45000)
const conta = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario,conta)
console.log(contas.sumario())