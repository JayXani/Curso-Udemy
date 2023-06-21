function aula(nome, idVideo){
    this.nome = nome
    this.idVideo = idVideo
}

//simulando o new
function novo(funcao, ...params){   //params == lista de parametros
    const obj = {}
    obj.__proto__ = funcao.prototype    //mudando a referencia do prototipo do objeto
    funcao.apply(obj, params) //O apply chama a função, passando como paramentro o contexto do "this", ou seja, quem é a referencia
    return obj
}

const obj2 = novo(aula, 'Teste', 1234)
console.log(obj2)