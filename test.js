const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("One dollar should be correctly converted to yen", function() {
    const yens = fromDollarToYen(3.5);

    // cálculo esperado paso por paso
    const expected = (3.5 / 1.07) * 156.5;

    expect(yens).toBe(expected);
});

test("One yen should be correctly converted to pounds", function() {
    const pounds = fromYenToPound(3.5);

    // cálculo esperado paso por paso
    const expected = (3.5 / 156.5) * 0.87;

    expect(pounds).toBe(expected);
});
