import React, {Component} from 'react'
import fire from './../database/firebase'
import styled from 'styled-components'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

const code = 'const a = 0;';

const Styles = styled.div `

body {
    background-color: #154360;
}

    // - - PARENT DIV - - //

.parent {
    background-color: #154360;
}

.parent button {
    margin-top: 20px;
    border-radius: 8px;
    height: 40px;
    background-color: #F39C12;
    font-family: Karla;
    border: 2px solid #F39C12;
    color: white;
    margin-bottom: 20px;
}

    // - - PAGE DIMENSIONS - - //


.dashEditor {
    text-align: center;
    height: 500px;
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

.textEditor {
    // height: 500px;
}



`


export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    logout = () => {
        fire.auth().signOut();
    }

    render () {
        return(
            <Styles>
                <div className="parent">
                    <button
                    onClick={this.logout}
                    ><b>Logout</b></button>
                        <div className="dashEditor">
                            <h3>Text Editor goes here </h3>
                            <CodeMirror
                            className="textEditor"
                            value={code}
                            options={{
                            theme: 'monokai',
                            keyMap: 'sublime',
                            mode: 'jsx',
                            }}
                            />
                        </div>
                </div>
            </Styles>
        )
    }
}