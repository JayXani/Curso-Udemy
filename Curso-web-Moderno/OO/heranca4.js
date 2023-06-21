function meuObjeto(){}
const obj1 = new meuObjeto 
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__)  //São de mesma instância, portanto tem como protótipo o meuObjeto
console.log(meuObjeto.prototype === obj1.__proto__) 

meuObjeto.prototype.nome = 'Anonymus'
meuObjeto.prototype.falar = function() {
    console.log(`Bom dia, meu nome é ${this.nome}`)
}
obj1.falar()
obj2.nome = 'Danilo'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype        //Alterando o protótipo do OBJETO

obj3.nome = 'TESTE'
obj3.falar()
