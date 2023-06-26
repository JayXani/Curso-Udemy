const mediaArray = array => {
    let mediaFinal = array.reduce((acumulador, atual) => {
        return acumulador + atual
    })
    return mediaFinal / array.length
}
console.log(mediaArray([1,2,3,4,5]))