function contarDigitosArray(numeros, qtdNumeros) {
    var quantidadesNumeros = [];

    for (var i = 0; i < numeros.length; i++) {
        var numeroString = numeros[i].toString();
        if(numeroString.length == qtdNumeros){
            quantidadesNumeros.push(numeros[i])   
        }
    }
    return quantidadesNumeros
}

// Exemplo de uso
var numeros = [23, 4567, 89, 1000];
var quantidadesDigitos = contarDigitosArray(numeros,2);
console.log("Números:", quantidadesDigitos);
