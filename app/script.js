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

class Generator extends React.Component {
    render() {
        return (
            <button id="hobbies" class="hobby-button" type="button" className="generator" onClick={() =>{}}>
                CLICK TO GENERATE A HOBBY
            </button>
        );
    }
}

ReactDOM.render(
    <div>
        <h1 class="page-header">Hobby Generator</h1>
        <p>Not sure what to do with your free time? Don't let your lack of imagination thwart your ability to lead a rich and
        interesting life.</p>

        <p>Let the Hobby Generator suggest one or several of the myriad ways you can spend your fleeting, finite time on this
        terrible, beautiful planet!</p>
        <Generator />
        <br />
        <br />
        <footer class="main-footer">
            <p>&copy; <a href="http://treecasiano.com">Tree Casiano</a> 2015</p>
            <p>View <a href="https://github.com/treecasiano/hobby-generator">this code on GitHub!</a></p>
        </footer>
    </div>,
  document.getElementById('app')
);