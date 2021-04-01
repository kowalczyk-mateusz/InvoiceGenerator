
export const nettoSum = (prices) =>{
    let sumValue = 0
    let sumVat = 0;
    let id = 0;
    for(let x of prices){
        if(x.priceNetto !== ''){
            let numberNetto = parseInt(x.priceNetto)
            let sum = 0;
            sum += numberNetto
            sumValue += sum
        } else {
            let vat = 1.23
            let numberVat = parseInt(x.vat)
            numberVat === 23 ? vat=1.23 : vat=1.08
            let numberBrutto = parseInt(x.priceBrutto)
            let nettoValue = numberBrutto - (numberBrutto -(numberBrutto / vat))
            let sum = 0
            sum += nettoValue
            sumValue += sum;
            sumVat += vat
            id++;
        }
    }
    const vat = sumVat / id
    const finalValue = sumValue * vat
    return finalValue.toFixed(2)
}
export const bruttoSum = (prices) => {
    let sumValue = 0
    let sumVat = 0;
    let id = 0;
    for(let x of prices){
        if(x.priceBrutto !== ''){
            let numberBrutto = parseInt(x.priceBrutto)
            let sum = 0;
            sum += numberBrutto
            sumValue += sum
        } else {
            let numberValue = parseInt(x.priceNetto)
            let sum = 0
            sum += numberValue
            sumValue += sum;
            let vat = 1.23
            let numberVat = parseInt(x.vat)
            numberVat === 23 ? vat=1.23 : vat=1.08
            sumVat += vat
            id++;
        }
    }
    const vat = sumVat / id
    const finalValue = sumValue * vat
    return finalValue.toFixed(2)
}

