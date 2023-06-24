function modifyObject(object, deleted){
    var entries = Object.entries(object).filter(([key,value]) => {
        key != deleted
    })
    var copia = {}
    entries.forEach(([key,value]) => {
        copia[key] = value
    })
    return copia
}
console.log(modifyObject({a:1,b:2}, 'a'))

