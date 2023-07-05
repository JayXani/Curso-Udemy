const setActionOfBrowser = _ => {
    const element = document.querySelector('.container')
    element.appendChild(getTagByElements())
}

function getTagByElements(){
    const elements = [
        {tag: 'p', text: 'Frase 1'},
        {tag: 'div', text: 'Frase 2'},
        {tag: 'section', text: 'Frase 3'},
        {tag: 'footer', text: 'Frase 4'},
    ]
    const div = document.createElement('div')

    for(let i = 0; i < elements.length; i++){
        const {tag, text} = elements[i]
        const elementCreated = document.createElement(tag)
        elementCreated.innerText = text //innerText == muda o texto dentro da tag, mas não o HTML
        div.appendChild(elementCreated)
    }
    return div
}
setActionOfBrowser()