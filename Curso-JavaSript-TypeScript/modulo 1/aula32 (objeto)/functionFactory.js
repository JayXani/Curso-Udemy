function createPeople(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade,
        falar(){
            return `Olá meu nome é ${this.nome}`
        }
    }
}
const teste = createPeople('Danilo', ' Araújo', 19)
console.log(teste.falar())