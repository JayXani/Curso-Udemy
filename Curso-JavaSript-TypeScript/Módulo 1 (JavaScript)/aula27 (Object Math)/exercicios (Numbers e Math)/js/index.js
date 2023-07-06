const informationNumber = Number(prompt('Informe um número: '))
const getValueOfId = document.getElementById('numero-informado')
const getTextOfElement = document.getElementById('texto')

getValueOfId.innerHTML = informationNumber
getTextOfElement.innerHTML = '' //para apagar o texto padão
getTextOfElement.innerHTML  += `<p>A raiz quadrada do número: ${Math.sqrt(informationNumber)}<br/><br/></p>`
getTextOfElement.innerHTML  += `<p>O número ${informationNumber} é inteiro: ${Number.isInteger(informationNumber)}<br/><br/></p>` 
getTextOfElement.innerHTML  += `<p>É NaN: ${Number.isNaN(informationNumber)}<br/><br/></p>`
getTextOfElement.innerHTML  += `<p>Arredondando para baixo: ${Math.floor(informationNumber)}<br/><br/></p>`
getTextOfElement.innerHTML  += `<p>Arredondando para cima ${Math.ceil(informationNumber)}<br/><br/></p>`
getTextOfElement.innerHTML  += `<p>Número com duas casas decimais: ${informationNumber.toFixed(2)}</p>`