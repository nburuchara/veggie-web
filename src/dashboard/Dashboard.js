import React, {Component} from 'react'
import fire from './../database/firebase'
import styled from 'styled-components'
// import CodeMirror from '@uiw/react-codemirror';
// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/monokai.css';
import {UnControlled as CodeMirror} from 'react-codemirror2'

<<<<<<< HEAD
var code = 'const a = 0;';
=======
>>>>>>> f3dbe2e41bbffaeede60d9b28c7b0f76706846e5

var code = 'const b = 0;';
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

.parent h2 {
    color: #154360
}

    // - - PAGE DIMENSIONS - - //

.dashEditor {
    text-align: center;
    height: 500px;
    margin-bottom:100px;
    background-color: #154360;
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
            userCode: code,
            studentName: "Eric",
            normansCode: ""
        }
    }

    firebaseFunction = () => {
        fire.firestore().collection("whateverYouWant").doc("wywPart2").set({
            code: this.state.normansCode
        })
    }

    logout = () => {
        fire.auth().signOut();
    }

<<<<<<< HEAD
    push = (text_editor) => {
        /** Get the content of the current editor document. You can pass it an optional argument to specify the string to be used to separate lines (defaults to "\n"). */
        text_editor.getValue();
    }

    pull = () => {
        var text = "this is a test";
        code = text;
        console.log(code)
=======

    push = () => {
        var txt = "Test val mcdonalds"
        this.setState({
            normansCode : txt
        })
    }

    pull = () => {
       console.log(this.state.normansCode)
>>>>>>> f3dbe2e41bbffaeede60d9b28c7b0f76706846e5
    }


    render () {
        
        return(
            <Styles>
                <div className="parent">

                    <button
                    onClick={this.logout}
                    ><b>Logout</b></button>
<<<<<<< HEAD
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
=======
                        <div className="dashEditor">
                            <h3>Text Editor goes here </h3>
                            <CodeMirror
                            value={this.state.normansCode}
                            // options={options}
                            onBeforeChange={(editor, data, value) => {
                                this.setState({value});
                            }}
                            onChange={(editor, data, value) => {
                                this.setState({
                                    normansCode: value
                                })
                            }}
/>
                            <br/>
                            {/* <button>Todo</button>
                            <button
                            onClick={this.pushToDb}
                            >Done</button> */}
                        </div>
>>>>>>> f3dbe2e41bbffaeede60d9b28c7b0f76706846e5
                    <h2> TextFill2</h2>

                    <button
                    onClick={()=> t.setValue("this is a test")}
                    ><b>Pull</b></button>

                    <button
                    onClick={this.push}
                    ><b>Push</b></button>
                </div>
            </Styles>
        )
    }
}