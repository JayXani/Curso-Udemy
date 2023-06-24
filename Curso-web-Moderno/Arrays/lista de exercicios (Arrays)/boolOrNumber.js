function boolNumber(value){
    if(typeof value === 'boolean'){
        return !value
    }else{
        if(typeof value === 'number'){
            return value * (-1)
        }else{
            return 'Booleano ou número esperado, mas o parametro passado é do tipo: ' + typeof value
        }
    }
}
console.log(boolNumber(true))
console.log(boolNumber(10))
console.log(boolNumber(-89031))
console.log(boolNumber('Sei de nada'))
