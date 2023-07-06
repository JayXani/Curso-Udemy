const getForm = document.querySelector('.forms')

function getEventBrowser() {
    getForm.addEventListener('submit', event => {
        event.preventDefault()
        const peso = event.target.querySelector('#input-peso')
        const altura = event.target.querySelector('#input-altura')
        const pesoFormated = Number(peso.value)
        const alturaFormated = Number(altura.value)
        let mensageFinal = ''

        if (!pesoFormated || !alturaFormated) {      //peso == number == true, peso == !number == false
            mensageFinal = 'Peso e/ou Altura INVÁLIDOS<br>Verifique se todas as informações foram preenchidas corretamente !'
            return setResult(mensageFinal, false)
        } else {
            mensageFinal = `Seu Imc ${getImc(pesoFormated, alturaFormated)}`
            return setResult(mensageFinal, true)
        }
    })
}
function getImc(pesoKg, alturaMetros) {
    const resultIMC = pesoKg / (alturaMetros ** 2)
    const resultImcReturned = [' abaixo do peso',' peso normal',' sobrepeso',' obesidade grau 1', ' obesidade grau 2', ' obesidade grau 3']

    if (resultIMC >= 39.9) return resultIMC.toFixed(2).concat(resultImcReturned[5]);
    if (resultIMC >= 34.9) return resultIMC.toFixed(2).concat(resultImcReturned[4]);
    if (resultIMC >= 29.9) return resultIMC.toFixed(2).concat(resultImcReturned[3]);
    if (resultIMC >= 24.9) return resultIMC.toFixed(2).concat(resultImcReturned[2]);
    if (resultIMC >= 18.5) return resultIMC.toFixed(2).concat(resultImcReturned[1])
    if (resultIMC < 18.5 ) return resultIMC.toFixed(2).concat(resultImcReturned[0]);
}
function setResult(mensagem, isValid) {
    const result = document.querySelector('#result-oficial')
    result.innerHTML = ''       //deixa o campo hmtl vazio
    const p = document.createElement('p') //Criando uma nova tag
    p.innerHTML = mensagem                //adicionando conteúdo dentro da tag
    if (isValid) {
        p.classList.add('result-congratulations')
    } else {
        p.classList.add('result-error')           //Cria e adiciona uma classe na tag que criei
    }
    result.appendChild(p)    //adiciona na tag responsavel, o paragrafo
}

getEventBrowser()