import React, {Component} from 'react'
import fire from './../database/firebase'
import styled from 'styled-components'

const Styles = styled.div `


`


export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render () {
        return(
            <Styles>
                <h1>TEXT EDITOR AND EVERYTHIG ELSE </h1>
            </Styles>
        )
    }
}