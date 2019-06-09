import React, { Component } from 'react'
import Nav from "../components/nav/Nav";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/footer/Footer";
import Searchpagecontainer from "../components/containers/Searchpagecontainer";
import API from "../utils/API";
import Table from "../components/Table";
/* import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List"; */

class Searchpage extends Component {
    state = {

        equipment: "reefer",
        distance: "1",
        rate: "low",

        loads: [],
        q: "",
        message: "Search For A Load To Begin!"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getLoads = () => {
        API.getLoads(this.state.equipment, this.state.distance, this.state.rate)
            .then(res =>
                this.setState({
                    loads: res.data
                })
            )
            .catch(() =>
                this.setState({
                    loads: [],
                    message: "No Loads Found, Try Different Search Parameters"
                })
            );
        console.log(this.state.loads)
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getLoads();
    };

    handleLoadSave = id => {
        const load = this.state.loads.find(load => load.id === id);

        API.saveLoad({
            LoadId: load.id,
            equipment: load.equipment,
            distance: load.distance,
            rate: load.rate,
            link: load.loadInfoLink,
        }).then(() => this.getLoads());
    };

    render() {
        return (
            <div>
                <Nav />
                <Table />
                <Searchpagecontainer handleLoadSave={this.handleLoadSave} handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit} equipment={this.state.equipment}
                    distance={this.state.distance} rate={this.state.rate} />
                <h1>Load Search Results</h1>
                <Table state={this.state.loads} />



                <Footer />
            </div >
        )
    }
}
export default Searchpage;

