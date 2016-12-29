'use strict';

/* global React ReactDOM*/


function getHobbiesList(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        let req = new XMLHttpRequest();
        req.open('POST', url);

        req.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}


let hobbiesList = [];
let tempHobbiesList = [];

getHobbiesList('/hobbies')
    .then((response) => {
        // console.log('Success!', response);
        let data = JSON.parse(response);
        hobbiesList = data.hobbies;
        tempHobbiesList = hobbiesList.slice(0);
    }, error => {
        console.log('Failed!', error);
    });


class HobbyDisplay extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "CLICK BUTTON TO GENERATE A HOBBY",
        };
    }

    render() {
        return (
            <div id="hobbyText" className="hobbyDisplay">
                {this.state.value}
            </div>
        );
    }
}

class GeneratorButton extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "CLICK ME",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {

        let randomHobby = randomize(tempHobbiesList, hobbiesList);

        this.setState({value:randomHobby});
    }
    
    render() {
        return (
            <button id="hobbies" type="button" className="generatorButton"  onClick={this.handleClick}>
                {this.state.value}
            </button>
        );
    }
}

function randomize() {
    let hobby = tempHobbiesList[Math.floor(Math.random()*tempHobbiesList.length)];
    let index = tempHobbiesList.indexOf(hobby);
    if (index > -1) {
        tempHobbiesList.splice(index, 1);
    } else {
        // starts the list over
        tempHobbiesList = hobbiesList.slice(0);
        return "RESTARTING THE LIST";
    }
    return hobby;
}


ReactDOM.render(
    <div>
        <h1 className="page-header">Hobby Generator</h1>
        <p>Not sure what to do with your free time? Don't let your lack of imagination thwart your ability to lead a rich and
        interesting life.</p>

        <p>Let the Hobby Generator suggest one or several of the myriad ways you can spend your fleeting, finite time on this
        terrible, beautiful planet!</p>
        <HobbyDisplay />
        <GeneratorButton />
        <br />
        <br />
        <footer className="main-footer">
            <p>&copy; <a href="http://treecasiano.com">Tree Casiano</a> 2015</p>
            <p>View <a href="https://github.com/treecasiano/hobby-generator">this code on GitHub!</a></p>
        </footer>
    </div>,
    document.getElementById('app')
);
