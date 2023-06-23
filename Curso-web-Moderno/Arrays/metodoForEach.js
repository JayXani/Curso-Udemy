//tentativa de implementar o metodo forEach
Array.prototype.forEach2 = function(callback){        //Implementando a função no próprio protótipo
    for(let i = 0; i < this.length; i++){            //O this, é referência ao array, pois array é uma instância
        callback(this[i], i, this)                  //this[i] = elemento do array, i = indice, this = o array completo
    }
}
const aprovados = ['Ana','Josias','Marcos']
aprovados.forEach2(nome => console.log(nome))