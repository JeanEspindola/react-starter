import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

const url = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Spider&apikey=f70d9eaceac3d19f806f53e46f0a25ff';

export class App extends React.Component {
/*
    loadData() {
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log('parsed json', json.data.results)
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            })
    }

    componentDidMount() {
        this.loadData();
    }*/

    render() {
        return (
            <div>
                <h1>A Simple React Component Example</h1>
            </div>
        );
    }
}