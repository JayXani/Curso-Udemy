function random({ min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//console.log(random({min: 10, max: 20}))
const obj = {min: 10, max: 20}
console.log(random(obj))
console.log(random({min: 955})) //O maximo vai ser undefined, porem dentro da function, ele vai ser setado com 1000
//console.log(random()) Se eu não passar valor algum, da erro
