const binary = document.querySelector("#binary"),
    octal = document.querySelector("#octal"),
    decimal = document.querySelector("#decimal"),
    hexadecimal = document.querySelector("#hexadecimal"),
    hexadecimalNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"],
    decimalNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
    binaryNumbers = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"],
    binaryOctal = ["000", "001", "010", "011", "100", "101", "110", "111"];

binary.addEventListener('input', () => {
    binary.value = binary.value.replace(/[abcdefghijklmnopqrstuvwxyzç23456789 ¹²³£¢¬.;,/:?°ºª!@#$%+=-_*{}()¨&"'´~<\n]/g, '');
    binaryConvert();
});

octal.addEventListener('input', () => {
    octal.value = octal.value.replace(/[abcdefghijklmnopqrstuvwxyzç89 ¹²³£¢¬.;,/:?°ºª!@#$%+=-_*{}()¨&"'´~<\n]/g, '');
    octalConvert();
});

decimal.addEventListener('input', () => {
    decimal.value = decimal.value.replace(/[abcdefghijklmnopqrstuvwxyzç ¹²³£¢¬.;,/:?°ºª!@#$%+=-_*{}()¨&"'´~<\n]/g, '');
    decimalConvert();
});

hexadecimal.addEventListener('input', () => {
    hexadecimal.value = hexadecimal.value.replace(/[ghijklmnopqrstuvwxyzç ¹²³£¢¬.;,/:?°ºª!@#$%+=-_*{}()¨&"'´~<\n]/g, '');
    hexadecimalConvert();
});

function binaryConvert() {
    let number = binary.value;

    //octal

    let numberOctal = number,
        octalValue = '';

    while (numberOctal.length % 3 != 0) {
        numberOctal = numberOctal.split("").reverse().join('');
        numberOctal += '0';
        numberOctal = numberOctal.split("").reverse().join('');
    }

    let groups2 = [],
        e2 = 0;

    for (let index = 0; index < numberOctal.length / 4; index++) {
        for (let index2 = 0; index2 < 3; index2++) {
            e2++
        }

        groups2.push(numberOctal.substring(e2 - 3, e2))
    }


    groups2.forEach(g2 => {
        octalValue += (g2[0] * 4) + (g2[1] * 2) + (g2[2] * 1)
    });

    octal.value = octalValue


    // Decimal
    let decimalValue = 0;

    number.split('').reverse().forEach((character, index) => {
        decimalValue += character * Math.pow(2, index);
    });

    decimal.value = decimalValue;

    // Hexadecimal

    let numberHex = number

    while (numberHex.length % 4 != 0) {
        numberHex = numberHex.split("").reverse().join('');
        numberHex += '0';
        numberHex = numberHex.split("").reverse().join('');
    }

    let groups = [],
        e = 0,
        hexadecimalValue = "";

    for (let index = 0; index < numberHex.length / 4; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            e++
        }

        groups.push(numberHex.substring(e - 4, e))
    }

    groups.forEach(g => {
        hexadecimalValue += hexadecimalNumbers[binaryNumbers.indexOf(g)];
    });

    hexadecimal.value = hexadecimalValue;
}

function octalConvert() {
    let number = octal.value,
        resBinary = "",
        resDecimal = 0,
        resHexadecimal = '';

    //binary
    number.split("").forEach(e => {
        resBinary += binaryOctal[e];
    });

    binary.value = resBinary;

    //decimal
    number.split("").reverse().forEach((e, index) => {
        resDecimal += e * Math.pow(8, index);
    });

    decimal.value = resDecimal;

    // hexadecimal

    let quot = 1,
        sobra = [],
        n = parseInt(resDecimal);

    while (quot != 0) {
        quot = parseInt(n / 16);
        sobra.push(parseInt(n % 16))
        n = quot;
    }

    sobra.reverse().forEach(s => {
        resHexadecimal += hexadecimalNumbers[s];
    });

    hexadecimal.value = resHexadecimal
}

function decimalConvert() {
    let number = decimal.value || 0;

    // binary

    let quot = 1,
        sobra = [],
        n = parseInt(number),
        resBinary = "";

    while (quot != 0) {
        quot = parseInt(n / 2);
        sobra.push(parseInt(n % 2))
        n = quot;
    }

    sobra.reverse().forEach(s => {
        resBinary += s;
    });

    binary.value = resBinary


    // octal

    while (resBinary.length % 3 != 0) {
        resBinary = resBinary.split("").reverse().join('');
        resBinary += '0';
        resBinary = resBinary.split("").reverse().join('');
    }

    let groups = [],
        e = 0,
        octalValue = "";

    for (let index = 0; index < resBinary.length / 3; index++) {
        for (let index2 = 0; index2 < 3; index2++) {
            e++
        }

        groups.push(resBinary.substring(e - 3, e))
    }

    groups.forEach(g => {
        octalValue += binaryOctal.indexOf(g);
    });

    octal.value = octalValue

    // hexadecimal
    let quot2 = 1,
        sobra2 = [],
        n2 = parseInt(number),
        resHexadecimal = "";

    while (quot2 != 0) {
        quot2 = parseInt(n2 / 16);
        sobra2.push(parseInt(n2 % 16))
        n2 = quot2;
    }

    sobra2.reverse().forEach(s => {
        resHexadecimal += hexadecimalNumbers[s];
    });

    hexadecimal.value = resHexadecimal
}

function hexadecimalConvert() {
    let number = hexadecimal.value.toUpperCase(),
        resBinary = "",
        resDecimal = 0;

    // Decimal 
    number.split("").reverse().forEach((e, index) => {
        resDecimal += decimalNumbers[hexadecimalNumbers.indexOf(e)] * Math.pow(16, index)
        console.log(decimalNumbers[hexadecimalNumbers.indexOf(e)], Math.pow(16, index))
    })

    decimal.value = resDecimal

    //binary 
    let quot = 1,
        sobra = [],
        n = parseInt(resDecimal);

    while (quot != 0) {
        quot = parseInt(n / 2);
        sobra.push(parseInt(n % 2))
        n = quot;
    }

    sobra.reverse().forEach(s => {
        resBinary += s;
    });

    binary.value = resBinary

    // octal

    while (resBinary.length % 3 != 0) {
        resBinary = resBinary.split("").reverse().join('');
        resBinary += '0';
        resBinary = resBinary.split("").reverse().join('');
    }

    let groups = [],
        e = 0,
        octalValue = "";

    for (let index = 0; index < resBinary.length / 3; index++) {
        for (let index2 = 0; index2 < 3; index2++) {
            e++
        }

        groups.push(resBinary.substring(e - 3, e))
    }

    groups.forEach(g => {
        octalValue += binaryOctal.indexOf(g);
    });

    octal.value = octalValue
}