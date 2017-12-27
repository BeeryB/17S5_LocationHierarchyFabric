import React, { Component } from 'react';
import Logo from '../img/diamond.png';
import User from '../img/kevin.png';

class TopBar extends Component {
    constructor(props) {
        super(props);
       // this.handleChange = this.handleChange.bind(this);
        this.state={
            variable: props.variable,
        }   
    }

    myCustomMethod() {

    }

    render() {

        var bar = {
            height: 70,
            width: "100%",
            color: "#676f7e",
            backgroundColor: '#282f3a',
            boxShadow: "0 2px 2px rgba(0,0,0,.05), 0 1px 0 rgba(0,0,0,.05)"
        }

        var logo ={
            position: "absolute",
            top: 9,
            left: 25
        }

        var user ={
            position: "relative",
            float: "right",
            marginRight: 25,
            marginTop: 6        
        }

        var userName ={
            marginRight: 15,
            marginTop: 24,
            color: "#868e96",
            float: "right"
        }

        return(
            <div style={bar} >
               <img src={Logo} alt="logo" style={logo} />
               <img src={User} alt="logo" style={user} />
               <span style={userName}>Kevin Jackson</span>
            </div>
        );
    }
  }

export default TopBar;
