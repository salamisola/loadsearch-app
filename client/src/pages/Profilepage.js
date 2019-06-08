import React, { Component } from 'react'
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Profilepagecontainer from "../components/containers/Profilepagecontainer";

class Profilepage extends Component {
    /* function Profilepage() { */
    render() {
        return (
            <div>
                <Nav />
                <Profilepagecontainer />
                <h1>New User Profile Page</h1>
                <Footer />
            </div >

        )
    }
}

export default Profilepage;


