'use strict';

/* global React ReactDOM*/

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
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'hobbies');
        xhr.send(null);
        xhr.onreadystatechange = () => {
            const DONE = 4; // readyState 4 means the request is done
            const OK = 200; // status 200 is a successful return
            if (xhr.readyState === DONE) {
                if (xhr.status === OK && xhr.status < 300) {
                    // let responseObj = JSON.parse(xhr.responseText);
                    // this.setState({value:responseObj.hobbies});
                } else {
                    console.log('Error: ' + xhr.status); // An error occurred during the request.
                }
            }
        };
    }
    
    render() {
        return (
            <button id="hobbies" type="button" className="generatorButton"  onClick={this.handleClick}>
                {this.state.value}
            </button>
        );
    }
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
