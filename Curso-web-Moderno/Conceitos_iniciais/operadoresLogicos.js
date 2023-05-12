
function compra(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const ficarSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv32, ficarSaudavel}
}

console.log(compra(true, false))