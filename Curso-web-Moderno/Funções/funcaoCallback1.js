const fabricantes = ["Mercedes", "BMW", "CHEVROLET"]

function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir) //chama a função para cada elemento do meu array
fabricantes.forEach(function(a){
    console.log(a)
})

fabricantes.forEach((a) => {  
    if(a == "Mercedes"){
        b = a
    }else{
        console.log(a)
    }
})