import React, {Component} from 'react'
import fire from './../database/firebase'
import styled from 'styled-components'
// import CodeMirror from '@uiw/react-codemirror';
// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/monokai.css';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import { getAllByTestId } from '@testing-library/dom';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { queryByTestId } from '@testing-library/dom';


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

.parent label {
    font-family: Karla;
    color: #F39C12;
    
}

    // - - PROJECT TITLE - - //

.projectTitle h1 {
    text-align: center;
    marign-bottom: 7.5px;
    margin-top: 5px;
    font-family: Karla;
    color: #F39C12;
}


    // - - USER EMAIL - - //

.uEmail {
    text-align: left;
}

.uEmail h4 {
    margin-left: 62.5px;
    color: white;
    font-family: Consolas;
    margin-bottom: 0px;
}

.uEmail h5 {
    margin-left: 62.5px;
    color: white;
    font-family: Karla;
}

.uEmail h6 {
    margin-top: 10px;
    margin-left: 62.5px;
    font-size: 16px;
    font-family: Karla;
    color: #F39C12;
}

.uEmail button {
    margin-top: 0px;
    height: 35px;
    margin-left: 62.5px;
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
            userProject: "",
            userName: "",
            userSection: "",
            userGroup: "",
            userEmail: "",
            teamA: [],
            teamB: [],
            checkoutPower: false,
            editStatus: "No one is currently editing the document",
            currentUser:"",
            cBtnColor: "white",
            cBtnTxt: "Checkout Document",

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
            saveTodo: "",

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

            //* - - GANTT - - //
            ganttCmpnt: false,
            ganttCode: "",
            ganttBtnBg: "#F39C12",
            ganttBtnTxt: "white",
            ganttPressed: false,
            ganttUsrMsg: "",
            gantt: `\n ⏰ - - GANTT CHART - - ⏰ \n \n Project Task:			Days: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 \n            Task1				  # # # ## ## \n     Task2				            # # ## ## ##          ## ## ## ##       ## ## \n            Task3				           ## ##       ## ## ##                ## ##          ## ## \n     Task4				          # # # ##
            Task5				    # # ##          ## ## ## ##                            ## ## ## ## ## `,

            //* - - FEATURES - - //
            featuresCmpnt: false,
            featuresCode: "",
            featuresBtnBg: "#F39C12",
            featuresBtnTxt: "white",
            featuresPressed: false,
            featuresUsrMsg: "",

            features: `\n ⭐ FEATURE: " YOUR NEXT BIG FEATURE "`,



            //* - - FEATURE - - //
            ftrCmpnt: false,
            ftrCode: "",
            ftrBtnBg: "",
            ftrBtnTxt: "",
            ftrPressed: false,
            ftrUsrMsg: "",
            ftr: ``

                //* - - CHART - - //


                //* - - PROGRESS - - //

        }
    }

    componentDidMount = () => {
        this.setState({
            checkoutPower: false
        })
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                class User {
                    constructor(name, section, email, group, project) {
                        this.name = name
                        this.section = section
                        this.email = email
                        this.group = group
                        this.project = project
                    }
                    toString () {
                        return this.name + ', ' +
                        this.section + ', ' +
                        this.email + ', ' + 
                        this.group + ', ' +
                        this.project
                    }
                }
                var userConverter = {
                    toFirestore : function(user) {
                        return {
                            name: user.name,
                            section: user.section,
                            email: user.email,
                            group: user.group,
                            project: user.project
                        }
                    },
                    fromFirestore : function (snapshot, options) {
                        const data = snapshot.data(options)
                        return new User(data.name, data.section,
                            data.email, data.group,
                            data.project)
                    }
                }
                fire.firestore().collection("userData")
                .withConverter(userConverter).where('email', '==', user.email).get().then(qs => {
                    const project = qs.docs.map(doc => doc.data().project)
                    const name = qs.docs.map(doc => doc.data().name)
                    const section = qs.docs.map(doc => doc.data().section)
                    const group = qs.docs.map(doc => doc.data().group)
                    const email = qs.docs.map(doc => doc.data().email)
                    this.setState({
                        userProject: project,
                        userName: name,
                        userSection: section,
                        userGroup: group,
                        userEmail: email
                    })
                    this.state.userName = this.state.userName
                    this.state.userSection = this.state.userSection
                    console.log(`PROJECT: ${this.state.userProject}`)
                    console.log(`NAME ${this.state.userName}`)
                    console.log(`SECTION: ${this.state.userSection}`)
                    console.log(`GROUP: ${this.state.userGroup}`)
                    console.log(`EMAIL: ${this.state.userEmail}`)
                })
                fire.firestore().collection("CS251A").doc("editing")
                .get().then(qs => {
                    if(qs.exists) {
                        this.setState({
                            currentUser: qs.data().active
                        })
                    }
                })
                fire.firestore().collection("CS251A").doc("members")
                .get().then(qs => {
                    if (qs.exists) {
                        this.setState({
                            teamA: qs.data().members
                        })
                        if (this.state.teamA.includes(user.email)){
                            
                        }
                    } else {
                        console.log("no data heea")
                    }
                })
              this.setState({
                  userEmail: user.email
              })
            } else {
              this.setState({user:null})
            }
        })
    }

    pullTodoCode = () => {
        this.setState({

        })
        // fire.firestore().collection("CS251A").doc("todo")
        // .set({
        //     changes: this.st
        // })
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
                ganttCmpnt: false,
                ganttBtnBg: "#F39C12",
                ganttBtnTxt: "white",
                ganttPressed: false,
                featuresCmpnt: false,
                featuresBtnBg: "#F39C12",
                featuresBtnTxt: "white",
                featuresPressed: false,
                todoUsrMsg: "Press the \"Update\" button to retreive your most recent changes",
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
                bugUsrMsg: "Press the \"Update\" button to retreive your most recent changes",
                
                toDoCmpnt: false,
                todoBtnBg: "#F39C12",
                todoBtnTxt: "white",
                todoPressed: false,

                scribCmpnt: false,
                scribBtnBg: "#F39C12",
                scribBtnTxt: "white",
                scribPressed: false,

                ganttCmpnt: false,
                ganttBtnBg: "#F39C12",
                ganttBtnTxt: "white",
                ganttPressed: false,

                featuresCmpnt: false,
                featuresBtnBg: "#F39C12",
                featuresBtnTxt: "white",
                featuresPressed: false,

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
                scribUsrMsg: "Press the \"Update\" button to retreive your most recent changes",
                toDoCmpnt: false,
                todoBtnBg: "#F39C12",
                todoBtnTxt: "white",
                todoPressed: false,
                bugCmpnt: false,
                bugBtnBg: "#F39C12",
                bugBtnTxt: "white",
                bugPressed: false,
                ganttCmpnt: false,
                ganttBtnBg: "#F39C12",
                ganttBtnTxt: "white",
                ganttPressed: false,
                featuresCmpnt: false,
                featuresBtnBg: "#F39C12",
                featuresBtnTxt: "white",
                featuresPressed: false,
                ftrCmpnt: false,
                ftrPressed: false
            })
        } else {

        }
    }

    addGantt = () => {
        if (this.state.ganttPressed == false) {
            this.setState({
                ganttCode: this.state.gantt,
                ganttBtnBg: "#3498DB",
                ganttCmpnt: true,
                ganttPressed: true,
                usrMsgColor: "white",
                ganttUsrMsg: "Press the \"Update\" button  to retreive your most recent changes",
                
                toDoCmpnt: false,
                todoBtnBg: "#F39C12",
                todoBtnTxt: "white",
                todoPressed: false,

                scribCmpnt: false,
                scribBtnBg: "#F39C12",
                scribBtnTxt: "white",
                scribPressed: false,

                bugCmpnt: false,
                bugBtnBg: "#F39C12",
                bugBtnTxt: "white",
                bugPressed: false,

                featuresCmpnt: false,
                featuresBtnBg: "#F39C12",
                featuresBtnTxt: "white",
                featuresPressed: false,

                ftrCmpnt: false,
                ftrPressed: false
            })
        } else {
            
        }
    }

    addFeatures = () => {
        if (this.state.featuresPressed == false) {
            this.setState({
                featuresCode: this.state.features,
                featuresBtnBg: "#3498DB",
                featuresCmpnt: true,
                featuresPressed: true,
                usrMsgColor: "white",
                featuresUsrMsg: "Press the \"Update\" button to retreive your most recent changes",
                
                toDoCmpnt: false,
                todoBtnBg: "#F39C12",
                todoBtnTxt: "white",
                todoPressed: false,

                scribCmpnt: false,
                scribBtnBg: "#F39C12",
                scribBtnTxt: "white",
                scribPressed: false,

                bugCmpnt: false,
                bugBtnBg: "#F39C12",
                bugBtnTxt: "white",
                bugPressed: false,

                ganttCmpnt: false,
                ganttBtnBg: "#F39C12",
                ganttBtnTxt: "white",
                ganttPressed: false,

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
        if (this.state.checkoutPower == true) {
            if (this.state.todoPressed == true) {
                this.pushTodo()
            } else if (this.state.bugPressed == true) {
                this.pushBug()
            } else if (this.state.scribPressed == true) {
                this.pushScrib()
            }
            else if (this.state.ganttPressed == true) {
                this.pushGantt()
            }
            else if (this.state.featuresPressed == true) {
                this.pushFeatures()
            }
        } else {
            this.setState({
                editStatus: "⚠️ Please check out the document first",
                cBtnColor: "#FF311D"
            })
        }
    }

    updateAll = () => {
        fire.firestore().collection().doc()
    }

    pushScrib = () => {
        if (this.state.scribCode == this.state.scrib) {
            this.setState({
                scribUsrMsg: "⚠️ You're about to overwrite your saved code with the BUGS boilerplate. Press \"Pull\" to get the latest changes or make some changes below.",
                usrMsgColor: "#FF311D"
            })
        } else if (this.state.scribCode == "") {
            this.setState({
                scribUsrMsg: "⚠️ No changes detected to push. Press \"Update\" to get the latest changes.",
                usrMsgColor: "#FF311D"
            })
        } else {
            // fire.firestore().collection(this.state.userSection[0]).doc("scribble").set({
            //     code: this.state.scribCode
            // })
            fire.firestore().collection("CS251A").doc("scribble").set({
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
                bugUsrMsg: "⚠️ No changes detected to push. Press \"Update\" to get the latest changes.",
                usrMsgColor: "#FF311D"
            })
        } else {
            // fire.firestore().collection(this.state.userSection[0]).doc("bug").set({
            //     code: this.state.bugCode
            // })
            fire.firestore().collection("CS251A").doc("bug").set({
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
                todoUsrMsg: "⚠️ No changes detected to push. Press \"Update\" to get the latest changes.",
                usrMsgColor: "#FF311D"
            })
        } else {
            // fire.firestore().collection(this.state.userSection[0]).doc("todo").set({
            //     code: this.state.todoCode
            // })
            fire.firestore().collection("CS251A").doc("todo").set({
                code: this.state.todoCode
            })
            this.setState({
                todoUsrMsg: "✅ Your changes has been saved.",
                usrMsgColor: "#93FE3A"
            })
        }
    }

    pushGantt = () => {
        if (this.state.ganttCode == this.state.gantt) {
            this.setState({
                ganttUsrMsg: "⚠️ You're about to overwrite your saved code with the BUGS boilerplate. Press \"Pull\" to get the latest changes or make some changes below.",
                usrMsgColor: "#FF311D"
            })
        } else if (this.state.ganttCode == "") {
            this.setState({
                ganttUsrMsg: "⚠️ No changes detected to push. Press \"Update\" to get the latest changes.",
                usrMsgColor: "#FF311D"
            })
        } else {
            // fire.firestore().collection(this.state.userSection[0]).doc("gantt").set({
            //     code: this.state.ganttCode
            // })
            fire.firestore().collection("CS251A").doc("gantt").set({
                code: this.state.ganttCode
            })
            this.setState({
                ganttUsrMsg: "✅ Your changes has been saved.",
                usrMsgColor: "#93FE3A"
            })
        }

    }

    pushFeatures = () => {
        if (this.state.featuresCode == this.state.features) {
            this.setState({
                featuresUsrMsg: "⚠️ You're about to overwrite your saved code with the BUGS boilerplate. Press \"Pull\" to get the latest changes or make some changes below.",
                usrMsgColor: "#FF311D"
            })
        } else if (this.state.featuresCode == "") {
            this.setState({
                featuresUsrMsg: "⚠️ No changes detected to push. Press \"Update\" to get the latest changes.",
                usrMsgColor: "#FF311D"
            })
            this.pushScrib()
            this.pushGantt()
            this.pushBug()
            this.pushTodo()
        } else {
            // fire.firestore().collection(this.state.userSection[0]).doc("feature").set({
            //     code: this.state.featuresCode
            // })
            fire.firestore().collection("CS251A").doc("feature").set({
                code: this.state.featuresCode
            })
            this.setState({
                featuresUsrMsg: "✅ Your changes has been saved.",
                usrMsgColor: "#93FE3A"
            })
        }

    }


    pull = () => {
        if (this.state.checkoutPower == true) {
            if (this.state.todoPressed == true) {
                this.pullTodo()
            } else if (this.state.bugPressed == true) {
                this.pullBug()
            } else if (this.state.scribPressed == true) {
                this.pullScrib()
            }
            else if (this.state.ganttPressed == true) {
                this.pullGantt()
            }
            else if (this.state.featuresPressed == true) {
                this.pullFeatures()
            }
        } else {
            this.setState({
                editStatus: "⚠️ Please check out the document first",
                cBtnColor: "#FF311D"
            })
        }
    }

    pullTodo = () => {
        fire.firestore().collection("CS251A").doc("todo").get()
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
        fire.firestore().collection("CS251A").doc("bug").get()
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
        fire.firestore().collection("CS251A").doc("scribble").get()
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

    pullGantt = () => {
        fire.firestore().collection("CS251A").doc("gantt").get()
        .then(querySnapshot => {
           if (querySnapshot.exists){
               this.setState({
                   ganttCode: querySnapshot.data().code
               }) 
               this.setState({
                   ganttUsrMsg: "🔅 The latest changes have been loaded.",
                   usrMsgColor: "#F99D19"
               })
           } else {
               console.log("dosesn't exist")
           }
       })

    }

    pullFeatures = () => {
        fire.firestore().collection("CS251A").doc("feature").get()
        .then(querySnapshot => {
           if (querySnapshot.exists){
               this.setState({
                   featuresCode: querySnapshot.data().code
               }) 
               this.setState({
                   featuresUsrMsg: "🔅 The latest changes have been loaded.",
                   usrMsgColor: "#F99D19"
               })
           } else {
               console.log("dosesn't exist")
           }
       })

    }

    checkoutDocument = () => {
        if (this.state.currentUser == "inactive") {
            fire.firestore().collection("CS251A").doc("editing")
            .set({
                active: this.state.userEmail
            })
            this.setState({
                checkoutPower: true,
                editStatus: "You have successfully checked out the document",
                cBtnColor: "white"
            })
        } else if (this.state.userEmail[0] == this.state.currentUser[0]) {
            fire.firestore().collection("CS251A").doc("editing")
            .set({
                active: "inactive"
            })
            this.setState({
                editStatus: `You have checked the document back in`,
                cBtnColor: "white"
            }) 
        } else {
            this.setState({
                editStatus: "You cannot edit the document. Someone else has checked it out",
                cBtnColor: "#FF311D"
            })
        }
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
        }else if (this.state.ganttPressed == true) {
            this.setState({
                [e.target.id]: e.target.value,
                ganttUsrMsg: "⚠️ Changes have been made. Press \"Push\" to save your changes, otherwise they may be lost.",
                usrMsgColor: "#FF311D"
            })
        }
        else if (this.state.featuresPressed == true) {
            this.setState({
                [e.target.id]: e.target.value,
                featuresUsrMsg: "⚠️ Changes have been made. Press \"Push\" to save your changes, otherwise they may be lost.",
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
        
        let ganttBtnStyle = {

            marginLeft: "25px",
            marginTop: "20px",
            borderRadius: "8px",
            height: "40px",

            backgroundColor: this.state.ganttBtnBg,
            fontFamily: "Karla",
            border: "0.5px solid #F39C12",
            color: this.state.ganttBtnTxt,

            marginBottom: "20px",
            marginRight: "45px"
        }

        let featuresBtnStyle = {

            marginLeft: "25px",
            marginTop: "20px",
            borderRadius: "8px",
            height: "40px",

            backgroundColor: this.state.featuresBtnBg,
            fontFamily: "Karla",
            border: "0.5px solid #F39C12",
            color: this.state.featuresBtnTxt,

            marginBottom: "20px",
            marginRight: "45px"
        }

        let editStyle = {
            color: this.state.cBtnColor
        }

        let cBtnStyle = {}

        return(
            <Styles>
                <div className="parent">
                    <label><b>SECTION:</b> {this.state.userSection}</label>
                    <button
                    onClick={this.logout}
                    ><b>Logout</b></button>
                    <div className="projectTitle">
                        <h1><b>{this.state.userProject}</b></h1>
                    </div>
                    <div className="uEmail">
                        <h4><b>USER:</b> {this.state.userEmail}</h4>
                        <h6><b>TEAM:</b> {this.state.userGroup}</h6>
                        <br/>
                        <button
                        onClick={this.checkoutDocument}
                        ><b>{this.state.cBtnTxt}</b></button>
                        <h5 style={editStyle}>{this.state.editStatus}</h5>
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
                        <button
                        style={ganttBtnStyle}
                        onClick={this.addGantt}
                        ><b>⏰ GANTT</b></button>
                        <button
                        style={featuresBtnStyle}
                        onClick={this.addFeatures}
                        ><b>⭐ FEATURES</b></button>
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
                    {this.state.ganttCmpnt && 
                        <div className="dashEditor">
                            <p style={usrMsgStyle}><b>{this.state.ganttUsrMsg}</b></p>
                            <textarea
                            id="ganttCode"
                            value={this.state.ganttCode}
                            onChange={this.handleChange}
                            />
                            <br/>
                            {/* <button>Todo</button>
                            <button
                            onClick={this.pushToDb}
                            >Done</button> */}
                        </div>
                    }
                    {this.state.featuresCmpnt && 
                        <div className="dashEditor">
                            <p style={usrMsgStyle}><b>{this.state.featuresUsrMsg}</b></p>
                            <textarea
                            id="featuresCode"
                            value={this.state.featuresCode}
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
                        ><b>Update</b></button>

                        <button
                        onClick={this.push}
                        ><b>Save</b></button>
                    </div>
                </div>
            </Styles>
        )
    }
}