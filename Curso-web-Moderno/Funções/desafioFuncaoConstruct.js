function construtora(nome){
    this.nome = nome
    this.falar = () =>{
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new  construtora("Danilo")
p1.falar()