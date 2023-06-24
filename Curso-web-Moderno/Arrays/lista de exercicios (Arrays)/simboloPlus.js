function plus(value){
    let stringPlus = ""
    for(let i = 0; i < value; i++){
        stringPlus += '+'
    }
    return stringPlus
}

console.log(plus(4))