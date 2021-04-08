import { Component } from 'react'
import styled from 'styled-components'
import fire from '../database/firebase'

const Styles = styled.div `

    // - - HEADER - - //

.header {
    margin-top: 100px;
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

.signUp button {a
    margin-top: 15px;
    margin-bottom: 55px;
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
    margin-bottom: 325px;
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
            showLogin : false,
            showSignup: false,
            showVerify: false,
            showGroupInfo: true,
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
                        <h2>SpaceFill1</h2>
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
                        <h2>SpaceFill2</h2>
                        <h1>You're almost all set up!</h1>
                        <h4>Group Name</h4>
                        <input/>
                        <h4 className = "second_input">Project Name</h4>
                        <input/> 
                        <br/>
                        <button><b>Finish</b></button>
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