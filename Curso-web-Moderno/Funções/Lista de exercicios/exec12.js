function setFatorial(numero){
   if(numero == 0){
        return 1
   }else{
        return numero * setFatorial(numero - 1)
   }
}
console.log(setFatorial(4))