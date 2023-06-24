const filterArray = (arrays) =>{
    let newArray = []
    arrays.forEach(element => {
        if(typeof element === 'number'){
            newArray.push(element)
        }
    });
    return newArray
}
console.log(filterArray([1,'ds']))