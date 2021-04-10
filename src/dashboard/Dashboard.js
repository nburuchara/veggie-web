import React, {Component} from 'react'
import fire from './../database/firebase'
import styled from 'styled-components'
// import CodeMirror from '@uiw/react-codemirror';
// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/monokai.css';
import {UnControlled as CodeMirror} from 'react-codemirror2'

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
            normansCode: "this is a",
            ericsCode: ""
        }
    }

    firebasesetvals = () => {
        var txt = "this is a more complicated test"
        fire.firestore().collection("newdata").doc("test text").set({
            code: txt
        })
    }

    logout = () => {
        fire.auth().signOut();
    }

    push = () => {
        // console.log(this.state.normansCode)
        var txt = "test";
        fire.firestore().collection("newdata").doc("test text").set({
            code: this.state.normansCode,
            test: txt
        })
        console.log(this.state.normansCode)
    }

    componentDidMount(){
        
    }

    pull = () => {
        fire.firestore().collection("newdata").doc("test text").get().then(qs => {
            if(qs.exists){
                console.log(qs.data().code)
                this.setState({
                    normansCode : qs.data().test
                })
            }
            else{
                console.log("no data found")
            }
        })
        // var txt = "Test val new"
        // this.setState({
        //     normansCode : txt
        // })
    }

    handlechange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
        console.log(e.target.value)
        
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
                            value={this.state.normansCode}
                            // options={options}
                            onBeforeChange={(editor, data, value) => {
                                this.setState({
                                    value
                                });
                            }}
                            onChange={(editor, data, value) => {
                                console.log("anything")
                                this.setState({
                                    normansCode : value
                                })
                            }}
/>
                            <br/>
                            <input
                            onChange = {this.handlechange}
                            value = {this.state.ericsCode}
                            id = "ericsCode"
                            /> 
                            {/* <button>Todo</button>
                            <button
                            onClick={this.pushToDb}
                            >Done</button> */}
                        </div>
                    <h2> TextFill2</h2>

                    <button
                    onClick={this.pull}
                    ><b>Pull</b></button>

                    <button
                    onClick={this.push}
                    ><b>Push</b></button>
                </div>
            </Styles>
        )
    }
}