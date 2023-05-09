{
    {
        {
            {
                var sera = "teste" //variavel declarada dentro de um bloco, mas fora do escopo
            }
        }
    }
}
console.log(sera) //variavel global

function teste(){
    var sea = 123
    console.log(sea)
}
console.log(sea) //ERRO, pois a variavel foi declarada em escopo
