String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Meu nome é Danilo'.reverse())