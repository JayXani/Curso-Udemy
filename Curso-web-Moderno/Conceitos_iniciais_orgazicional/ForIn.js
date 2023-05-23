const valores = [1,5,4,3,6,2,33]

for(let i in valores){
    console.log(i, valores[i])
}

const objeto = {
    nome: 'Danilo',
    idade: 19,
    peso: 55
}

for(let atributo in objeto){
    console.log(`${atributo}, ${objeto[atributo]}`)
}