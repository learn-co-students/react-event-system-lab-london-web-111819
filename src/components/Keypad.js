// Code Keypad Component Here
import React, {Component} from 'react'

class Keypad extends Component {
    listenForKeyUp = () => {
        console.log('Entering password...')
    }
    render() {
        return(
            <input type="password" onKeyUp={this.listenForKeyUp}></input>
        )
    }
}

export default Keypad