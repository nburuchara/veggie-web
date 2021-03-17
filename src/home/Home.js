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
}


`

export default class Home extends Component {
    constructor () {
        super()
        this.state = {
            showLogin : true,
            showSignup: false,
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
                        <input/>
                    </div>
                }
            </Styles>
        )
    }
}