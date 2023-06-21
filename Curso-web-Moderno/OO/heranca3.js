const pai = {
    nome: 'Pedro',
    corCabelo: 'Preto'
}
const filha = Object.create(pai)
filha.nome = 'Ana'
console.log(filha)

const filha2 = Object.create(pai,{ 
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})
filha2.nome = 'Beatriz' //Não irá mudar
console.log(filha2)
console.log(Object.keys(filha2))
console.log(Object.keys(filha))

for(let key in filha2){
    filha2.hasOwnProperty(key)? console.log(`Atributo local: ${key}`) : console.log(`Atributo herdado: ${key}`)
}
