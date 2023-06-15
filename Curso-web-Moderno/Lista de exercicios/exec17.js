const newValueOfSalary = (plan, salary) =>{
    switch(plan){
        case 'A':
            console.log(`Seu salário será ${(salary * (0.10 + 1)).toFixed(2)}`)
            break
        case 'B':
            console.log(`Seu salário será ${(salary * (0.15 + 1)).toFixed(2)}`)
            break
        case 'C':
            console.log(`Seu salário será ${(salary * (0.20 + 1)).toFixed(2)}`)
            break
        default:
            console.log('Plano invalido')
    }
}
newValueOfSalary('A', 1500)
newValueOfSalary('B', 1500)
newValueOfSalary('C', 1500)
newValueOfSalary('P', 1500)