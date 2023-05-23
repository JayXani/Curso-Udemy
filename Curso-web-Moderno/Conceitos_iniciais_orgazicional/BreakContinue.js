const teste = [1,43,56,658,23,36,33]

for(i in teste){
    if(i == 4){
        break
    }
    console.log(i, `${teste[i]}`)
}

for(j in teste){
    if(j == 4){
        continue
    }
    console.log(j,`${teste[i]}`)
}