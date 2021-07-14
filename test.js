test("One euro should be 1.206 dollars", function () {
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;

    // this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})





test("One yen should be 106 dollars", function () {

    const { fromDollarToYen } = require('./app.js')


    const dollars = fromDollarToYen(1)


    const expected = 1 * 106;


    expect(fromDollarToYen(1)).toBe(106);
})







test("One Yen should be 0.006 pound", function () {

    const { fromYenToPound  } = require('./app.js')


    const dollars = fromYenToPound (1)


    const expected = 1 * 0.006;


    expect(dollars).toBe(expected)
})