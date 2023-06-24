function newArray(array){
   let arrayNew = []
   arrayNew.push(array.shift())
   arrayNew.push(array.pop())
   return arrayNew
}
console.log(newArray([1,2,3]))