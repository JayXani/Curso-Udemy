const getElement = _ => {
    const elementSelected = document.querySelector('.paragrafos')
    const styleBody = getComputedStyle(document.body)
    const backgroundOfBody = styleBody.backgroundColor
    const ps = elementSelected.querySelectorAll('p')
    for(let p of ps){
        p.style.backgroundColor = backgroundOfBody
        p.style.color = 'white'
        p.style.borderRadius = '5px'
    }
}
getElement()
