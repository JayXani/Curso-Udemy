console.log(Math.ceil(6.1))

const Obj = {}
Obj.nome = "teste"
//Obj['nome'] = 'teste2' //Segundo modo de acessar um atributo
console.log(Obj.nome)

function Objeto2(nome){
    this.nome = nome
    this.exec = function(){
        console.log("função dentro de função")
    }
}
const Objeto3 = new Objeto2('teste')
console.log(Objeto3.nome)
Objeto3.exec()