const saudacao = 'opa' //contexto léxico global, ou seja, esse valor terá em escopo global (EXCETO DENTRO DE FUNÇÕES)

function teste(){
    const saudacao = 'Opa dentro da funcao' //contexto lexico local, ou seja, esse valor só terá dentro da função
    return saudacao
}

const objeto = {
    nome: "Danilo",
    idade: 18,
    peso: 55,
    endereco: { //Objeto dentro de outro objeto
        logradouro: "Rua de teste", //Posso ter variaveis com mesmo nome, porem, dentro de objetos diferentes
        numero: 44
    }
}
console.log(saudacao)
console.log(teste())
console.log(objeto)