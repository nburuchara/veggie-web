import { Component } from 'react'
import styled from 'styled-components'
import fire from '../database/firebase'

const Styles = styled.div `

    // - - HEADER - - //

.header {
    margin-top: 100px;
    text-align: center;
}

.header h1 {
    font-family: Fascinate;
    font-size: 55px;
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
}

.login button {
    background-color: transparent;
    color: black;
    margin-bottom: 1.5%;
    height: 45px;
    border: 2px solid #2CB430;
    border-radius: 25px;
    width: 100px;
    font-family: Karla;
}

.login button:hover {
    background-color: #2CB430;
    color: white;
}

    // - - SIGNUP REDIRECT BUTTON - - //

.signupRedirect button {
    background-color: #2CB430;
    width: 220px !important;
    color: white;
    font-family: Karla;
}

    // - - SIGNUP - - //

.signUp {
    margin-top: 10%;
}

.signUp h1 {
    font-family: Karla;
    color: black;
    margin-bottom:30px;
}

.signUp h4 {
    font-family: Karla;
    color: #2CB430;
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

.signUp button {a
    margin-top: 15px;
    margin-bottom: 55px;
    height: 45px;
    width: 100px;
    border-radius: 8px;
    outline: none;
    background-color: #2CB430;
    color: white;
    font-family: Karla;
    border: 2px solid #2CB430;
}

.fullName {
    text-align: center;
}

    // - - GROUP INFO - - //

.groupInfo {
    margin-top: 10%;
}

.groupInfo h1 {
    font-family: Karla;
    color: black;
    margin-bottom:30px;
}

.groupInfo h4 {
    font-family: Karla;
    color: #2CB430;
}


`

export default class Home extends Component {
    constructor () {
        super()
        this.state = {
            showLogin : false,
            showSignup: true,
            showVerify: false,
            showGroupInfo: false,
            loginErrorMsg: "",
            email: "",
            password: ""
        }
    }

    login = () => {

    }

    registerAccount = () => {
        this.setState({
            showLogin: false, 
            showSignup: true
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
        console.log(event.target.value)
    }

    getGroupInfo = () => {
        this.setState({
            showSignup: false,
            showGroupInfo: true
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
                                <h4>Username</h4>
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
                        <h1>Sign Up</h1>
                        <h4>Full Name</h4>
                        <input
                        className="fullName"
                        />
                        <h4>Email</h4>
                        <input/>
                        <h4>Class</h4>
                        <input
                        className="fullName"
                        />
                        <h4>Password</h4>
                        <input
                        className="fullName"
                        type="password"
                        />
                        <h4>Confirm Password</h4>
                        <input
                        className="fullName"
                        type="password"
                        /> <br/>
                        <button
                        onClick={this.getGroupInfo}
                        >Continue</button>
                    </div>
                }
                {this.state.showGroupInfo && 
                    <div className="groupInfo">
                        <h1>You're almost all set up!</h1>
                        <h4>Group Name</h4>
                        <input/>
                        <h4>Project Name</h4>
                        <input/> 
                    </div>
                }
                {this.state.showVerify && 
                    <div>

                    </div>
                }
            </Styles>
        )
    }
}