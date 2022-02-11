function examUsersData() {
    (!localStorage.getItem('usersData')) ? rec() : data = JSON.parse(localStorage.getItem('usersData'));

}
function rec() {
    var container = new XMLHttpRequest();

    container.open('GET', 'https://reqres.in/api/users?page=2');
    container.send();
    container.onload = function () {
        var statusType = Math.round(this.status / 100);

        if (statusType === 2) {
            data = JSON.parse(this.response).data;

            localStorage.setItem('usersData', JSON.stringify(data));

        } else {
            var user = document.createElement('div');

            user.classList.add('error');
            user.innerText = 'Error, Something Went Wrong!!!';

            document.getElementsByTagName('body')[0].appendChild(user);

        }
    }

    container.onerror = function () {
        console.error(this.status);
    }
}

function getUserList(event) {

    setTimeout( function () {

        for (var i = 0; i < data.length; i++) {
            var tab = document.createElement('div');

            tab.classList.add('tab');
            tab.innerText = 'User ' + (i + 1);
            document.getElementsByTagName('form')[0].appendChild(tab);
            tab.style.background = 'lime';
            tab.style.color = 'white';
        }

        getUserInform(event);

    },100);
}

function getUserInform (event) {
    var target = event.target;

    if (target.tagName === 'BUTTON') {
        target = document.getElementsByClassName('tab')[0];
        var numberDiv = 0;

    } else {
        var numberDiv = Number(target.textContent[5]) - 1;
    }

    target.style.color = 'black';
    target.style.background = 'white';

    var userInform = data[numberDiv];
    var user = document.createElement('div');

    user.classList.add('information');
    user.id = 'information';

    document.getElementsByTagName('body')[0].appendChild(user);

    var photo = document.createElement('img');
    var firstName = document.createElement('div');
    var lastName = document.createElement('div');

    firstName.classList.add('firstName');
    lastName.classList.add('lastName');

    photo.src = userInform.avatar;

    firstName.innerHTML = 'First Name: ' + userInform.first_name;
    lastName.innerHTML = 'Last Name: ' + userInform.last_name;

    document.getElementsByClassName('information')[0].appendChild(photo);
    document.getElementsByClassName('information')[0].appendChild(firstName);
    document.getElementsByClassName('information')[0].appendChild(lastName);

}

function changeUserInform(event) {
    if (event.target.tagName === 'FORM'){
        return;
    }

    document.getElementById('information').remove();

    var userList = document.getElementsByClassName('tab');

    for ( var  m = 0; m < userList.length; m++){
        userList[m].style.background = 'lime';
        userList[m].style.color = 'white';
    }

    getUserInform (event);
    localStorage.clear();
}

document.getElementsByTagName('button')[0].addEventListener('click', getUserList,{'once' : true});
document.getElementsByTagName('button')[0].addEventListener('click', examUsersData,{'once' : true});
document.getElementsByTagName('form')[0].addEventListener('click',changeUserInform);