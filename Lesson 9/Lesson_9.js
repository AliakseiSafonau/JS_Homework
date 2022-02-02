// Задача 1

function arr (names) {
    return names.map(function (name) {
        return {'name' : name};
    });
}

console.log(arr(['Vasya','Kolya','Petya','Misha']));

// Задача 2

function arr (numbers) {
    var time = '';

    numbers.forEach(function (number) {
        time = time + ': ' + number;
    });

    return 'Текущее время' + time + '.';
}

console.log(arr(['00','13','24']));

// Задача 3

function arr (str) {
    var count = 0;
    var exception = 'аоуыэёеяию';
    for ( var i = 0; i < str.length; i++) {
        for ( var j = 0; j < exception.length; j++) {
            if (exception.substr(j,1) === str.toLowerCase().substr(i,1)) {
                count++;
            }
        }
    }
    return 'В строке ' + count + ' гласных букв.';
}

console.log(arr('Привет, студент!'));

// Задача 4

function countSentencesLetters (str) {
    var newArr = [];
    var count = 0;

    arr = str.split(/[.]+\s|!+\s|[?]+\s|[.!?]/);

    for ( var i = 0; i < arr.length; i++ ) {

        if ( arr[i] !== '') {
            newArr = arr[i].split(/,|\s/).
            map(function (name){
                if (name !== '') {
                    return name.length;
                }
            });

            for ( var j = 0; j < newArr.length; j++){
                if (newArr[j]) {
                    count = count + newArr[j];
                }
            }

            console.log(arr[i] +' : Letters quantity is: ' + count);
            count = 0;
        }
    }
}

(countSentencesLetters('Привет, студент! Студент... Как дела, студент?'));

// Задача 5

function maxWordRepeat (str) {

    var stringArr = [];
    var numberArr = [];
    var count = 1;
    var endCount = 0;
    var number = 0;
    var keyNumber = 0;

    arr = str.toLowerCase().split(/[.]+\s|!+\s|[?]+\s|,+\s|[.!?]|\s/);

    for ( var i = 0; i < arr.length; i++){
        if (arr[i] === '') {
            arr[i] = null;
        }
    }

    for ( var j = 0; j < arr.length; j++){
        if (arr[j]){
            for ( var k = j+1; k < arr.length; k++) {
                if (arr[j] === arr[k]) {
                    arr[k] = null;
                    count++;
                }
            }
            stringArr[number] = arr[j];
            numberArr[number++] = count;
            count = 1;
        }
        for ( var t = 0; t < numberArr.length; t++){
            if ( endCount < numberArr[t] ) {
                endCount = numberArr[t];
                keyNumber = t;
            }
        }
    }
    console.log('Максимальное число повторений у слова "' + stringArr[keyNumber] +'" - '+ numberArr[keyNumber]);
}

(maxWordRepeat('Привет, студент! Студент... Как дела, студент?'));