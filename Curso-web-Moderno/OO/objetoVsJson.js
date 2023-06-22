const objeto = {
    a:1,
    b:2,
    c:3,
    soma(){
        return a + b + c
    }
}
//Convertendo objeto em JSON
console.log(JSON.stringify(objeto))     //funções não são convertidas em JSON

//Convertendo JSON em Objeto
console.log(JSON.parse('{"a": 1.4, "b": true, "c": "String", "d": {}, "e": []}'))