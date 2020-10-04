import React, { Component } from 'react'
import Letter from './Letter'

class Letters extends Component {

    getLetters() {
        const ABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        const availbleLetters = ABC.map(letter => {
            return <span>{letter} </span>
        })
        return availbleLetters
    }

    render() {

        return (
            <div>
                {this.getLetters()}
                <Letter />
            </div>
        )
    }

}

export default Letters;