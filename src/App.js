import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import * as _ from 'lodash';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiDataList: [],
            fakeJSONDataList: [],
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
            tierStatus1: false,
            tierStatus2: false,
            tierStatus3: false,
            tierStatus4: false,
            tierStatus5: false,
            tierStatus6: false,
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
            // callback 
            .then(response => this.setState({ apiDataList: response }, state => console.log(this.state.apiDataList)))


                .catch(err => {
                    console.log("Fetch error: " + err);
                });
            
            // filter for column 1 data
            var filteredIDNTier = _.filter(this.state.apiDataList, { 'level': 1 });
            console.log('filtered IDN Tier: ', filteredIDNTier)
            // populate column 1 with data at launch
            this.setState({ columnTier1: filteredIDNTier })
    }


    handleClick(selectedItem) {
        // See value user clicked
        console.log('Selected location: ', selectedItem)

        if (selectedItem.TierLevel === 1) {
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
        }

        if (selectedItem.TierLevel === 2) {
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
        }

        if (selectedItem.TierLevel === 3) {
            this.setState({
                columnTier4: [],
                columnTier5: [],
                columnTier6: [],
                clickedResultsTier4: "",
                clickedResultsTier5: "",
                clickedResultsTier6: ""
            })
        }

        if (selectedItem.TierLevel === 4) {
            this.setState({
                columnTier5: [],
                columnTier6: [],
                clickedResultsTier5: "",
                clickedResultsTier6: ""
            })
        }

        if (selectedItem.TierLevel === 5) {
            this.setState({
                columnTier6: [],
                clickedResultsTier6: ""
            })

        }

        // filter master list of locations for children locations of clicked
        var FilteredListFromSelection = _.filter(this.props.fakeData, { 'TierLevel': selectedItem.TierLevel + 1, 'ParentTierId': selectedItem.LocationId });
        // update child tier list     
        this.setState({ ["columnTier" + (selectedItem.TierLevel + 1)]: FilteredListFromSelection })
        this.setState({ extendedData: selectedItem.ExtendedData })
        this.setState({ sensorId: selectedItem.SensorId })
        this.setState({ collectorId: selectedItem.CollectorId })
        this.setState({ sensorType: selectedItem.SensorType })
        this.setState({ ["clickedResultsTier" + (selectedItem.TierLevel)]: selectedItem.LocationName })
        this.setState({ ["tierStatus" + (selectedItem.TierLevel)]: true })
    }

    handleHighlight(selectedItem) {
        // this.setState({highlightList1: false})
        console.log("remove highlight from this tier list: ", ["highlightList" + (selectedItem.TierLevel + 1)])
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
            textAlign: "center"
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
                                        <div className="ms-Grid-col ms-lg4">
                                            <p style={selectedTitle}> Selected Locations </p>
                                            <p style={selectedLabel}> Idn: </p>
                                            <p style={selectedLabel}> Campus: </p>
                                            <p style={selectedLabel}> Building: </p>
                                            <p style={selectedLabel}> Floor: </p>
                                            <p style={selectedLabel}> Room: </p>
                                            <p style={selectedLabel}> Care: </p>
                                        </div>
                                        <div className="ms-Grid-col ms-lg3">
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
                                </div>
                                <div className="ms-Grid-row">
                                    <div className="ms-Grid-col ms-lg2">
                                        <p style={selectedResults}> {this.state.clickedResultsTier1}</p>
                                        <p style={selectedResults}> {this.state.clickedResultsTier2}</p>
                                        <p style={selectedResults}> {this.state.clickedResultsTier3}</p>
                                        <p style={selectedResults}> {this.state.clickedResultsTier4}</p>
                                        <p style={selectedResults}> {this.state.clickedResultsTier5}</p>
                                        <p style={selectedResults}> {this.state.clickedResultsTier6}</p>
                                    </div>
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



