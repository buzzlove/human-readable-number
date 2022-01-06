
function toReadable(data){
    let string;
    switch(true){
        case(0 <= data && data < 20): string = exception(data); break;
        case(20 <= data && data < 100): string = valueTwoTen(data); break;
        case(100 <= data && data <= 999):string = valueThreeTen(data); break;
    }
    return string;
}
function exception(number){
    return numberException[number];
}
function valueTwoTen(data){   
    let div = (data % 10);
    let string = (div === 0) ? numberTens[data] : (numberTens[data - div] + " " + numberException[div]);
    return string;
}
function valueThreeTen(data){   
    let number = Math.floor(data / 100);
    let twoTen = (data - number * 100);
    let string = numberException[number] + " " + "hundred" + " " + ((twoTen < 20) ? exception(twoTen) : valueTwoTen(twoTen));
    return string;
}

const numberException = {
'0': "null",
'1': "one",
'2': "two",
'3': "three",
'4': "four",
'5': "five",
'6': "six",
'7': "seven",
'8': "eight",
'9': "nine",
'10': "ten",
'11': "eleven",
'12': "twelve",
'13': 'thirteen',
'14': 'fourteen',
'15': 'fifteen',
'16': 'sixteen',
'17': 'seventeen',
'18': 'eighteen',
'19': 'nineteen',
}

const numberTens = {
'10': 'ten',
'20': 'twenty',
'30': 'thirty',
'40': 'forty',
'50': 'fifty',
'60': 'sixty',
'70': 'seventy',
'80': 'eighty',
'90': 'ninety',
}
