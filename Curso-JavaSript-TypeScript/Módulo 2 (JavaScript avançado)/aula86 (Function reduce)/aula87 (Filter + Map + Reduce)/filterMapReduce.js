const numbers = [1,232,5,3,25,2,35,5,65,232,1,24,64]
const full = numbers.filter(e => e % 2 === 0).map(e => e * 2).reduce((acumulator, value) => acumulator += value)
console.log(full)
numbers.forEach(element => {
    console.log(element)
})