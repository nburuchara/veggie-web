import React, {Component} from 'react'
import fire from './../database/firebase'
import styled from 'styled-components'

const Styles = styled.div `

body {
    background-color: #154360;
}

    // - - PARENT DIV - - //

.parent {
    background-color: #154360;
}

    // - - PAGE DIMENSIONS - - //

.dashCol:after {
    content: "";
    display: table;
    clear: both;
}

.dashEditor {
    float: left;
    width: 50%;
    text-align: center;
}

.dashChat {
    float: left;
    width: 50%;
    text-align: center;
}


// - - TEXT EDITOR - - //

.dashEditor h3 {
    color: white;
    font-family: Karla;
}

// - - CHAT WINDOW - - //

.dashChat h3 {
    color: white;
    font-family: Karla;
}



`


export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render () {
        return(
            <Styles>
                <div className="parent">
                    <div className="dashCol">
                        <div className="dashEditor">
                            <h3>Text Editor goes here </h3>
                        </div>
                        <div className="dashChat">
                            <h3>Chat window goes here</h3>
                        </div>
                    </div>
                </div>
            </Styles>
        )
    }
}