// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    handleOnFocus = (event) => {
        if (event.onFocus){
            console.log("Good")
        }
    }

    handleOnBlur = (event) => {
        if (event.onBlur) {
            console.log("Hey! Eyes on me!")
        }
    }

    render() {
        return(
            <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} >A button</button>
        )
    }
}