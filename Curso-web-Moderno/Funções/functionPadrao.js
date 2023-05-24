function soma(a = 1, b = 1, c = 1){
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c

    return a+b+c
}

console.log(soma(0,0,0))