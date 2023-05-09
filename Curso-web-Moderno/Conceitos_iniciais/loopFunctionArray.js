const  array = []
for(var i = 0; i < 10; i++){
    array.push(function(){
        console.log("Teste: ", i)
    })
}
array[2]() //() identifica função
array[8]() //O resultado das duas chamadas será 10, pois o "var" não respeita função e atualiza o valor dela a toda hora