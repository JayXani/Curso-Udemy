function area(lado, altura){
    const result = lado * altura
    if(result > 20){
        console.log("Resultado maior que 20")
    }else{
        return result
    }
}

console.log(area(2,4))
console.log(area())
console.log(area(1,3,4))
console.log(area(5,5))