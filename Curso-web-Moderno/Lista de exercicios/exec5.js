function formatMoney(valor){
    return `R$ ${valor.toFixed(2).toString().replace(".",",")}` //transforma em string e o replace altera o . pela , e vice-versa
}

console.log(formatMoney(5.444444444))