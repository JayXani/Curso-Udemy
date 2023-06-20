//1º Forma, notação literal (Não é JSON)
const obj1 = {}
console.log(obj1)

//2º Forma, atráves da função construtora Object
const obj2 = new Object
console.log(obj2)

//3º Forma, atráves da função construtora que criamos
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}
const f1 = new Produto('teste',10, 0.5)
const f2 = new Produto('teste2', 40.9, 0.10)
console.log(f1.nome, f1.getPrecoComDesconto())
console.log(f2.nome, f2.getPrecoComDesconto())

//4º Forma, função factory (fabrica)
function criarNovoObj(nome, salarioBase,faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const funcionario = criarNovoObj('eu',7800,4)
console.log(funcionario.getSalario())

//5º Forma, função create (cria objetos com base em objetos já existentes)
const filha = Object.create(null) //Dentro dos () vai o objeto base
console.log(filha)

//6º Forma, criando o objetos através do JSON (É um formato String, convertido para objeto), usado para Web Server
const fromJson = Object.freeze(JSON.parse('{"info": "Dentro do JSON"}'))  //O freeze congela o objeto, inviabilizando alteração
console.log(fromJson.info)