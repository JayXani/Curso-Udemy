console.log(typeof Object)  //function
console.log(typeof new Object) // Return is Object

const clienteTeste = function(){}
console.log(typeof clienteTeste) //Posso omitir os parenteses

class Produto{}
console.log(typeof Produto) //Por debaixo dos panos isso é uma função, por isso o retorno é function
console.log(typeof new Produto()) //Se eu deixar os parenteses não vai afetar o funcionamento