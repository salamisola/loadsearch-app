import React, { Component } from 'react'
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Bloghomecontainer from "../components/containers/Bloghomecontainer";

class Bloghome extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Bloghomecontainer />
                <h1>Load Search App</h1>
                <Footer />
            </div >
        )
    }
}

export default Bloghome;