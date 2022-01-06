function century(year) {
    return (year < 100) ? 1 : (year%100 === 0) ? parseInt(year/100) : parseInt(year/100) + 1;
}

function numberToString(num) {
    return num.toString()
  }

  function stringToBinary(str){
    return parseInt(str, 2);
  }

  function solution(str, ending){
    return (ending == '') ? true :str.slice(-ending.length) === ending;
  }

  function repeatStr(n, s) {
    return s.repeat(n);
  }

function reverse(num){
    return parseInt(num.toString().split('').reverse().join(''));
}