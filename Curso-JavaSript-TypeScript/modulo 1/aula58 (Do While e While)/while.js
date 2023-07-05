const random = (min, max) => {
    if(min > max){
        [min, max] = [max,min]
    }
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
let min = 1
let max = 20
let rand = 10

while(rand !== 10){
    rand = random(min,max)
    console.log(rand)
}

do {
    rand = random(min,max)
    console.log(rand)
}while(rand !== 10)