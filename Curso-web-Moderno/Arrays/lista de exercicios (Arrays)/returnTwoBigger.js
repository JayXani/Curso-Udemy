function segundoMaiorNumero(array) {
    // Remove duplicatas e ordena o array em ordem decrescente
    var numerosOrdenados = Array.from(new Set(array)).sort(function(a, b) {
      return b - a;
    });
  
    // Verifica se há pelo menos dois números no array
    if (numerosOrdenados.length < 2) {
      return "Não há segundo maior número.";
    }
  
    // Retorna o segundo maior número
    return numerosOrdenados[1];
  }
  
  // Exemplo de uso
  var numeros = [10, 5, 8, 2, 9, 3, 5, 8];
  var segundoMaior = segundoMaiorNumero(numeros);
  console.log("O segundo maior número é:", segundoMaior);
  