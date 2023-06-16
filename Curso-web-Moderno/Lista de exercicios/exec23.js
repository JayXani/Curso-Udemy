function calculaMedia(codigoAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a > b ?1 : -1) //"sort" faz comparação entre valores, a função passada ordena em ordem decrescente
    //para descobrir qual é a maior nota, 1 retorna true, -1 é falso
    
    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`Código do aluno: ${codigoAluno}\nNotas: ${nota1},${nota2},${nota3}\n Media Final: ${mediaFinal}
    \nSituação: ${(mediaFinal <= 5)? 'Reprovado' : 'Aprovado'}`)
}
calculaMedia(12,10,5,3)