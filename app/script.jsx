'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import HobbyGenerator from './components/HobbyGenerator';
/* global React ReactDOM */
let element = <div>
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
</div>;
ReactDOM.render(
    element,
    document.getElementById('app')
);
