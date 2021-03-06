import { Component } from 'react'
import styled from 'styled-components'
import fire from '../database/firebase'

const Styles = styled.div `

    // - - HEADER - - //

.header {
    text-align: center;
    background-color: #154360;
}

.header h1 {
    font-family: Fascinate;
    font-size: 55px;
    color: #FDFEFE;
    
}

.header img {
    width: 20%;
}

    // - - LOGIN - - //

.login input {
    width: 300px;
    border-radius: 7px;
    height: 45px;
    font-size: 15px;
    margin-bottom: 20px;
    border: 1px solid black;
    outline: none;
    padding: 5px;
}

.login h4 {
    font-family: Karla;
    color: #FDFEFE;
}

.login p {
    color: white;
    font-family: Karla;
    font-size: 20px;
}

.login button {
    background-color: transparent;
    color: #3498DB;
    margin-bottom: 1.5%;
    height: 45px;
    border: 2px solid #F39C12;
    border-radius: 25px;
    width: 100px;
    font-family: Karla;
}

.login button:hover {
    background-color: #F39C12;
    color: white;
}

    // - - SIGNUP REDIRECT BUTTON - - //

.signupRedirect button {
    background-color: #F39C12;
    width: 220px !important;
    color: white;
    font-family: Karla;
    margin-bottom: 100px;
}

    // - - SIGNUP - - //

.signUp {

}

.signUp h1 {
    font-family: Karla;
    color: #FDFEFE;;
    margin-bottom:30px;
}

.signUp h2 {
    font-family: Karla;
    color:  #15435F;
    margin-bottom:30px;
}

.signUp h4 {
    font-family: Karla;
    color: white
}

.signUp input {
    height: 42.5px;
    margin-bottom: 20px;
    width: 255px;
    border-radius: 8px;
    border: 0.1px solid black;
    outline: none;
    padding: 10px;
}

.signUp p {
    color: white;
    font-family: Karla;
    font-size: 20px;
    
}

.signUp h5 {
    font-size: 15px;
    color: #F39C12;
    font-family: Karla;
}

.signUp button {
    margin-top: 15px;
    margin-bottom: 15px;
    height: 45px;
    width: 100px;
    border-radius: 8px;
    outline: none;
    background-color: #F39C12;
    color: white;
    font-family: Karla;
    border: 2px solid #F39C12;
}

.fullName {
    text-align: center;
}

// - - backButton - - //

.backButton button {
    margin-top: 15px;
    margin-bottom: 15px;
    height: 45px;
    width: 150px !important;
    border-radius: 8px;
    outline: none;
    background-color: #F39C12;
    color: white;
    font-family: Karla;
    border: 2px solid #F39C12;
}
.backButton2 button {
    margin-top: 15px;
    margin-bottom: 350px !important;
    height: 45px;
    width: 150px !important;
    border-radius: 8px;
    outline: none;
    background-color: #F39C12;
    color: white;
    font-family: Karla;
    border: 2px solid #F39C12;
}

    // - - GROUP INFO - - //

.groupInfo {
    background-color: #154360;
    margin-bottom: 3px;
}

.groupInfo h1 {
    font-family: Karla;
    color: black;
    margin-bottom:30px;
    color: white
}

.groupInfo h2 {
    font-family: Karla;
    color:  #154350;
    margin-bottom:30px;
}

.groupInfo h4 {
    font-family: Karla;
    color: white
    
}

.groupInfo h5 {
    font-size: 15px;
    color: #F39C12;
    font-family: Karla;
}

.groupInfo p {
    color: white;
    font-family: Karla;
    font-size: 20px;
}

.groupInfo input {
    height: 42.5px;
    margin-bottom: 20px;
    width: 255px;
    border-radius: 8px;
    border: 0.1px solid black;
    outline: none;
    padding: 10px;
}

.groupInfo button {
    margin-top: 15px;
    margin-bottom: 15px;
    height: 45px;
    width: 100px;
    border-radius: 8px;
    outline: none;
    background-color: #F39C12;
    color: white;
    font-family: Karla;
    border: 2px solid #F39C12;
}


`

export default class Home extends Component {
    constructor () {
        super()
        this.state = {
            user: null,
            showLogin : true,
            showSignup: false,
            showVerify: false,
            showGroupInfo: false,
            loginErrorMsg: "",
            name: "",
            email: "",
            password: "",
            class: "",
            confirmPassword: "",
            project: "",
            group: "",
            signUpErrMsg:"",
            groupInfoErrMsg: "",
            loginErrorMsg: ""
        }
    }

