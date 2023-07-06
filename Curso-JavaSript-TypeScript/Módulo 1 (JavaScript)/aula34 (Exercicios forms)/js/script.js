function getEventBrowser(){
    const form = document.querySelector('.forms')
    const resultadoBrowser = document.querySelector('.resultado')
    const arrayOfPeoples = []
    function getElementsOfBrowser(evento){
        evento.preventDefault()
        const nome = form.querySelector('.name')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        arrayOfPeoples.push(
            {
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            })
        resultadoBrowser.innerHTML += `<p>${nome.value } ${sobrenome.value}<br></p>`
    }
    form.addEventListener('submit', getElementsOfBrowser)
}
getEventBrowser()