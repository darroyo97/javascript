function tipCalc(amount, serviceLevel) {
    amount = amount
    if (serviceLevel == "bad") {
        tip = amount * 0.20
        // return tip
        total = tip + amount
        return total
    } else if (serviceLevel == "fair") {
        tip = amount * 0.15
        total = tip + amount
        return total
    } else if (serviceLevel == "good") {
        tip = amount * 0.10
        total = tip + amount
        return total
    }
}

console.log(tipCalc(87.34, "good"))