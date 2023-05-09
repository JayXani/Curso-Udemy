var numero = 1

{
    var numero = 2
    console.log("Dentro: ", numero) //tirando a "function" tudo que for declarado no bloco o "var" vai ignorar
}
console.log("Fora do escopo:", numero)