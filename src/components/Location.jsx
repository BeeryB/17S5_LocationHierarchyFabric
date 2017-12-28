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
        console.log('location: ', this.props.location)

        return(
            <div 
                id="item"
                style={locationStyle}  
                key={location.locationId + location.locationName}
                value={location.locationID} 
                level={location.level}
                onClick={this.onClick}
                className={this.props.highlightClass}
            >
               {/*} {location.LocationName} */}
              { location.locationName}
            </div> 
        );
    }
  }

export default Location;
