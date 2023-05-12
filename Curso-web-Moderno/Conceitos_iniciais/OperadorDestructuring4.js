function random([min = 0, max = 1000]){
    if(min > max){
        [min, max] = [max, min]
    }
    const valor = Math.random() * (max -min) + min
    return Math.floor(valor)
}

console.log(random([50,10]))
console.log(random([70]))
console.log(random([])) //Valor vazio, o destructuring da função assume os valores setados para ele
//console.log(random()) ERRO,pois estou tentando desestruturar algo que é indefinido (undefined)