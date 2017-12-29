import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import * as _ from 'lodash';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiDataList: [],
            idnList: [],
            columnTier1: [],
            columnTier2: [],
            columnTier3: [],
            columnTier4: [],
            columnTier5: [],
            columnTier6: [],
            clickedResultsTier1: "",
            clickedResultsTier2: "",
            clickedResultsTier3: "",
            clickedResultsTier4: "",
            clickedResultsTier5: "",
            clickedResultsTier6: "",
            extendedData: [],
            sensorId: "",
            collectorId: "",
            sensorType: "",
            clicked: false
        }
        // bind HTML tag to click event that will be handled by function, handleClick()
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        // fetch data from Operational API
        fetch('http://versus-dev-ops-api.azurewebsites.net/api/v0/locationhierarchy')
            .then(response => response.json())
            .catch(err => {
                console.log("Fetch error: " + err);
            })

            // add all the data to apiDataList state
            .then(response => this.setState({ apiDataList: response }, this.populateColumn1))
            
    }

    populateColumn1() {
        // filter for column 1 data
        var filteredIDNTier = _.filter(this.state.apiDataList, { 'level': 1 });
        
        // populate column 1 with data at launch
        this.setState({ columnTier1: filteredIDNTier});
    }

    handleClick(selectedItem) {
        // add selected value to UI 
        this.setState({ ["clickedResultsTier" + (selectedItem.level)]: selectedItem.locationName })

        // filter for children of selected
        var childrenList = selectedItem.children
        
        if (selectedItem.children == null) {
            console.log('Its the end of the line for you')
        } 
        else {   
            // update child column list     
            this.setState({ ["columnTier" + (selectedItem.level + 1)]: childrenList })   
        }
    }

    // clear out lists based on new click location
    clearLists(selectedItem) {

        if (selectedItem.level === 1) {
            this.setState({
                columnTier2: [],
                columnTier3: [],
                columnTier4: [],
                columnTier5: [],
                columnTier6: [],
                clickedResultsTier2: "",
                clickedResultsTier3: "",
                clickedResultsTier4: "",
                clickedResultsTier5: "",
                clickedResultsTier6: "",
            })
            console.log('Column 2, Campus data: ', this.state.columnTier2)
        }

        if (selectedItem.level === 2) {
            this.setState({
                columnTier3: [],
                columnTier4: [],
                columnTier5: [],
                columnTier6: [],
                clickedResultsTier3: "",
                clickedResultsTier4: "",
                clickedResultsTier5: "",
                clickedResultsTier6: ""
            })
            console.log('Column 3, Building data: ', this.state.columnTier3)
        }

        if (selectedItem.level === 3) {
            this.setState({
                columnTier4: [],
                columnTier5: [],
                columnTier6: [],
                clickedResultsTier4: "",
                clickedResultsTier5: "",
                clickedResultsTier6: ""
            })
            console.log('Column 4, Floor data: ', this.state.columnTier4)
        }

        if (selectedItem.level === 4) {
            this.setState({
                columnTier5: [],
                columnTier6: [],
                clickedResultsTier5: "",
                clickedResultsTier6: ""
            })
            console.log('Column 5, Room data: ', this.state.columnTier5)
        }

        if (selectedItem.level === 5) {
            this.setState({
                columnTier6: [],
                clickedResultsTier6: ""
            })
            console.log('Column 6, Care data: ', this.state.columnTier6)
        }
    } 

    handleHighlight(selectedItem) {
        // this.setState({highlightList1: false})
        console.log("remove highlight from this tier list: ", ["highlightList" + (selectedItem.level + 1)])
    }

    render() {

        var app = {
            textAlign: "center",
            backgroundColor: "#c1bdba"
        }

        var tile = {
            backgroundColor: "white",
            margin: "4em auto"
        }

        var tileHeader = {
            textAlign: "center",
            textTransform: "uppercase",
            marginTop: "2em",
            marginBottom: "3em",
            color: "#000",
        }

        var selectedTitle = {
            textAlign: "left",
            margin: "0em 0em 1em 1em",
            color: "#005a9e"
        }

        var selectedLabel = {
            fontSize: 14,
            paddingBottom: 0,
            margin: "0em 0em .75em 1em",
            textAlign: "left"
        }
        
        var selectedResultsTop = {
            marginTop: 0,
            fontSize: 14,
            paddingBottom: 0,
            margin: "0em 0em .75em 1em",
            textAlign: "left"
        }

        var selectedResults = {
            color: "#007dc3",
            fontSize: 14,
            paddingBottom: 0,
            marginBottom: 0
        }

        var sensorTitle = {
            textAlign: "left",
            margin: "0em 0em 1em .7em",
            color: "#005a9e"
        }

        var dataLists = {
            margin: "3em 0em 0em 0em"
        }

        return (
            <div className="ms-Grid">
                <div className="ms-Grid-row">
                    <div style={app} className="ms-Grid-col ms-sm12">
                        <div className="ms-Grid-col ms-sm1" />
                        <div style={tile} id="tile" className="ms-Grid-col ms-sm10">
                                <div className="ms-Grid-row">
                                    <div className="ms-Grid-col ms-sm12">
                                        <h2 className="ms-fontSize-xl" style={tileHeader}>Location Explorer</h2>
                                    </div>
                                </div>
                                <div className="ms-Grid-row">
                                <p style={selectedTitle}> Selected Locations </p>
                                        <div className="ms-Grid-col ms-lg1">
                                            <p style={selectedLabel}> Idn: </p>
                                            <p style={selectedLabel}> Campus: </p>
                                            <p style={selectedLabel}> Building: </p>
                                            <p style={selectedLabel}> Floor: </p>
                                            <p style={selectedLabel}> Room: </p>
                                            <p style={selectedLabel}> Care: </p>
                                        </div>
                                        <div className="ms-Grid-col ms-lg2">
                                            <p style={selectedResultsTop}> {this.state.clickedResultsTier1}</p>
                                            <p style={selectedResults}> {this.state.clickedResultsTier2}</p>
                                            <p style={selectedResults}> {this.state.clickedResultsTier3}</p>
                                            <p style={selectedResults}> {this.state.clickedResultsTier4}</p>
                                            <p style={selectedResults}> {this.state.clickedResultsTier5}</p>
                                            <p style={selectedResults}> {this.state.clickedResultsTier6}</p>
                                        </div>
                                        {/*<div className="ms-Grid-col ms-lg3">
                                            <p style={sensorTitle}>Sensor Data</p>
                                            <div className="ms-Grid-row">
                                                <div className="ms-Grid-col ms-lg4">
                                                    <p style={selectedLabel}>Sensor Id:    </p>
                                                    <p style={selectedLabel}>Collector Id: </p>
                                                    <p style={selectedLabel}>Sensor Type:  </p>
                                                </div>
                                                <div className="ms-Grid-col ms-lg7">
                                                    <p style={selectedResults}>{this.state.sensorId}    </p>
                                                    <p style={selectedResults}>{this.state.collectorId} </p>
                                                    <p style={selectedResults}>{this.state.sensorType}  </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-Grid-col ms-lg5">
                                            <p style={sensorTitle}>Notes</p>
                                            <p style={selectedResults}>{this.state.extendedData}</p>
                                        </div>
                                        */}
                                </div>              
                                <div className="ms-Grid-row" style={dataLists}>
                                        <LocationList key="1" title="IDN"       list={this.state.columnTier1} onListClick={this.handleClick} />
                                        <LocationList key="2" title="Campus"    list={this.state.columnTier2} onListClick={this.handleClick} />
                                        <LocationList key="3" title="Building"  list={this.state.columnTier3} onListClick={this.handleClick} />
                                        <LocationList key="4" title="Floor"     list={this.state.columnTier4} onListClick={this.handleClick} />
                                        <LocationList key="5" title="Room"      list={this.state.columnTier5} onListClick={this.handleClick} />
                                        <LocationList key="6" title="Care"      list={this.state.columnTier6} onListClick={this.handleClick} />
                                </div>
                        </div>                       
                        <div className="ms-Grid-col ms-sm1" />  
                     </div>
                </div>
            </div>
        );
    }
}

export default App;



