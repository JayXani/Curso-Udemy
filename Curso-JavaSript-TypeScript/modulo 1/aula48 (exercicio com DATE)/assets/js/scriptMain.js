const formatedDate = new Date()
const alterDateInDocument = _ => {
    const selectedElement = document.querySelector('.container h1')
    selectedElement.innerHTML = formatDay()
}
const formatDay = _ => {
    let dayOfWeekend = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira', 'Sabado']
    const day = (formatedDate.getDate() <= 9)?'0'.concat(formatedDate.getDate()): formatedDate.getDate()
    const year = formatedDate.getFullYear()
    const hour = formatedDate.getHours()
    const minutes = formatedDate.getMinutes()
    return `${dayOfWeekend[formatedDate.getDay()]}, ${day} de ${getMonthInBR()} de ${year} ${hour}:${minutes}`
}
const getMonthInBR = _ => {
    const month = formatedDate.getMonth()
    const stringsMonths = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dexembro',]
    return stringsMonths[month]
}
alterDateInDocument()