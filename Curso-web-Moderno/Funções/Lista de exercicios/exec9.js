function verifyNote(nota){
    let corrigedNote = arredondamento(nota)
    if(corrigedNote >= 40){
        if(corrigedNote >= 100){
            console.log("A nota deve ser menor que 100")
        }else{
            console.log(`Aluno aprovado com nota de ${corrigedNote}`)
        }
    }else{
        console.log(`Aluno Reprovado com nota de ${corrigedNote}`)
    }
}
function arredondamento(nota){
    if(nota % 5 > 2){ //%5 tem que ser maior que 2
        return nota + (5 - (nota % 5))  //quanto mais perto do 5, maior o número
    }else{
        return nota
    }
}

verifyNote(103)
verifyNote(38)
verifyNote(29)
