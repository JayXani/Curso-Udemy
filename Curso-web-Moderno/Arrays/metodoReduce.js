Array.prototype.reduce2 = function (callback, initialValue = 0) {
    let acumulador = 0
    if(initialValue != 0){
        acumulador = initialValue
        for(let i = 0; i < this.length; i++){
            acumulador = callback(acumulador, this[i], i, this)
        }
    }else{
        acumulador = this[0]
        for(let i = 1; i < this.length; i++){
            acumulador = callback(acumulador,this[i],i,this)
        }
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.reduce2(soma,10))