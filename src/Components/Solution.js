import React, { Component } from 'react'
import Letter from "./Letter"


class Solution extends Component {
    render() {
        const  representLetters = ['_', ' _', ' _', ' _']
        const showLetters= representLetters.map(r => {return <span>{r}</span>})
        return (
            <div>
                {showLetters}
            </div>
        )
    }
}
export default Solution; 