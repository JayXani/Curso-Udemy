function conceitoNotas(vetorNotas) {
    for (i in vetorNotas) {
        if (vetorNotas[i] >= 0.0 && vetorNotas[i] <= 4.9) {
            console.log(`Nota: ${vetorNotas[i]}\nConceito: D`)
        } else {

            if (vetorNotas[i] >= 5.0 && vetorNotas[i] <= 6.9) {
                console.log(`Nota: ${vetorNotas[i]}\nConceito: C`)
            } else {
                if (vetorNotas[i] >= 7.0 && vetorNotas[i] <= 8.9) {
                    console.log(`Nota: ${vetorNotas[i]}\nConceito: B`)
                } else {
                    if (vetorNotas[i] >= 9.0 && vetorNotas[i] <= 10.0) {
                        console.log(`Nota: ${vetorNotas[i]}\nConceito: A`)
                    }
                }
            }
        }
    }
}
conceitoNotas([1.3,4.5,7.8,9.9,2])