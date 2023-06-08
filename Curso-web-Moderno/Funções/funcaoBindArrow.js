function comparaComThis(param){
    console.log(this === param)
}
comparaComThis(global) 
comparaComThis(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj)   //Nesse caso o "this" é forçado a apontar para o obj
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)