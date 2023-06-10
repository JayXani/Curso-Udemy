class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const novaPessoa = new Pessoa("Danilo")
novaPessoa.falar()

//Função factory com arrow

const funcPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p1 = funcPessoa("Danilo")
p1.falar()