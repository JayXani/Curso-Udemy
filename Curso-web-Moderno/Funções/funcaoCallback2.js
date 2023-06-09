const notas = [2.2, 3.4 ,2.5 ,7.6, 8.9, 9.0]

//Percorrendo os elementos sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
       notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//Utilizando callBack
notasBaixas = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas)


const validadorNotas = (nota) => nota >= 7 //Lembrando que o resultado é implicito
notasBaixas = notas.filter(validadorNotas)
console.log(notasBaixas)