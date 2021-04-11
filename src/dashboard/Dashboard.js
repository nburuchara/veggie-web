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
    text-align: right;
}


.parent button {
    margin-left: 25px;
    margin-top: 20px;
    border-radius: 8px;
    height: 40px;
    background-color: #F39C12;
    font-family: Karla;
    border: 2px solid #F39C12;
    color: white;
    margin-bottom: 20px;
    margin-right: 45px;
}

.parent h2 {
    color: #154360
}
    // - - VEGGIE FUNCTIONS - - //

.veggieFunctions {
    text-align: left !important;
    margin-left: 35px;
}

.veggieFunctions button {
    margin-right: 50px;
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

.dashEditor textarea {
    width: 100%;
    color: white;
    background-color: #1C2833;
    outline: none;
    border: 2px solid #154360;
    height: 500px;
    padding-left: 50px;
    padding-right: 50px;
    font-family: Consolas;
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
            normansCode: "",
            veggieFuncBgPrsd: "#F39C12",
            veggieFuncTxtPrsd: "white",
            toDoPressed : false,
            todo: ` /* \n OPTIONAL: \n in progress = ⏳ \n completed = ✅ \n \n ✍🏾 - - TODO - - ✍🏾
            \n 🥕 Task 1 \n 🥕 Task 2 \n 🥕 Task 3 \n */
            `
        }
    }


        /* - - VEGGIE FUNCTIONS - - */
        
    addTodo = () => {
        if (this.state.toDoPressed == false) {
            this.setState({
                normansCode: this.state.todo,
                veggieFuncBgPrsd: "#1C2833",
                toDoPressed: true
            })
        } else {
            this.setState({
                normansCode: this.state.todo,
                // veggieFuncBgPrsd: "#F39C12",
                toDoPressed: false
            })
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


    push = () => {
        fire.firestore().collection("TextEditor").doc("currpage").set({
            code : this.state.normansCode
        })
        console.log(this.state.normansCode)
    }

    pull = () => {
        fire.firestore().collection("TextEditor").doc("currpage").get()
        .then(qs => {
            this.setState({
                normansCode : qs.data().code
            })
        })
        console.log(this.state.normansCode)
    }

    handleChange = (e) => {
        var code = e.target.value
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    render () {

        let todoBtnStyle = {
            marginLeft: "25px",
            marginTop: "20px",
            borderRadius: "8px",
            height: "40px",
            backgroundColor: this.state.veggieFuncBgPrsd,
            fontFamily: "Karla",
            border: "0.5px solid #F39C12",
            color: this.state.veggieFuncTxtPrsd,
            marginBottom: "20px",
            marginRight: "45px"
        }
        
        return(
            <Styles>
                <div className="parent">
                    <button
                    onClick={this.logout}
                    ><b>Logout</b></button>
                    <div className="veggieFunctions">
                        <button
                        style={todoBtnStyle}
                        onClick={this.addTodo}
                        ><b>✍🏾 TODO</b></button>
                        <button
                        ><b>👾 BUG</b></button>
                        <button
                        ><b>📝 SCRIBBLE</b></button>
                    </div>
                    <div className="dashEditor">
                        <textarea
                        id="normansCode"
                        value={this.state.normansCode}
                        onChange={this.handleChange}
                        />
                        <br/>
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