import React, {Component} from 'react'
import fire from './../database/firebase'
import styled from 'styled-components'
// import CodeMirror from '@uiw/react-codemirror';
// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/monokai.css';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import { getAllByTestId } from '@testing-library/dom';


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
    color: #154360;
    font-size: 18px;
}


    // - - USER EMAIL - - //

.uEmail {
    text-align: left;
}

.uEmail h4 {
    margin-left: 62.5px;
    color: white;
    font-family: Consolas;
}
    // - - VEGGIE FUNCTIONS - - //

.veggieFunctions {
    text-align: left !important;
    margin-left: 35px;
}

.veggieFunctions button {
    margin-right: 50px;
}

    // - - TEXT EDITOR - - //

.dashEditor {
    text-align: left;
    height: 485px;
    margin-bottom: 10px;
    background-color: #154360;
}

.dashEditor p {
    margin-left: 57.5px;
    color: white;
    font-family: Karla;
}

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

    // - - PUSH / PULL BUTTONS - - //

.databaseBtns {
    text-align: left;
    margin-left: 15px;
}

.databaseBtns button {
    margin-top: 18px;
    width: 120px;

}


`


export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            userCode: code,

            userEmail: "",
            userGroup: [],

                //* - - USR MSG STYLE - - //
            usrMsgColor: "white",
            
                //* - - TODO - - //
            toDoCmpnt: true,
            todoCode: "",
            todoBtnBg : "#F39C12",
            todoBtnTxt: "white",
            todoPressed: false,
            todoUsrMsg: "",
            todo: `  \n OPTIONAL: \n not started = 🛑 \n in progress = ⏳ \n completed = ✅ \n \n ✍🏾 - - TODO - - ✍🏾
            \n 🥕 Task 1 \n 🥕 Task 2 \n 🥕 Task 3 \n 
            `,

                //* - - BUG - - //
            bugCmpnt: false,
            bugCode: "",
            bugBtnBg: "#F39C12",
            bugBtnTxt: "white",
            bugPressed: false,
            bugUsrMsg: "",
            bug: ` \n Progress: \n not started = 🛑 \n in progress = ⏳ \n bug resolved = ✅ \n \n 👾 - - BUG - - 👾 \n 🥝 Bug \n 🥝 Description \n 🥝 Progress: 🛑 \n 🥝 Comments: \n 
            `,

                //* - - SCRIBBLE - - //
            scribCmpnt: false,
            scribCode: "",
            scribBtnBg: "#F39C12",
            scribBtnTxt: "white",
            scribPressed: false,
            scribUsrMsg: "",
            scrib: ` \n 📝 - - SCRIBBLE - - 📝 \n \n 🥑 Brainstorming... \n 🥑 Thinking... \n 🥑 Planning...`,

                //* - - FEATURE - - //
            ftrCmpnt: false,
            ftrCode: "",
            ftrBtnBg: "",
            ftrBtnTxt: "",
            ftrPressed: false,
            ftrUsrMsg: "",
            ftr: `⭐ FEATURE: " YOUR NEXT BIG FEATURE "`

                //* - - CHART - - //


                //* - - PROGRESS - - //

        }
    }

    componentDidMount = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
              this.setState({
                  userEmail: user.email
            })
            } else {
              this.setState({user:null})
            }
        })
          fire.firestore().collection("Group1").doc("teamName")
          .collection("members").doc("data").get()
          .then(querySnapshot => {
              if (querySnapshot.exists){
                  console.log(querySnapshot.data())
              } else {
                  console.log("couldn't find")
              }
          })
    }

    authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
          if (user) {
            this.setState({user})
          } else {
            this.setState({user:null})
          }
        })
      }
    


        /* - - VEGGIE FUNCTIONS - - */
        
    addTodo = () => {

        if (this.state.todoPressed == false) {
            this.setState({
                todoCode: this.state.todo,
                todoBtnBg: "#3498DB",
                toDoCmpnt: true,
                todoPressed: true,
                bugPressed: false,
                bugCmpnt: false,
                bugBtnBg: "#F39C12",
                bugBtnTxt: "white",
                scribCmpnt: false,
                scribPressed: false,
                scribBtnBg: "#F39C12",
                ftrCmpnt: false,
                ftrPressed: false,
                todoUsrMsg: "Press the \"Pull\" button (or press \"TODO\" again) to retreive your most recent changes",
                usrMsgColor: "white"
            })
        } else {
            this.pull()

        }
    }

    addBug = () => {
        if (this.state.bugPressed == false) {
            this.setState({
                bugCode: this.state.bug,
                bugBtnBg: "#3498DB",
                bugCmpnt: true,
                bugPressed: true,
                usrMsgColor: "white",
                bugUsrMsg: "Press the \"Pull\" button (or press \"BUGS\" again) to retreive your most recent changes",
                
                toDoCmpnt: false,
                todoBtnBg: "#F39C12",
                todoBtnTxt: "white",
                todoPressed: false,

                scribCmpnt: false,
                scribBtnBg: "#F39C12",
                scribBtnTxt: "white",
                scribPressed: false,

                ftrCmpnt: false,
                ftrPressed: false
            })
        } else {
            this.pull()
        }
    }


    addScribble = () => {
        if (this.state.scribPressed == false) {
            this.setState({
                scribCode: this.state.scrib,
                scribCmpnt: true,
                scribPressed: true,
                scribBtnBg: "#3498DB",
                usrMsgColor: "white",
                scribUsrMsg: "Press the \"Pull\" button (or press \"SCRIBBLE\" again) to retreive your most recent changes",
                toDoCmpnt: false,
                todoBtnBg: "#F39C12",
                todoBtnTxt: "white",
                todoPressed: false,
                bugCmpnt: false,
                bugBtnBg: "#F39C12",
                bugBtnTxt: "white",
                bugPressed: false,
                ftrCmpnt: false,
                ftrPressed: false
            })
        } else {

        }
    }


    logout = () => {
        fire.auth().signOut();
    }


    push = () => {
        if (this.state.todoPressed == true) {
            this.pushTodo()
        } else if (this.state.bugPressed == true) {
            this.pushBug()
        } else if (this.state.scribPressed == true) {
            this.pushScrib()
        }
    }

    pushScrib = () => {
        if (this.state.scribCode == this.state.scrib) {
            this.setState({
                scribUsrMsg: "⚠️ You're about to overwrite your saved code with the BUGS boilerplate. Press \"Pull\" to get the latest changes or make some changes below.",
                usrMsgColor: "#FF311D"
            })
        } else if (this.state.scribCode == "") {
            this.setState({
                scribUsrMsg: "⚠️ No changes detected to push. Press \"Pull\" to get the latest changes.",
                usrMsgColor: "#FF311D"
            })
        } else {
            fire.firestore().collection("TextEditor").doc("currScrib").set({
                code: this.state.scribCode
            })
            this.setState({
                scribUsrMsg: "✅ Your changes has been saved.",
                usrMsgColor: "#93FE3A"
            })
        }

    }

    pushBug = () => {
        if (this.state.bugCode == this.state.bug) {
            this.setState({
                bugUsrMsg: "⚠️ You're about to overwrite your saved code with the BUGS boilerplate. Press \"Pull\" to get the latest changes or make some changes below.",
                usrMsgColor: "#FF311D"
            })
        } else if (this.state.bugCode == "") {
            this.setState({
                bugUsrMsg: "⚠️ No changes detected to push. Press \"Pull\" to get the latest changes.",
                usrMsgColor: "#FF311D"
            })
        } else {
            fire.firestore().collection("TextEditor").doc("currBug").set({
                code: this.state.bugCode
            })
            this.setState({
                bugUsrMsg: "✅ Your changes has been saved.",
                usrMsgColor: "#93FE3A"
            })
        }
    }


    pushTodo = () => {
        if (this.state.todoCode == this.state.todo) {
            this.setState({
                todoUsrMsg: "⚠️ You're about to overwrite your saved code with the TODO boilerplate. Press \"Pull\" to get the latest changes or make some changes below.",
                usrMsgColor: "#FF311D"
            })
        } else if (this.state.todoCode == "") {
            this.setState({
                todoUsrMsg: "⚠️ No changes detected to push. Press \"Pull\" to get the latest changes.",
                usrMsgColor: "#FF311D"
            })
        } else {
            fire.firestore().collection("TextEditor").doc("currpage").set({
                code: this.state.todoCode
            })
            this.setState({
                todoUsrMsg: "✅ Your changes has been saved.",
                usrMsgColor: "#93FE3A"
            })
        }
    }



    pull = () => {

       if (this.state.todoPressed == true) {
          this.pullTodo()
       } else if (this.state.bugPressed == true) {
           this.pullBug()
       } else if (this.state.scribPressed == true) {
           this.pullScrib()
       }
    }

    pullTodo = () => {
        fire.firestore().collection("TextEditor").doc("currpage").get()
        .then(querySnapshot => {
           if (querySnapshot.exists){
               this.setState({
                   todoCode: querySnapshot.data().code
               }) 
               this.setState({
                   todoUsrMsg: "🔅 The latest changes have been loaded.",
                   usrMsgColor: "#F99D19"
               })
           } else {
               console.log("dosesn't exist")
           }
       })
    }

    pullBug = () => {
        fire.firestore().collection("TextEditor").doc("currBug").get()
        .then(querySnapshot => {
           if (querySnapshot.exists){
               this.setState({
                   bugCode: querySnapshot.data().code
               }) 
               this.setState({
                   bugUsrMsg: "🔅 The latest changes have been loaded.",
                   usrMsgColor: "#F99D19"
               })
           } else {
               console.log("dosesn't exist")
           }
       })
    }

    pullScrib = () => {
        fire.firestore().collection("TextEditor").doc("currScrib").get()
        .then(querySnapshot => {
           if (querySnapshot.exists){
               this.setState({
                   scribCode: querySnapshot.data().code
               }) 
               this.setState({
                   scribUsrMsg: "🔅 The latest changes have been loaded.",
                   usrMsgColor: "#F99D19"
               })
           } else {
               console.log("dosesn't exist")
           }
       })

    }

    handleChange = (e) => {
        if (this.state.todoPressed == true) {
            this.setState({
                [e.target.id]: e.target.value,
                todoUsrMsg: "⚠️ Changes have been made. Press \"Push\" to save your changes, otherwise they may be lost.",
                usrMsgColor: "#FF311D"
            })
        } else if (this.state.bugPressed == true) {
            this.setState({
                [e.target.id]: e.target.value,
                bugUsrMsg: "⚠️ Changes have been made. Press \"Push\" to save your changes, otherwise they may be lost.",
                usrMsgColor: "#FF311D"
            })
        } else if (this.state.scribPressed == true) {
            this.setState({
                [e.target.id]: e.target.value,
                scribUsrMsg: "⚠️ Changes have been made. Press \"Push\" to save your changes, otherwise they may be lost.",
                usrMsgColor: "#FF311D"
            })
        }
    }


    render () {


        let usrMsgStyle = {
            marginLeft: "57.5px",
            color: this.state.usrMsgColor,
            fontFamily: "Karla"
        }

        let toDoBtnStyle = {
            marginLeft: "25px",
            marginTop: "20px",
            borderRadius: "8px",
            height: "40px",
            backgroundColor: this.state.todoBtnBg,
            fontFamily: "Karla",
            border: "0.5px solid #F39C12",
            color: this.state.todoBtnTxt,
            marginBottom: "20px",
            marginRight: "45px"
        }

        let bugBtnStyle = {
            marginLeft: "25px",
            marginTop: "20px",
            borderRadius: "8px",
            height: "40px",
            backgroundColor: this.state.bugBtnBg,
            fontFamily: "Karla",
            border: "0.5px solid #F39C12",
            color: this.state.bugBtnTxt,
            marginBottom: "20px",
            marginRight: "45px"
        }

        let scribBtnStyle = {

            marginLeft: "25px",
            marginTop: "20px",
            borderRadius: "8px",
            height: "40px",

            backgroundColor: this.state.scribBtnBg,
            fontFamily: "Karla",
            border: "0.5px solid #F39C12",
            color: this.state.scribBtnTxt,

            marginBottom: "20px",
            marginRight: "45px"
        }
        
        return(
            <Styles>
                <div className="parent">
                    <button
                    onClick={this.logout}
                    ><b>Logout</b></button>
                    <div className="uEmail">
                        <h4>User: {this.state.userEmail}</h4>
                    </div>
                    <div className="veggieFunctions">
                        <button
                        style={toDoBtnStyle}
                        onClick={this.addTodo}
                        ><b>✍🏾 TODO</b></button>
                        <button
                        style={bugBtnStyle}
                        onClick={this.addBug}
                        ><b>👾 BUGS</b></button>
                        <button
                        style={scribBtnStyle}
                        onClick={this.addScribble}
                        ><b>📝 SCRIBBLE</b></button>
                    </div>
                    {this.state.toDoCmpnt && 
                        <div className="dashEditor">
                            <p style={usrMsgStyle}><b>{this.state.todoUsrMsg}</b></p>
                            <textarea
                            id="todoCode"
                            value={this.state.todoCode}
                            onChange={this.handleChange}
                            />
                            <br/>
                            {/* <button>Todo</button>
                            <button
                            onClick={this.pushToDb}
                            >Done</button> */}
                        </div>
                    }
                    {this.state.bugCmpnt && 
                        <div className="dashEditor">
                            <p style={usrMsgStyle}><b>{this.state.bugUsrMsg}</b></p>
                            <textarea
                            id="bugCode"
                            value={this.state.bugCode}
                            onChange={this.handleChange}
                            />
                            <br/>
                            {/* <button>Todo</button>
                            <button
                            onClick={this.pushToDb}
                            >Done</button> */}
                        </div>
                    }
                    {this.state.scribCmpnt && 
                        <div className="dashEditor">
                            <p style={usrMsgStyle}><b>{this.state.scribUsrMsg}</b></p>
                            <textarea
                            id="scribCode"
                            value={this.state.scribCode}
                            onChange={this.handleChange}
                            />
                            <br/>
                            {/* <button>Todo</button>
                            <button
                            onClick={this.pushToDb}
                            >Done</button> */}
                        </div>
                    }

                    <h2> TextFill2</h2>
                    <div className="databaseBtns">
                        <button
                        onClick={this.pull}
                        ><b>Pull</b></button>

                        <button
                        onClick={this.push}
                        ><b>Push</b></button>
                    </div>
                </div>
            </Styles>
        )
    }
}