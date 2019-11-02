const numberInWords = require("./index");
const assert = require('assert');

const numbers = [
    11, 213, 4, 27, 102, 38079, 82102713, 82102713123564
];

const expectedResults = [
    "sebelas",
    "dua ratus tiga belas",
    "empat",
    "dua puluh tujuh",
    "seratus dua",
    "tiga puluh delapan ribu tujuh puluh sembilan",
    "delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas",
    "delapan puluh dua triliun seratus dua miliar tujuh ratus tiga belas juta seratus dua puluh tiga ribu lima ratus enam puluh empat"

];

let actualResult = (e) => {
    console.log(numberInWords(e));
    return numberInWords(e);
};

numbers.forEach((e, index) => {
    assert.strictEqual(
        actualResult(e),
        expectedResults[index]
    )
});