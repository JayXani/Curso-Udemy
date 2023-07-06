const obj = {
    //nome: 'Danilo',
    sobrenome: 'Araújo',
    idade: 18,
    endereco: {
        logradouro: 'Rua',
        rua: 'Desembargador',
        numero: 43
    }
}
const {nome:n1 = 'Atributo não existe', sobrenome:n2,endereco:{rua, numero}} = obj
console.log(rua, numero)