let dobro = function(a){
    return 2 * a
}
console.log(`Função com "function" retorno: ${dobro(12)}`)

dobro = a => 2 * a
console.log(`Função arrow, retorno ${dobro(12)}`)