import React, { Component } from 'react'
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Homepagecontainer from "../components/containers/Homepagecontainer";
/* import "../container.css"; */

class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Homepagecontainer />
                <h1>Load Search App</h1>
                <Footer />
            </div >
        )
    }
}

export default Home;