/******** Задача № 1 ********/

function filterNumbersArr(numbers) {


    return numbers.forEach(function (number) {
        return number > 0;
    });
}

filterNumbersArr([-1, 0, 2, 34, -2]);

/******** Задачв № 2 ********/

function firstPositiveNumber(numbers) {

    var PositiveNumber = numbers.filter(function (number) {
        return number > 0;
    });
    return PositiveNumber[0];
}

firstPositiveNumber([-1, 0, 2, 34, -2]);

// Вариант 2

function firstPositiveNumber(numbers) {

    return numbers.find(function (number) {
        return number > 0;
    });
}

firstPositiveNumber([-1, 0, 2, 34, -2]);

/******** Задачв № 3 ********/

function isPalindrome(word) {

    return word.toLowerCase() === word.toLowerCase().split("").reverse().join('');

}

console.log(isPalindrome('шалаШ'));
console.log(isPalindrome('привет'));

/******** Задачв № 4 ********/

function areAnagrams(word1,word2) {

    if ( word1.length !== word2.length) return false;

    var massifWord2 = word2.toLowerCase().split("");
    var length = 0;

    for ( var i = 0; i < word1.length; i++){
        if (word1.toLowerCase().includes(massifWord2[i])) {
            length++;
        }
    }
    return length === word1.length;
}

console.log(areAnagrams('кот', 'отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));

/******** Задачв № 5 ********/

function divideArr(massif,interval) {
    var newMassif = [];

    for ( var i = 0; i < Math.ceil(massif.length/interval); i++) {
        newMassif[i] = massif.slice(i*interval,i*interval+interval);
    }

    return newMassif;
}
console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));