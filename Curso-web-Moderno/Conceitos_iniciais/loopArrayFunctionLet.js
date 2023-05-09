const array = []
for(let i = 0; i < 10; i++){
    array.push(function(){
        console.log(i)
    })
}
array[2]()
array[8]()