function time() {
    let someSeconds = 0
    let timer
    const eventP = document.querySelector('.timer')

    document.addEventListener('click', event => {
        const getElement = event.target
        if (getElement.classList.contains('start')) {
            clearInterval(timer)
            startTimer()
        }
        if (getElement.classList.contains('stop')) {
            clearInterval(timer)
            eventP.classList.add('clickedStop')
        }
        if (getElement.classList.contains('reset')) {
            clearInterval(timer)
            someSeconds = 0
            eventP.classList.remove('clickedStop')
            eventP.innerHTML = '00:00:00'
        }
    })
    function getFormatTime(seconds) {       //Formata o tempo
        const date = new Date(seconds * 1000)
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
    function startTimer() {
        timer = setInterval(function () {
            someSeconds++
            eventP.innerHTML = getFormatTime(someSeconds)
            eventP.classList.remove('clickedStop')

        }, 1000)
    }
}
time()
