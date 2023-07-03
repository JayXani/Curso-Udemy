const horario = value => {
    if(value > 0 && value <= 11){
        return 'Bom dia'
    }else{
        if(value >= 12 && value <= 17){
            return 'Boa tarde'
        }else{
            if(value >= 18 && value <= 23){
                return 'Boa noite'
            }else{
                return 'Valor invalido'
            }
        }
    }
}
console.log(horario(14))
console.log(horario(4))
console.log(horario(22))
console.log(horario('sei de nada'))