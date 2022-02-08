var body = document.getElementsByTagName('body')[0];
var button = document.getElementsByTagName('button')[0];
var input = document.getElementsByTagName('input');

button.disabled = true;

for (var y = 0; y < input.length; y++) {
    input[y].addEventListener('keyup', function (event) {
        (input[0].value.length) && (input[1].value.length) ? button.disabled = false : button.disabled = true;
    })
}

body.addEventListener('click',function (event) {
    var target = event.target;

    if (target.tagName === 'BUTTON') {
        var numberX = Number(input[0].value);
        var numberY = Number(input[1].value);

        if (numberX && numberY && numberX > 0 && numberX < 11 && numberY > 0 && numberY < 11) {
            if (document.getElementsByTagName('table')[0] !== undefined) {
                var elem = document.getElementById('table');
                elem.remove();
            }

            var table = document.createElement('table');

            for (var i = 0; i < numberY; i++) {
                var tr = document.createElement('tr');
                table.appendChild(tr);

                for (var j = 0; j < numberX; j++) {
                    var td = document.createElement('td');
                    tr.appendChild(td);

                    if (((i + 2) % 2 !== 0 && (j + 2) % 2 === 0) || ((i + 2) % 2 === 0 && (j + 2) % 2 !== 0)) {
                        td.setAttribute('bgcolor', 'black');
                    }
                }
            }

            document.getElementsByTagName('body')[0].appendChild(table);
            table.setAttribute('id', 'table');

            input[0].value = '';
            input[0].removeAttribute('value');
            input[1].value = '';
            input[1].removeAttribute('value');
            button.disabled = true;

        } else {
            if (Boolean(numberX) === false || numberX < 1 || numberX > 10) {
                alert ('Ошибка, введите корретное значение в поле X: целые числа от 1 до 10');

                input[0].value = '';
                input[0].removeAttribute('value');
                button.disabled = true;
            }

            if (Boolean(numberY) === false || numberY < 1 || numberY > 10) {
                alert ('Ошибка, введите корретное значение в поле Y: целые числа от 1 до 10');

                input[1].value = '';
                input[1].removeAttribute('value');
                button.disabled = true;
            }
        }
    }

    if (target.tagName === 'TD') {
        var arrTD = document.getElementsByTagName('td');

        for ( var x = 0; x < arrTD.length; x++) {
            (arrTD[x].getAttribute('bgcolor')) ? arrTD[x].removeAttribute('bgcolor') :
                arrTD[x].setAttribute('bgcolor','black' );
        }
    }
})