const a = 1
const b = 2
const c = 3

const obj1 = {a,b,c}
console.log(obj1)

const notaAluno = 'nota'
const valorNota = 7.8
const obj2 = {[notaAluno]: valorNota}
console.log(obj2)

const obj3 = {}
obj3[notaAluno] = valorNota
console.log(obj3)

const obj4 = {
    funcao1 : function(){
        //Método antigo
    },
    funcao2(){
        //Método atual
    }
}
console.log(obj4)