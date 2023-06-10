/*const triangulo = (lado1,lado2,lado3) => {
    const verifyTriangulo = ((lado1 == lado2) && (lado2 == lado3))? "Equilatero" : ((lado1 == lado2) ||
    (lado2 == lado3) || (lado1 == lado3))?"Isóceles" : "Escaleno"
    return verifyTriangulo
}*/

function triangulo(lado1, lado2, lado3){
    if((lado1 == lado2) && (lado2 == lado3)){
        return "Equilátero"
    }else{
        if((lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)){
            return "Escaleno"
        }else{
            return "Isóceles"
        }
    }
}



console.log(triangulo(3,3,3))
console.log(triangulo(2,1,2))
console.log(triangulo(1,2,3))
console.log(triangulo(3,3,1))


