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
        fetch('http://versus-dev-ops-api.azurewebsites.net/api/v0/locations')
            .then(response => response.json())
            .then(response => this.setState({ apiDataList: response }))

            .catch(err => {
                console.log("Fetch error: " + err);
            });

        // fetch data from local JSON
        this.setState({ fakeJSONDataList: this.props.fakeData })
        // filter for column 1 data, show at launch time
        var filteredIDNTier = _.filter(this.props.fakeData, { 'TierLevel': 1 });
        ////var IDNList = _.find(filteredIDNList, [ 'LocationId', 9000 ]);
        var IDNList = _.filter(filteredIDNTier, ({ LocationId }) => LocationId > 9000)
        this.setState({ columnTier1: IDNList })
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

        var tileHeader = {
            textAlign: "center",
            textTransform: "uppercase",
            marginTop: 20,
            marginBottom: 85,
            color: "#000",
            paddingTop: 10
        }

        var selectedLabel = {
            fontSize: 14,
            paddingBottom: 0,
            marginBottom: 0
        }

        var selectedResults = {
            color: "#007dc3",
            fontSize: 14,
            paddingBottom: 0,
            marginBottom: 0
        }

        var logo = {
            marginLeft: "-20px"
        }

        return (
            <div>
                <div id="app" className="container-fluid">

                    <h3 style={tileHeader}>Location Explorer</h3>
                    <div className="row">
                        <div className="col-sm-3">
                            <h6>Selected Locations </h6>
                            <div className="row">
                                <div className="col-sm-3">
                                    <p style={selectedLabel}> Idn: </p>
                                    <p style={selectedLabel}> Campus: </p>
                                    <p style={selectedLabel}> Building: </p>
                                    <p style={selectedLabel}> Floor: </p>
                                    <p style={selectedLabel}> Room: </p>
                                    <p style={selectedLabel}> Care: </p>
                                </div>
                                <div className="col-sm-9">
                                    <p style={selectedResults}> {this.state.clickedResultsTier1}</p>
                                    <p style={selectedResults}> {this.state.clickedResultsTier2}</p>
                                    <p style={selectedResults}> {this.state.clickedResultsTier3}</p>
                                    <p style={selectedResults}> {this.state.clickedResultsTier4}</p>
                                    <p style={selectedResults}> {this.state.clickedResultsTier5}</p>
                                    <p style={selectedResults}> {this.state.clickedResultsTier6}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <h6>Sensor Data </h6>
                            <div className="row">
                                <div className="col-sm-4">
                                    <p style={selectedLabel}>Sensor Id:    </p>
                                    <p style={selectedLabel}>Collector Id: </p>
                                    <p style={selectedLabel}>Sensor Type:  </p>
                                </div>
                                <div className="col-sm-7">
                                    <p style={selectedResults}>{this.state.sensorId}    </p>
                                    <p style={selectedResults}>{this.state.collectorId} </p>
                                    <p style={selectedResults}>{this.state.sensorType}  </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <h6>Notes </h6>
                            <p style={selectedResults}>{this.state.extendedData}</p>
                        </div>
                    </div>
                    <br /><br /><br />
                    <div className="row">
                        <LocationList key="1" list={this.state.columnTier1} onListClick={this.handleClick} />
                        <LocationList key="2" list={this.state.columnTier2} onListClick={this.handleClick} />
                        <LocationList key="3" list={this.state.columnTier3} onListClick={this.handleClick} />
                        <LocationList key="4" list={this.state.columnTier4} onListClick={this.handleClick} />
                        <LocationList key="5" list={this.state.columnTier5} onListClick={this.handleClick} />
                        <LocationList key="6" list={this.state.columnTier6} onListClick={this.handleClick} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;



