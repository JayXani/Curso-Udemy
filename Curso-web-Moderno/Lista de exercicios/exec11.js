function verifyAnual(ano){
    if(ano <= 0){
        return false
    }else{
        if(ano % 100 == 0){
            return false
        }else{
            if(ano % 400 == 0){
                return true
            }else{
                if(ano % 4 == 0){
                    return true
                }
            }
        }
    }
}
console.log(verifyAnual(4))
console.log(verifyAnual(100))
console.log(verifyAnual(400))
console.log(verifyAnual(8))
