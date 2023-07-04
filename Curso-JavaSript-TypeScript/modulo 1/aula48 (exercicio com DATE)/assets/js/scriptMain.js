const formatedDate = new Date()
const alterDateInDocument = _ => {
    const selectedElement = document.querySelector('.container h1')
    selectedElement.innerHTML = formatDay()
}
const formatDay = _ => {
    let dayOfWeekend = ''
    const day = formatedDate.getDate()
    const year = formatedDate.getFullYear()
    const hour = formatedDate.getHours()
    const minutes = formatedDate.getMinutes()

    switch (formatedDate.getDay()) {
        case 0:
            dayOfWeekend = 'Domingo'
            break
        case 1:
            dayOfWeekend = 'Segunda-feira'
            break
        case 2:
            dayOfWeekend = 'Terça-feira'
            break
        case 3:
            dayOfWeekend = 'Quarta-feira'
            break
        case 4:
            dayOfWeekend = 'Quinta-feira'
            break
        case 5:
            dayOfWeekend = 'Sexta-feira'
            break
        case 6:
            dayOfWeekend = 'Sabado'
    }
    return `${dayOfWeekend}, ${day} de ${getMonthInBR()} de ${year} ${hour}:${minutes}`
}
const getMonthInBR = _ => {
    const month = formatedDate.getMonth()
    switch (month + 1) {
        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
    }
}
alterDateInDocument()