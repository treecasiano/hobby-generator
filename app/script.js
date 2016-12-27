'use strict';

let hobbiesButton = document.getElementById('hobbies');

hobbiesButton.addEventListener('click', () => {
    getHobby();
}, false);

function getHobby() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'hobbies');
    xhr.send(null);
    xhr.onreadystatechange = () => {
        const DONE = 4; // readyState 4 means the request is done
        const OK = 200; // status 200 is a successful return
        if (xhr.readyState === DONE) {
            if (xhr.status === OK && xhr.status < 300) {
                let responseObj = JSON.parse(xhr.responseText);
                hobbiesButton.innerText = responseObj.hobbies;
            } else {
                console.log('Error: ' + xhr.status); // An error occurred during the request.
            }
        }
    }
}

