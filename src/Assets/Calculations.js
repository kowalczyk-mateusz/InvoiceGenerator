export const bruttoValue = (vat, netto, brutto)=>{
    const vatValue = vat === 23 ? 1.23 : 1.08;
    const Brutto = parseFloat(brutto !== '' ? brutto : netto * vatValue)
    return Brutto.toFixed(2);
}

export const nettoValue = (vat, brutto, netto) =>{
    const vatValue = vat === 23 ? 1.23 : 1.08;
    const Netto = parseFloat(netto !== '' ? netto : brutto - (brutto - (brutto / vatValue)))
    return Netto.toFixed(2);

}