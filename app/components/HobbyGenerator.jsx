'use strict';
import React, { Component } from 'react';
import ToDoList from './ToDoList';

export default class HobbyGenerator extends React.Component {

    constructor(props) {
        super(props);

        this.hobbiesList = [];

        this.state = {
            tempHobbiesList: [],
            currentHobby: 'Click button below to generate a hobby.',
        }
    }

    handleClick() {

        let currentHobby = this.state.tempHobbiesList[Math.floor(Math.random() * this.state.tempHobbiesList.length)];
        let index = this.state.tempHobbiesList.indexOf(currentHobby);
        if (index > -1) {
            this.state.tempHobbiesList.splice(index, 1);
            this.setState({ currentHobby });
        } else {
            // starts the list over
            let currentHobby = "HOBBY GENERATOR IS EXHAUSTED. CLICK BUTTON TO START OVER.";
            this.state.tempHobbiesList = this.hobbiesList.slice(0);
            this.setState({ currentHobby });
        }
    }


    componentDidMount() {

        postRequest('/hobbies')
            .then((response) => {
                const data = JSON.parse(response);
                this.hobbiesList = data.hobbies;
                let tempHobbiesList = data.hobbies.slice(0);
                this.setState({tempHobbiesList});
            }, error => {
                console.log('Failed!', error);
            });


        function postRequest(url) {

            return new Promise(function (resolve, reject) {
                let req = new XMLHttpRequest();
                req.open('POST', url);

                req.onload = function () {

                    if (req.status == 200) {
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
                <div id="hobbyText" className="hobbyTextDisplay">
                    {this.state.currentHobby}
                </div>
                <br />
                <button id="hobbies" type="button" className="generatorButton" onClick={this.handleClick.bind(this)}>
                   askldfjasdkljflaks
                </button>
                <br />
                <ToDoList hobbies={this.state.currentHobby} />
            </div>
        )
    }
}