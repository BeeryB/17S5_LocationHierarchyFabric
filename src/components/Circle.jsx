import React, { Component } from 'react';


class Circle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    
        var circleStyle = {
            width: 50,
            height: 50,
            background: this.props.circleHex,
            mozBorderRadius: '50%',
            webkitBorderRadius: '50%',
            borderRadius: '50%',
            display: 'inline-block'
        }

        var sectionStyle = {
            display: 'inline-block',
            padding: '15px 25px'
        }
    
        return(
            <section style={sectionStyle} className="ms-textAlignCenter">
                <span style={circleStyle} /> 
                <p className="ms-font-m">{this.props.colorName}</p>
            </section>
        );
    }
}

export default Circle;