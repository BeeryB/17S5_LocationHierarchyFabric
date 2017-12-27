import React, { Component } from 'react';
import '../App.css';
//import AsideButton from './AsideButton';
import AsideMenu from './AsideMenu'


class AsideContainer extends Component {
    constructor(props) {
        super(props);

       this.state = {
        visible: true // show full width menu at start
      }
     
      this.toggleMenu = this.toggleMenu.bind(this); 
      this.handleMouseDown = this.handleMouseDown.bind(this);
     
    }

    toggleMenu() {
        this.setState({visible: !this.state.visible});
    }

    handleMouseDown(e) {
        this.toggleMenu();
     
        console.log("aside button was clicked");
        e.stopPropagation();
      }

    render() {

        var aside = {
            height: 1000,
            width: 215,
            color: "#868e96",
            backgroundColor: '#282f3a'
        }

        return(
            <aside style={aside} >
               {/*} <AsideButton handleMouseDown={this.handleMouseDown} /> {/*pass handleMouseDown function as a prop*/}
                <AsideMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/> {/* same as above and also show menu based on state value of visiable */}
            </aside>
        );
    }
  }

export default AsideContainer;
