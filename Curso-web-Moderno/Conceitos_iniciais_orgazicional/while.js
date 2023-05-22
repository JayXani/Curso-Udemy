const entreValores = (min, max) => {
    const valorEncontrado = Math.random() * (max - min) + min
    return Math.floor(valorEncontrado)
}

let opcao = 0
while (opcao != -1) {
    opcao = entreValores(-1,10)
    console.log(`Os valores encontrados são: ${opcao}`)
}





