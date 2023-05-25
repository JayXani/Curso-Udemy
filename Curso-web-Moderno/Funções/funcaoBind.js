const pessoa = { 
    saudacao : "Bom dia meu lindo",
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar()   //O resultado será undefined, pois a CONSTANT mudou o "this" fazendo com que a referencia seja o escopo global e não
        //o objeto pessoa

const falarPessoa = pessoa.falar.bind(pessoa) //Estou amarrando o this a pessoa, para que a referencia seja só o objeto
falarPessoa()
