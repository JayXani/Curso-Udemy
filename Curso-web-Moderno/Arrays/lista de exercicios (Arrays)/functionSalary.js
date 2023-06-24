function verifySalary (hoursForWork, moneyForHours){
    return (hoursForWork * moneyForHours).toFixed(2)
}
console.log(`Sálario igual é: ${verifySalary(150,40.5)}`)