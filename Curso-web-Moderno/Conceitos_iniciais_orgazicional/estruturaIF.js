let notaAluno = objeto => { 
    if(objeto.nota >= 7){
        console.log('Aluno: ' + objeto.name + ' Aprovado')
    }else{
        console.log('Aluno: ' + objeto.name + ' Reprovado')
    }
}

const obj = {
    name: 'Danilo',
    nota: 6.5
}
notaAluno(obj)

