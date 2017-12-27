import React, { Component } from "react";

class AsideMenu extends Component {

    render() {

        var navListTop = {
            margin: 0,
            paddingTop: 50,
            paddingLeft: 20,
            listStyleType: "none",
            height: 195
        }

        var navItem = {
            padding: "12px 12px 12px 7px",
            float: "left",
            fontSize: 15,
            color: "#868e96",
            textDecoration: "none"
        }

        var icon = {
            paddingRight: 35,
            width: 15
        }

        var visibility = "hide"; // false

        if (this.props.menuVisibility) { //true, determined from button press in Menu Container, set in event handler
            visibility = "show";
        }

        return (
            <div id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}> {/*value of variable visibility - will equal .hide or .show */}
                <ul style={navListTop} >
                    <li className="link"><a href="http://versus-dev-list-view.azurewebsites.net" style={navItem}><i style={icon} className="fa fa-map-marker" /><span className="visiable">Badge Movement</span></a></li>
                    <li className="link"><a href="http://versus-dev-list-view.azurewebsites.net/badgr" style={navItem}><i style={icon} className="fa fa-id-card-o" /><span className="visiable">Badge Utility</span></a></li>
                    <li className="link"><a href="http://versus-dev-list-view.azurewebsites.net/locationHierarchy/" style={navItem}><i style={icon} className="fa fa-rss" /><span className="visiable">Location Explorer</span></a></li>
                </ul>
            </div>
        );
    }
}

export default AsideMenu;