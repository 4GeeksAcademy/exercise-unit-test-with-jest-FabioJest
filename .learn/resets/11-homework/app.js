let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (a) => {
    return a*oneEuroIs.USD
}

const fromDollarToYen = (a) =>{
    let auxEuro = a/oneEuroIs.USD
    return auxEuro*oneEuroIs.JPY
}

const fromYenToPound = (a) =>{
    let auxEuro = a/oneEuroIs.JPY
    return auxEuro*oneEuroIs.GBP
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound }