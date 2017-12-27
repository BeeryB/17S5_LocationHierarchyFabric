import React, { Component } from 'react';
import '../App.css';

class Location extends Component {
    constructor(props) {
        super(props);
        this.state={
            locationsList: props.locationList,
        }   
        this.onClick = this.onClick.bind(this);       
    }

    onClick(selectedItem) { 
        this.props.handler(this.props.location);
     };

    render() {

        var locationStyle = {
            fontSize: 14,
            paddingLeft: 10
        }

        let location = this.props.location;
        console.log(this.props)     

        return(
            <div 
                id="item"
                style={locationStyle}  
                key={location.LocationId} 
                value={location.Name} 
                level={location.Level}
                onClick={this.onClick}
                className={this.props.highlightClass}
            >
                {location.LocationName} 
            </div> 
        );
    }
  }

export default Location;
