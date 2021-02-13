'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
/* global React ReactDOM */

class HobbyGenerator extends React.Component {

    constructor(props) {

        super(props);

        this.hobbiesList = [];

        this.state = {
            tempHobbiesList: [],
            currentHobby: ''
        }
    }

    handleClick() {

        let currentHobby = this.state.tempHobbiesList[Math.floor(Math.random() * this.state.tempHobbiesList.length)];
        let index = this.state.tempHobbiesList.indexOf(currentHobby);
        if (index > -1) {
            this.state.tempHobbiesList.splice(index, 1);
            this.setState({currentHobby});
        } else {
            // starts the list over
            let currentHobby = "HOBBY GENERATOR IS EXHAUSTED. CLICK BUTTON TO START OVER.";
            this.state.tempHobbiesList = this.hobbiesList.slice(0);
            this.setState({currentHobby});
        }
    }

    componentDidMount() {

        postRequest('/hobbies')
            .then((response) => {
                const data = JSON.parse(response);
                this.hobbiesList = data.hobbies;
                this.state.tempHobbiesList = data.hobbies.slice(0);
            }, error => {
                console.log('Failed!', error);
            });


        function postRequest(url) {

            return new Promise(function (resolve, reject) {
                let req = new XMLHttpRequest();
                req.open('POST', url);

                req.onload = function () {

                    if (req.status === 200) {
                        resolve(req.response);
                    }
                    else {
                        reject(Error(req.statusText));
                    }
                };

                // Handle network errors
                req.onerror = function () {
                    reject(Error("Network Error"));
                };

                // Make the request
                req.send();
            });
        }
    }

    render() {
        return (
            <div className="hobbyGeneratorContainer">
                <button id="hobbies" type="button" className="generatorButton" onClick={this.handleClick.bind(this)}>
                    Get Hobby
                </button>
                <div id="hobbyText" className="hobbyTextDisplay">
                    {this.state.currentHobby}
                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <h1 className="page-header">Hobby Generator</h1>
        <p>Not sure what to do with your free time? Don't let your lack of imagination thwart your ability to lead a
            rich and
            interesting life.</p>

        <p>Let the Hobby Generator suggest one or several of the myriad ways you can spend your fleeting, finite time on
            this
            terrible, beautiful planet!</p>
        <HobbyGenerator />
        <br />
        <br />
        <footer className="main-footer">
            <p>&copy; <a href="http://treecasiano.com">Tree Casiano</a> 2015</p>
            <p>View <a href="https://github.com/treecasiano/hobby-generator">this code on GitHub!</a></p>
        </footer>
    </div>,
    document.getElementById('app')
);
