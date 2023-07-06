// const data = new Date('2019-04-20 20:15:59')
// console.log('Dia' ,data.getDate())
// console.log('Mês' ,data.getMonth())
// console.log('Ano' ,data.getFullYear())
// console.log('Hora' ,data.getHours())
// console.log('Minuto' ,data.getMinutes())
// console.log('Segundo' ,data.getSeconds())
// console.log('Milésimo de segundo' ,data.getMilliseconds())
// console.log('Dia da semana' ,data.getDay())
// console.log('Data String:' ,data.toString())
// console.log('Milésimos de secondos do dia de hoje: ', Date.now())

function formatDate(dateFormated){
    const day = (dateFormated.getDate() <= 9)? '0'.concat(dateFormated.getDate()): dateFormated.getDate()
    const month =(dateFormated.getMonth() <= 9)? '0'.concat(dateFormated.getMonth() + 1): dateFormated.month() + 1
    const year = dateFormated.getFullYear()
    return `${day}/${month}/${year}`
}
const data = new Date()
const dataBrasil = formatDate(data)
console.log(dataBrasil)