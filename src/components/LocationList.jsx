import React, { Component } from 'react';
import Location from './Location';


class LocationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            clicked: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(selectedItem) {
        this.props.onListClick(selectedItem) // onListClick has a function as it's prop - send selectedItem to handleClick function in App.js
        this.setState({ clicked: selectedItem })
    }

    isSelected(location) { //determines what to render/re-render so only the current selected item is highlighted
        if (location.LocationId === this.state.clicked.LocationId) {
            return 'highlight'
        }
        else { return 'no_highlight' }
    }

    render() {
        var divStyle = {
            borderRadius: 1,
            textAlign: "center",
            height: 250,
            border: "1px solid #fff",
            margin: "0px auto",
            padding: "5px 15px"
        }
        var titleStyle = {
            padding: 15,
            fontSize: 14
        }

        var listStyle = {
            textDecorations: "none",
            color: "#000",
            listStyle: "none",
            textAlign: "left",
            height: 250,
            overflow: "auto",
            padding: "0px 3px"
        };

        //let location = this.props.location;

        return (
            <div style={divStyle} className="ms-Grid-col ms-lg2">
                <p style={titleStyle}>{this.state.title}</p>
                <div style={listStyle} value={this.props.level}>
                    {this.props.list.map(location => // Call Location Component unless list is empty - should be props, update state in parent that will pass down new props value 
                        <Location
                            location={location}
                            key={location.locationID + location.locationName}
                            tier={this.props.level}
                            title={location.locationName}
                            handler={this.handleClick}
                            highlightClass={this.isSelected(location)}
                        />
                    )  // else return empty
                    }
                </div>
            </div>
        );
    }
}

export default LocationList;
