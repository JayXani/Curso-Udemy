function timeNow(){
    const date = new Date()
    return date.toLocaleTimeString('pt-br', {hour12: false})
}
const timer = setInterval(function(){
    console.log(timeNow())
}, 1000)

setTimeout(function(){
    clearInterval(timer)
},5000)