function rand(max = 3000, min = 1000){
    const randomic = Math.random() * (max - min) + min
    return Math.floor(randomic)
}
function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if(callback) callback() //Se a função existir, execute-a
    }, rand())
}
function f2(){
    setTimeout(function(){
        console.log('f2')
    }, rand())
}
function f3 (){
    setTimeout(() => {
        console.log('f3')
    }, rand());
}

f1(function(){
    f2()    //f2 nunca será executada antes de f1 terminar sua execução
})
f3()
console.log('sei nao')
