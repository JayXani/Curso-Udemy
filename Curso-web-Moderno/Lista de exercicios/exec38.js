function numbersImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
        let intermedio = inicio
        inicio = fim
        fim = intermedio
    }
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 == 1) {
            console.log(`Número impar: ${i}`)
        }
    }

}
numbersImpares()