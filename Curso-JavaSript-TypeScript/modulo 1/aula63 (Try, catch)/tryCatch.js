function soma (x,y){ 
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('ERRO 01, valores informados, estão incorretos')
    }
    return x + y
}
try{
    console.log(soma(1,4))
    console.log(soma(1,'a'))
}catch(error){
    console.log(error)
}