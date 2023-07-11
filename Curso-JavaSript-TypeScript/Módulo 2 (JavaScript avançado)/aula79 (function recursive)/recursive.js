function recursive(n){
    if(n === 0){
        return console.log(n)
    }
    console.log(n)
    n--
    recursive(n)
}
recursive(10)