    login = () => {
        if (this.state.email != "" && this.state.password != ""){
            fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
                localStorage.setItem('logged', true)
                window.location.href = '/'
            }).catch((error)=>{
                this.setState({
                    loginErrorMsg: "?????? Email or password are incorrect"
                })
            })
        } else {
            this.setState({
                loginErrorMsg: "Please fill out your email and password"
            })
        }
    }

    registerAccount = () => {
        this.setState({
            showLogin: false, 
            showSignup: true
        })
    }

    goBack = () => {
        this.setState({
            showLogin: true, 
            showSignup: false,
            showGroupInfo: false
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
        console.log(event.target.value)
    }

    getGroupInfo = () => {
        if (this.state.email!= "" 
        && this.state.password != "" 
        && this.state.name != ""
        && this.state.class != ""
        && this.state.confirmPassword != ""
        && this.state.password === this.state.confirmPassword) {
            this.setState({
                showSignup: false,
                showGroupInfo: true
            })
        } else {
            this.setState({
                signUpErrMsg: "Please fill out all the fields correctly"
            })
        }
    }

    signUp = () => {
        if (!this.state.group == "" && !this.state.project == "") {
            this.saveUserData()
            fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
                localStorage.setItem("logged", true)
                window.location.href = '/'
            }).catch((error) => {
                alert(error)
            })
        } else {
            this.setState({
                groupInfoErrMsg: "Please fill out all fields correctly"
            })
        }
    }

    saveUserData = () => {
        this.state.name = this.state.name.toUpperCase()
        this.state.class = this.state.class.toUpperCase()
        this.state.project = this.state.project.toUpperCase()
        this.state.group = this.state.group.toUpperCase()
        fire.firestore().collection("userData").add({
            name: this.state.name,
            email: this.state.email,
            section: this.state.class,
            group: this.state.group,
            project: this.state.project
        })
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    render () {
        return(
            <Styles>
                {this.state.showLogin && 
                    <div className="header">
                        <h1>Welcome to Veggie Code (Web)</h1>
                        <img src="/assets/logo.gif"/>
                            <div className="login">
                                <h4>Email</h4>
                                <input
                                id="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                />
                                <h4>Password</h4>
                                <input
                                id="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                />
                                <p>{this.state.loginErrorMsg}</p>
                                <button
                                onClick={this.login}
                                ><b>Login</b></button>
                                <br/>
                                <div className="signupRedirect">
                                    <button
                                    onClick={this.registerAccount}
                                    ><b>I don't have an account</b></button>
                                </div>
                            </div>
                    </div>
                }
                {this.state.showSignup && 
                    <div className="signUp">
                        <h2>SpaceFill1</h2>
                        <h1>Sign Up</h1>
                        <h4>Full Name</h4>
                        <input
                        id="name"
                        value={this.state.name}
                        className="fullName"
                        onChange={this.handleChange}
                        />
                        <h4>Email</h4>
                        <input
                        id="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                        <h4>Class Section</h4>
                        <h5>CS251A (Prof. Olaf)</h5>
                        <h5>CS251B (Prof. Rab)</h5>
                        <input
                        id="class"
                        value={this.state.class}
                        className="fullName"
                        onChange={this.handleChange}
                        />
                        <h4>Password</h4>
                        <h5>(Must be at least 6 characters)</h5>
                        <input
                        id="password"
                        value={this.state.password}
                        className="fullName"
                        type="password"
                        onChange={this.handleChange}
                        />
                        <h4>Confirm Password</h4>
                        <input
                        id="confirmPassword"
                        value={this.state.confirmPassword}
                        className="fullName"
                        type="password"
                        onChange={this.handleChange}
                        /> 
                        <p>{this.state.signUpErrMsglgi}</p>
                        <button
                        onClick={this.getGroupInfo}
                        ><b>Continue</b></button>
                        <div
                        className = "backButton">
                        <button
                        onClick={this.goBack}
                        ><b>Back to Login</b></button>
                        </div>
                    </div>
                }
                {this.state.showGroupInfo && 
                    <div className="groupInfo">
                        <h2>SpaceFill2</h2>
                        <h1>You're almost all set up!</h1>
                        <h4>Group Name</h4>
                        <h5>(Name of your group)</h5>
                        <input
                        id="group"
                        value={this.state.group}
                        onChange={this.handleChange}
                        className="fullName"
                        />
                        <h4 className = "second_input">Project Name</h4>
                        <h5>(Name of your project)</h5>
                        <input
                        id="project"
                        value={this.state.project}
                        onChange={this.handleChange}
                        className="fullName"
                        /> 
                        <p>{this.state.groupInfoErrMsg}</p>
                        <button
                        onClick={this.signUp}
                        ><b>Finish</b></button>
                        <div
                        className = "backButton2">
                        <button
                        onClick={this.goBack}
                        ><b>Back to Login</b></button>
                        </div>
                    </div>
                }
            </Styles>
        )
    }
}