 function createNewPeople(name, lastName, peso, altura){
    return {
        name,
        lastName,
        speak(){
            console.log(`My name is ${this.name + this.lastName}`) //this é referente ao objeto que está chamando
        },
        peso,
        altura,
        get imc(){
            const indice =this.peso/ (this.altura ** 2)
            return indice.toFixed(2)
        },
        set fullName(value){
            value = value.split(' ')
            this.nome = value.shift()
            this.lastName = value.join(' ')
        }
    }
 }
const p1 = createNewPeople('Danilo ','Araújo', 57,1.81)
p1.speak()
console.log(p1.imc)
p1.fullName = 'Danilo de Araújo'
console.log(p1.name)
console.log(p1.lastName)