const entreValores = (min, max) => {
    const valorEncontrado = Math.random() * (max - min) + min
    return Math.floor(valorEncontrado)
}

let opcao
do {
    opcao = entreValores(-1,10)
    console.log(`Os valores encontrados são: ${opcao}`)
}while (opcao != -1)

console.log('Ate a proxima !')