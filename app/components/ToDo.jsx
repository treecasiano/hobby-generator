'use strict';
import React, {Component} from 'react';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: props.favorites
        }
    }

    render() {
        return (
            <ul>{this.state.listItems.map((hobby, index) =>
                <li key={index}>{hobby}</li>
            )}</ul>
        );
    }
}