
import React,{ Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components'
import fire from '../src/database/firebase'
import Home from './home/Home';


const Styles = styled.div `

  // - - HERE IS WHERE ALL CSS GOES - - //


`


class App extends Component {

  constructor () {
    super()
    
    this.state = {
      user: null
    }
  }

  //* - - FUNCTIONS GO HERE - - //



  componentDidMount = () => {
    this.authListener()
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


  render () {
    return (
  //* - - HTML GOES HERE - - //
      <Styles>
        <div className="App">
          {this.state.user ? (
            //* - - AFTER USER LOGS ON - - //
            <React.Fragment>
              <Router>
                <Switch>
                </Switch>
              </Router>
            </React.Fragment>
          ):(
            //* - - BEFORE USER LOGS ON - - //
            <React.Fragment>
              <Router>
                <Switch>
                  <Route exact path = "/" render = {() => < Home/>}/>
                </Switch>
              </Router>
            </React.Fragment>
          )}
        </div>
      </Styles>
    );
  }
}

export default App;
