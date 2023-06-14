
const conditionFrut = frut => {
    switch(frut){
        case "maça":
            return "Não vendemos esta fruta aqui"
        case "kiwi":
            return "Estamos com escassez de kiwis"
        case "melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "erro"
    }
}

console.log(conditionFrut("maça"))
console.log(conditionFrut("kiwi"))
console.log(conditionFrut("melancia"))
console.log(conditionFrut("teste"))


