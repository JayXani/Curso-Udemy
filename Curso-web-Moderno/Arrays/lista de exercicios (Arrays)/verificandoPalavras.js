function comparaStrings(string){
    let resultado = []
    for(let i =0; i < string.length; i++){
        switch(string[i]){
            case 'a':       //crtl + ; = comenta
                case 'A':
            case 'e':
                case 'E':
            case 'i':
                case 'I':
            case 'o':
                case 'O':
            case 'u':
                case 'U':
                break;
            default:
                resultado.push(string[i])
                break;
        }
    }
    return resultado
}
console.log(comparaStrings('danilo'))