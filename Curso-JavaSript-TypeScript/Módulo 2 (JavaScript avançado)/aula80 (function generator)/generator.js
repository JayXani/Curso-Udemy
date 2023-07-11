function* generator(){
    yield 'hello1'
    yield 'hello2'
}
const g1 = generator()
console.log(g1.next().value)

function* generator2(){
    yield 1
    yield 2
    yield 3
}
function* generator3(){
    yield* generator2()
    yield 4
    yield 5
    yield 6
}
const g2 = generator3()
for(let value of g2){
    console.log(value)
}
function* generator4(){
    yield function(){
        console.log('Hello word')
    }
}
const g3 = generator4()
const fun = g3.next().value
console.log(fun())