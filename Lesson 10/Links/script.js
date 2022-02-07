var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="https://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

button = document.getElementsByTagName('button');

button[0].onclick = function () {
    var firstParChanges = firstPar.getElementsByTagName('a');
    for (var i = 0; i < firstParChanges.length; i++){
        firstParChanges[i].classList.add('changes');
    }
}

secondPar.addEventListener('click',function (event){
    if ( event.target.getAttribute('href')){
        alert(event.target.getAttribute('href'));
        event.preventDefault();
    }
  });