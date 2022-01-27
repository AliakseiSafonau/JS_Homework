/******** Задача № 1 ********/

function filterNumbersArr(numbers) {


    return numbers.filter(function (number) {
        return number > 0;
    });
}

filterNumbersArr([-1, 0, 2, 34, -2]);

/******** Задача № 2 ********/

function firstPositiveNumber(numbers) {

    var positiveNumber = numbers.filter(function (number) {
        return number > 0;
    });
    return positiveNumber[0];
}

firstPositiveNumber([-1, 0, 2, 34, -2]);

// Вариант 2

function firstPositiveNumber(numbers) {

    return numbers.find(function (number) {
        return number > 0;
    });
}

firstPositiveNumber([-1, 0, 2, 34, -2]);

/******** Задача № 3 ********/

function isPalindrome(word) {

    return word.toLowerCase() === word.toLowerCase().split("").reverse().join('');

}

console.log(isPalindrome('шалаШ'));
console.log(isPalindrome('привет'));

/******** Задача № 4 ********/

function areAnagrams(word1,word2) {
    var length = 0;

    if ( word1.length !== word2.length) return false;

    for ( var i = 0; i < word1.length; i++){
        if (word1.toLowerCase().indexOf(word2.slice(i,i+1)) > -1) {
            length++;
        }
    }
    return length === word1.length;
}

console.log(areAnagrams('кот', 'отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));

/******** Задача № 5 ********/

function divideArr(arr,span) {
    var newArr = [];

    for ( var i = 0; i < Math.ceil(arr.length/span); i++) {
        newArr[i] = arr.slice(i*span,i*span+span);
    }

    return newArr;
}
console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));