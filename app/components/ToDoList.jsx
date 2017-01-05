'use strict';
import React, { Component } from 'react';
import Todo from './ToDo';

export default class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            addedHobbies: []
        };
    }
    add() {
        this.state.addedHobbies.push(this.props.hobbies);
        let addedHobbies = this.state.addedHobbies;
        console.log(addedHobbies);
        this.setState({addedHobbies});
    }
    render() {
        return (
            <div className="hobbyTextDisplay">
                <button type="button" className="generatorButton" onClick={this.add.bind(this)}>
                    Add Hobby
                    </button>
                <Todo favorites={this.state.addedHobbies} />

            </div>
        );
    }
}