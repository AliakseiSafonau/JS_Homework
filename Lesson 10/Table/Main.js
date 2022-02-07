var table = document.getElementsByTagName('table')[0];
var doEvent;

table.addEventListener('click', function func(event) {
    var target = event.target;
    if (doEvent) {
        if (document.getElementById('input').value) {
            doEvent.innerHTML = '' + document.getElementById('input').value;
        } else {
            document.getElementById('input').remove();
        }
    }

    if (target.getAttribute('colspan')) {
        var newTr = table.insertRow(0);
        newTr.insertCell(0);
        newTr.insertCell(1);
        newTr.insertCell(2);
        doEvent = null;
    } else {
        doEvent = target;
        if (doEvent.innerHTML) {
            var oldText = doEvent.innerHTML;
            doEvent.innerHTML = '<input type="text" id="input"/>';
            document.getElementById('input').value = oldText;
        } else {
            doEvent.innerHTML = '<input type="text" id="input" />';
        }
        var input = document.getElementById('input');
        input.focus();
    }
})