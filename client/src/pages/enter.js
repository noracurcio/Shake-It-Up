import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as ReactBootStrap from "react-bootstrap";
import shaker from "./30644-200.png";
import "../index.css"
import Nav from '../components/Nav.js'
import Typical from 'react-typical'



class Enter extends Component {

  state = {
    redirect: false,
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/shaker'/>
    }
  }

  render () {
    return (
        <>
        
        <div className ="enter-container">
         
          <div className="split left">
          <Nav/>
              <div className="centered">
                <img src={shaker} alt="shaker" className="centered-img"/>
                   <h1>Welcome to Shake It</h1>
                    <h2>Jane Flex</h2>
                      <p>Some text.</p>
                      <div>
                    {this.renderRedirect()}
                      <ReactBootStrap.Button onClick={this.setRedirect} variant="primary" size="lg">
                          Your Next Adventure Awaits...
                      </ReactBootStrap.Button>
                  </div>
                </div>
          </div>

          <div className="split right">
              <div className="centered">
                  
                    <h2>SHAKE IT</h2>
                      <p>Some text here too.</p>
                      <Typical
                        steps={['What should we do?', 1000, 
                        'How about a movie?', 500, 
                        'Maybe a dinner date?', 500]}
                        loop={Infinity}
                        wrapper="p"
                      />
                  </div>
              
                  
              </div>
              
          </div>
       </>
    )
  }
};

export default Enter;