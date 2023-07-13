function Product(name, price, estoque){
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            writable: true,
            value: name,
            configurable:false
        },
        price: {
            enumerable: true,
            writable: true,
            value: price,
            configurable:false
        }
    })
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: false
    })
}
const p1 = new Product('Copo', 10.90, 5)
console.log(p1)