function tratamento(){
    
    throw 'Erro !! \nNão é possivel colocar em maiúscula um atributo undefined.'
}


function imprimirNomeUpeer(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e){
        tratamento(e);
    }finally{
        console.log('Esta linha será executada de todo modo !')
    }
    
}


const objeto = {nome: 'Roberto'}
imprimirNomeUpeer(objeto)