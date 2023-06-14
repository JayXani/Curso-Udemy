const bhaskara = (a,b,c) =>{
    const resultado = []
    const delta = (b ** 2) - (4 * a * c)
    let x1
    let x2
    if(delta < 0){
        return "Delta é negativo"
    }else{
        x1 = ((-b + Math.sqrt(delta)) / (2 * a))
        x2 = ((-b - Math.sqrt(delta)) / (2 * a))
        resultado.push(x1)
        resultado.push(x2)
    }
    return resultado
}

console.log(bhaskara(2,8,-24))
console.log(bhaskara(1,-1, -30))