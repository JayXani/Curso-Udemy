const returnHour = date => {
    if(date && !(date instanceof Date)){
        throw new Error('ERROR 002\nÉ necessário informar um formato de hora correto')
    }
    if(!date){
        date = new Date()
    }
    return date.toLocaleTimeString('pt-BR',{
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
}
try{
    const data = new Date('12-12-2012 12:12:02')
    console.log(returnHour(data))
}catch(e){
    //console.log(e)
}