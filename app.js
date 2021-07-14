const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
   
    let valueInYen = valueInDollar * 106;
   
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
   
    let valuePound = valueInYen * 0.006;
   
    return valuePound;
}



console.log(fromEuroToDollar(3.5))
module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound }


    