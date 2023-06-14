function carros(typeCar) {
    switch (typeCar) {
        case 'Hatch':
            return 'Compra efetuada com sucesso !'

        case 'Sedans':
        case 'Motocicletas':
        case 'Caminhonetes':
            return 'Tem certeza que não prefere este modelo ?'
        default:
            return "Não trabalhamos com este tipo de automovel aqui"
    }
}

console.log(carros('Hatch'))
console.log(carros('Sedans'))
console.log(carros('sei nao'))
