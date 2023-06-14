const dayWekend = day => {

    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("Dia útil")
            break;
        case 6:
        case 7:
            console.log("Fim de semana")
            break;
        default:
            console.log("Data invalida")
            break;
    }
}

dayWekend(4)
dayWekend("b")