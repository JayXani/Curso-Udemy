function convertionArray(object){
    let array
    array = Object.entries(object)  //O "entries" retorna um array de cada atributo
    return array
}
console.log(convertionArray({a:1,b:2}))